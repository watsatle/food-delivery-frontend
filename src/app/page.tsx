"use client";

import Image from "next/image";
import { menu } from "../app/mock/menu.json";
import { useEffect } from "react";

export default function Home() {
    useEffect(function () {
        console.log("debug", menu[0]);
    });

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
                                    className=" flex-col w-[23%] min-w-[171px] text-center items-center justify-center 	"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="rounded-lg"
                                        alt=""
                                    />
                                    {item.name} {item.price}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </main>
            <div className="flex flex-col h-screen bg-gray-100 p-[1rem] ">
                <div className="flex-col p-4 w-[300px] h-[80%] space-y-5 rounded-lg bg-gray-50">
                    <h2 className="font-bold text-lg rounded-lg">Wish list</h2>

                    <h1 className="h-2 font-medium">Dishes</h1>
                    <ul className="flex flex-row flex-wrap w-full h-[30%] text-start overflow-scroll">
                        <li className="w-[50%] h-[30px]  text-zinc-400">
                            Salada
                        </li>
                        <li className="w-[25%] h-[30px]  text-zinc-400">200</li>
                        <button>
                            <li className="w-[25%] h-[30px]  text-zinc-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        </button>
                        <li className="w-[50%] h-[30px]  text-zinc-400">
                            Salada
                        </li>
                        <li className="w-[25%] h-[30px]  text-zinc-400">200</li>
                        <button>
                            <li className="w-[25%] h-[30px]  text-zinc-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        </button>
                        <li className="w-[50%] h-[30px]  text-zinc-400">
                            Salada
                        </li>
                        <li className="w-[25%] h-[30px]  text-zinc-400">200</li>
                        <button>
                            <li className="w-[25%] h-[30px]  text-zinc-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        </button>
                    </ul>
                    <h1 className="h-2 mt-5 font-medium">Drink</h1>
                    <ul className="flex flex-row flex-wrap w-full h-[30%] text-start overflow-scroll">
                        <li className="w-[50%]  h-[30px]  text-zinc-400">
                            Coca-Cola
                        </li>
                        <li className="w-[25%]  h-[30px]  text-zinc-400">
                            200
                        </li>
                        <button>
                            <li className="w-[25%] h-[30px]  text-zinc-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        </button>
                        <li className="w-[50%]  h-[30px]  text-zinc-400">
                            Coca-Cola
                        </li>
                        <li className="w-[25%]  h-[30px]  text-zinc-400">
                            200
                        </li>
                        <button>
                            <li className="w-[25%] h-[30px]  text-zinc-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        </button>
                        <li className="w-[50%]  h-[30px]  text-zinc-400">
                            Coca-Cola
                        </li>
                        <li className="w-[25%]  h-[30px]  text-zinc-400">
                            200
                        </li>
                        <button>
                            <li className="w-[25%] h-[30px]  text-zinc-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </li>
                        </button>
                    </ul>
                    <ul className="flex flex-row flex-wrap w-full h-[10%] font-semibold place-items-end ">
                        <li className="flex-1  text-zinc-800">Total</li>
                        <li className="flex-1  text-zinc-800">40,000 ฿</li>
                    </ul>
                </div>

                <div className="flex h-[20%] w-full flex-col gap-3 justify-end items-center bg-gray-100">
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
        </>
    );
}

{
}
