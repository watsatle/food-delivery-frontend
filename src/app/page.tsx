"use client";

import { useEffect, useState } from "react";
import MenuItem from "@/app/component/menuItem";
import Cart from "@/app/component/cart";

interface MenuItem {
    id: number;
    name: string;
    description: string | null;
    price: number;
    size: string | null;
    catagory: string | null;
    store_id: number;
}

type MenuItemCounter = MenuItem & { count: number };

export default function Home() {
    const [menuItem, setMenuItem] = useState<MenuItemCounter[]>([]);

    const filterCart = menuItem.filter((menu) => menu.count);
    const [Total, setTotal] = useState(0);

    useEffect(() => {
        fetch("http://localhost:4000/menu")
            .then((res) => res.json())
            .then(({ result }) => {
                const menuCounter = result.map((item) => {
                    const addCount: MenuItemCounter = { ...item, count: 0 };

                    return addCount;
                });

                setMenuItem(menuCounter);
            })
            .catch(console.error);
    }, []);

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
                    <MenuItem
                        menu={menuItem}
                        menuItem={menuItem}
                        setMenuItem={setMenuItem}
                    />
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
                        <button className=" h-[1/3] w-[85%] min-h-[48px] rounded-lg bg-blue-500 text-white">
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
