import { useEffect, useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
import PropTypes from 'prop-types';

const Menu = ({ handleWantToCook, handleWantToCookFoods }) => {
    const [menus, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu-item.json')
            .then(res => res.json())
            .then(data => setMenu(data))
    }, [])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 w-full sm:w-full lg:w-1/2 mx-auto ms-12">
            {
                menus.map((menu, idx) => <MenuItem key={idx} menu={menu}
                    handleWantToCook={handleWantToCook}
                    handleWantToCookFoods={handleWantToCookFoods}
                ></MenuItem>)
            }
        </div>
    );
};

Menu.propTypes = {
    handleWantToCook: PropTypes.func,
    handleWantToCookFoods: PropTypes.func
}

export default Menu;