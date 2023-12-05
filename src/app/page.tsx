"use client";

import Image from "next/image";
import { menu } from "../app/mock/menu.json";
import { useEffect, useState } from "react";
import { count, log } from "console";

export default function Home() {
    const [menuItem, setMenuItem] = useState(
        menu.map((item) => {
            const addCount = { ...item, count: 0 };
            // console.log(addCount);
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
        console.log(Total);
    }, [menuItem]);

    return (
        <>
            <main className="w-full h-screen bg bg-gray-100 p-[1rem] ">
                <h1 className="font-bold  text-lg pt-3">Dishes of the Day</h1>
                <div className="flex h-full">
                    <ul className=" flex flex-row flex-wrap h-[95%] justify-center gap-x-2 gap-y-5 pt-[2rem] overflow-scroll">
                        {menu.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => {
                                        const itemCount = [...menuItem];
                                        itemCount[index].count += 1;
                                        setMenuItem(itemCount);
                                        // console.log(itemCount);
                                    }}
                                    className=" flex-col w-[23%] min-w-[171px] text-center items-center justify-center 	"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="rounded-lg"
                                        alt=""
                                    />
                                    {item.name}
                                    {item.price}
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
                    <div className="grid grid-row-1 h-[450px] pt-3 gap-1 content-start overflow-scroll">
                        {filterCart.map((item, menu) => {
                            return (
                                <div
                                    key={
                                        "item-$${item.count}, {item.name}, {item.price} "
                                    }
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
                                    <div className="col-span-1 text-xs  bg-gray-50"></div>
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
