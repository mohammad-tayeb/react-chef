import PropTypes from 'prop-types';
import CurentCookingStatus from '../CurrntCookingStatus/CurentCookingStatus';
const CurentlyCooking = ({ curentCookingStatus, curentCookingFood }) => {

    const uniqueFoods = [
        ...new Map(curentCookingFood.map((UniquefoodItem) => [UniquefoodItem.food_name, UniquefoodItem])).values()
    ];
    return (
        <div className="mt-6 border rounded-md p-3">
            <h1 className='font-bold'>Curently Cooking: {curentCookingStatus}</h1>
            <hr className="mt-3" />
            <div className='flex gap-20 font-bold'>
            <h1>Name</h1>
            <h1>Time</h1>
            <h1>Calorie</h1>
            </div>
            <div className='text-xs'>
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