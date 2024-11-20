import PropTypes from 'prop-types';
import CurentCookingStatus from '../CurrntCookingStatus/CurentCookingStatus';
const CurentlyCooking = ({ curentCookingStatus, curentCookingFood }) => {

    const uniqueFoods = [
        ...new Map(curentCookingFood.map((UniquefoodItem) => [UniquefoodItem.food_name, UniquefoodItem])).values()
    ];
    return (
        <div className="ms-12">
            <h1>Curently Cooking: {curentCookingStatus}</h1>
            <hr className="mt-3" />
            <div className='flex gap-20'>
            <h1>Name</h1>
            <h1>Time</h1>
            <h1>Calorie</h1>
            </div>
            <div>
                {
                    uniqueFoods.map((cFood,idx) => <CurentCookingStatus key={idx} cFood={cFood}></CurentCookingStatus>)
                }
            </div>
        </div>
    );
};
CurentlyCooking.propTypes = {
    curentCookingStatus: PropTypes.number.isRequired,
    curentCookingFood: PropTypes.array.isRequired
}
export default CurentlyCooking;