import PropTypes from 'prop-types';
const WantToCookStatus = ({ foodItem, handleCurentlyCooking, handleCurentlyCookingFood }) => {
    const { food_name, time, calorie } = foodItem
    return (
        <div className='flex mb-8'>
            <p className='-ms-3 w-4 me-28'>{food_name}</p>
            <p>{time}</p>
            <p className='ms-14 me-5 w-20'>{calorie}</p>
            <button onClick={() => {handleCurentlyCooking(food_name); handleCurentlyCookingFood(foodItem)}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">
                Prepeare
            </button>
        </div>
    );
};
WantToCookStatus.propTypes = {
    foodItem: PropTypes.object,
    handleCurentlyCooking: PropTypes.func,
    handleCurentlyCookingFood: PropTypes.func
}
export default WantToCookStatus;