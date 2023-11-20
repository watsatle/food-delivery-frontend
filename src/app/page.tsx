import Image from "next/image";

export default function Home() {
    return (
        <>
            <main className="w-full h-full bg bg-red-300 ">
                <h1>Menu</h1>
                <ul className="list flex flex-row gap-8 mt-10">
                    <li className="flex flex-col w-1/4 h-[100px] text-center items-center justify-center">
                        <img src="https://placehold.co/600x400" alt="" />
                        hotpot
                    </li>
                    <li className="flex flex-col w-1/4 h-[100px] text-center items-center justify-center">
                        <img src="https://placehold.co/600x400" alt="" />
                        hotpot
                    </li>
                    <li className="flex flex-col w-1/4 h-[100px] text-center items-center justify-center">
                        <img src="https://placehold.co/600x400" alt="" />
                        hotpot
                    </li>
                    <li className="flex flex-col w-1/4 h-[100px] text-center items-center justify-center">
                        <img src="https://placehold.co/600x400" alt="" />
                        hotpot
                    </li>
                </ul>
            </main>
            <div className="flex-auto h-full bg-slate-100 ">
                <div className="float-right h-[100%] w-[300px] bg-blue-500">
                    <h1 className="bg-gray-200">test</h1>
                    <div className="flex h-[40%] w-[300px] bg-gray-200"></div>
                    <div className="flex h-[40%] w-[300px] bg-gray-300"></div>
                    <div className="flex h-[17%] w-[300px] bg-gray-400"></div>
                </div>
            </div>
        </>
    );
}
