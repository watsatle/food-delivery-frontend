"use client";

import Image from "next/image";
import { menu } from "../app/mock/menu.json";
import { useEffect, useState } from "react";
import { count, log } from "console";
import { isNumberObject } from "util/types";

export default function Home() {
    const [menuItem, setMenuItem] = useState(
        menu.map((item) => {
            const addCount = { ...item, count: 0 };

            return addCount;
        }),
    );

    const filterCart = menuItem.filter((menu) => menu.count > 0);

    const [Total, setTotal] = useState(0);

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
                    <ul className=" flex flex-row flex-wrap h-[95%] justify-center gap-x-2 gap-y-5 pt-[2rem] text-sm overflow-scroll">
                        {menu.map((item, index) => {
                            return (
                                <li
                                    key={`menu-${index}`}
                                    onClick={() => {
                                        const itemCount = [...menuItem];
                                        itemCount[index].count += 1;
                                        setMenuItem(itemCount);
                                    }}
                                    className=" flex-col w-[23%] min-w-[171px] text-center items-center justify-center 	"
                                >
                                    <img
                                        src={item.image}
                                        className="rounded-lg"
                                        alt=""
                                    />
                                    {item.name}[{item.price}]
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
            <div className="flex flex-col h-screen w-[400px] bg-gray-50 p-[1rem] ">
                <div className="flex flex-col p-3 h-full rounded-lg ">
                    <div className="justufy-items-start">
                        <h2 className="font-bold text-lg rounded-lg">Cart</h2>
                    </div>
                    <div className="grid grid-row-1 h-[500px] pt-3 gap-1 content-start overflow-scroll">
                        {filterCart.map((item, index) => {
                            return (
                                <div
                                    key={`cart${index}`}
                                    className="grid h-10 grid-cols-6 gap-3 bg-gray-50  "
                                >
                                    <div className="col-span-1 text-xs bg-gray-50">
                                        {item.count}
                                    </div>
                                    <div className="col-span-3 text-xs  bg-gray-50">
                                        {item.name}
                                    </div>
                                    <div className="col-span-1 text-xs  bg-gray-50">
                                        {item.price}
                                    </div>
                                    <div className="col-span-1 text-xs  bg-gray-50">
                                        <button
                                            onClick={() => {
                                                const deleteIndex =
                                                    menuItem.findIndex(
                                                        (delItem) => {
                                                            return (
                                                                delItem.name ===
                                                                item.name
                                                            );
                                                        },
                                                    );
                                                const itemDel = [...menuItem];
                                                itemDel[deleteIndex].count -= 1;
                                                setMenuItem(itemDel);
                                                console.log(itemDel);
                                            }}
                                            className=" w-full h-5 bg-red-400 rounded-lg"
                                        >
                                            {" "}
                                            Del
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

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
