export default function Cart(props) {
    return (
        <div className="grid grid-row-1 h-[500px] pt-3 gap-1 content-start overflow-scroll">
            {props.filterCart.map((item, index) => {
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
                                        props.menuItem.findIndex((delItem) => {
                                            return delItem.name === item.name;
                                        });
                                    const itemDel = [...props.menuItem];
                                    itemDel[deleteIndex].count -= 1;
                                    props.setMenuItem(itemDel);
                                    console.log(itemDel);
                                }}
                                className=" w-full h-5 bg-gray-100"
                            >
                                {" "}
                                X
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
