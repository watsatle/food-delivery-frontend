export default function MenuItem(props) {
    return (
        <ul className=" flex flex-row flex-wrap h-[95%] justify-center gap-x-2 gap-y-5 pt-[2rem] text-sm overflow-scroll">
            {props.menu.map((item, index) => {
                return (
                    <li
                        key={`menu-${index}`}
                        onClick={() => {
                            const itemCount = [...props.menuItem];
                            itemCount[index].count += 1;
                            props.setMenuItem(itemCount);
                        }}
                        className=" flex-col w-[23%] min-w-[171px] text-center items-center justify-center 	"
                    >
                        <img src={item.image} className="rounded-lg" alt="" />
                        {item.name}[{item.price}]
                    </li>
                );
            })}
        </ul>
    );
}
