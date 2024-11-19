import PropTypes from 'prop-types';

const MenuItem = ({ menu, handleWantToCook, handleWantToCookFoods }) => {
    const { food_name, short_description, ingredients_number, ingredients, time, calorie } = menu
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src="https://via.placeholder.com/300" alt="Card Image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{food_name}</div>
                    <p className="text-gray-700 text-base">
                        {short_description}
                    </p>
                </div>
                <div className="px-6 py-4">
                    <button  onClick={() => { handleWantToCook(menu); handleWantToCookFoods(menu); }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                       Want To Cook
                    </button>
                </div>
            </div>


        </div>
    );
};

MenuItem.propTypes = {
    menu: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func,
    handleWantToCookFoods: PropTypes.func
}
export default MenuItem;