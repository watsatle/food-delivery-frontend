import Image from "next/image";

export default function Home() {
    //   const menuName: string[] = [
    //     "Mediterranean Bites Burst",
    //     "Ocean Gems Delight",
    //     "Golden Mozzarella Elixirs",
    //   ]
    // const lowermenuName = menuName.map (item => item.toLowerCase())
    // let singleMenuname: '' = "Mediterranean Bites Burst" ;

    return (
        <>
            <main className="w-full h-full bg bg-gray-100 p-[1rem] ">
                <h1>Menu</h1>
                <ul className="list flex flex-row flex-wrap w-100 justify-center gap-x-2 gap-y-5 pt-[3rem] ">
                    <li className=" flex-col w-[24%] text-center items-center justify-center 	">
                        <img
                            src="https://placehold.co/600x400"
                            className="rounded-lg"
                            alt=""
                        />
                        hotpot
                    </li>
                    <li className=" flex-col w-[24%] text-center items-center justify-center 	">
                        <img
                            src="https://placehold.co/600x400"
                            className="rounded-lg"
                            alt=""
                        />
                        hotpot
                    </li>
                    <li className=" flex-col w-[24%] text-center items-center justify-center 	">
                        <img
                            src="https://placehold.co/600x400"
                            className="rounded-lg"
                            alt=""
                        />
                        hotpot
                    </li>
                    <li className=" flex-col w-[24%] text-center items-center justify-center 	">
                        <img
                            src="https://placehold.co/600x400"
                            className="rounded-lg"
                            alt=""
                        />
                        hotpot
                    </li>
                </ul>
            </main>
            <div className="flex-auto h-screen bg-gray-100 p-[1rem] ">
                <div className="float-right h-[100%] w-[300px] bg-gray-100">
                    <div className="flex h-[80%] p-4 w-full rounded-lg bg-gray-50">
                        <h1 className=" rounded-lg">Name Customer</h1>
                    </div>

                    <div className="flex h-[20%] w-full flex-col gap-3 justify-center items-center bg-gray-100">
                        <button className=" h-1/3 w-[85%] rounded-lg bg-blue-500 text-white">
                            {" "}
                            Click me
                        </button>
                        <button className=" h-1/3 w-[85%] rounded-lg bg-gray-500 text-white">
                            {" "}
                            Click me
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

{
    /* //{menuName.map((name) => {
                    return( <li className="flex flex-col w-1/4 h-[100px] text-center items-center justify-center">
                    <img src="https://placehold.co/600x400" alt="" />
                    hotpot
                </li>)
                  })
                  } */
}
