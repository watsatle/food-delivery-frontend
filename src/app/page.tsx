"use client";

import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import MenuItem, { type ApiMenuItem } from "@/app/component/menuItem";
import Cart from "@/app/component/cart";

export type MenuItemCounter = ApiMenuItem & { count: number };
export type menuItemProp = Dispatch<SetStateAction<MenuItemCounter[]>>;

export default function Home() {
    const [menuItem, setMenuItem] = useState<MenuItemCounter[]>([]);
    const [customerId, setcustomerId] = useState<number>(0);

    const filterCart = menuItem.filter((menu) => menu.count);
    const [Total, setTotal] = useState(0);

    useEffect(() => {
        fetch("http://localhost:4000/menu")
            .then((res) => res.json() as Promise<{ result: ApiMenuItem[] }>)
            .then(({ result }) => {
                const menuCounter = result.map((item) => {
                    const addCount: MenuItemCounter = { ...item, count: 0 };

                    return addCount;
                });

                setMenuItem(menuCounter);
            })
            .catch(console.error);
        fetch("http://localhost:4000/customer")
            .then((res) => res.json() as Promise<{ result: [{ id: number }] }>)
            .then(({ result }) => {
                setcustomerId(result[0].id);
            });
    }, []);

    // useEffect(() => {
    //     console.log("-> customer id", customerId);
    // }, [customerId]);

    useEffect(() => {
        let Total = 0;
        menuItem
            .filter((item) => item.count > 0)

            .forEach((item) => (Total += item.count * item.price));

        setTotal(Total);
    }, [menuItem]);

    return (
        <>
            <main className="w-full h-screen bg bg-gray-100 p-[1rem] ">
                <h1 className="font-bold  text-lg pt-3">Dishes of the Day</h1>
                <div className="flex h-full">
                    <MenuItem menu={menuItem} setMenuItem={setMenuItem} />
                </div>
            </main>
            <div className="flex flex-col h-screen w-[400px] bg-gray-50 p-[1rem] ">
                <div className="flex flex-col p-3 h-full rounded-lg ">
                    <div className="justufy-items-start">
                        <h2 className="font-bold text-lg rounded-lg">Cart</h2>
                    </div>

                    <Cart
                        filterCart={filterCart}
                        menuItem={menuItem}
                        setMenuItem={setMenuItem}
                    />

                    <div className="content-end">
                        <ul className=" flex w-full h-[20%] font-semibold justify-end ">
                            <li className="flex-1  text-zinc-800">Total</li>
                            <li className="flex-1  text-zinc-800">{Total} ฿</li>
                        </ul>
                    </div>
                    <div className="flex flex-col h-[20%] w-full  gap-3 justify-end items-center ">
                        <button
                            onClick={() => {
                                type orderTsxItem = {
                                    customerId: number;
                                    orderItems: {
                                        foodItemId: number;
                                        quantity: number;
                                    }[];
                                };
                                const postOrderItemData: orderTsxItem = {
                                    customerId: customerId,
                                    orderItems: filterCart.map((menu) => ({
                                        foodItemId: menu.id,
                                        quantity: menu.count,
                                    })),
                                };
                                const fetchResult = fetch(
                                    "http://localhost:4000/transactions",
                                    {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                        body: JSON.stringify(postOrderItemData),
                                    },
                                )
                                    .then((res) => res.json())
                                    .then((res) => console.log("->", res));

                                console.log("-> cart ", filterCart, customerId);
                            }}
                            className=" h-[1/3] w-[85%] min-h-[48px] rounded-lg bg-blue-500 text-white"
                        >
                            {" "}
                            Checkout
                        </button>
                        <button className=" h-[1/3] w-[85%] min-h-[48px] rounded-lg bg-gray-500 text-white">
                            {" "}
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

{
}
