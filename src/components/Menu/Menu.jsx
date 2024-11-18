import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const Menu = () => {
    const [menus, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu-item.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-2/3 ms-12">
             {
                menus.map((menu,idx) => <MenuItem key = {idx} menu={menu}></MenuItem>)
             }
        </div>
    );
};

export default Menu;