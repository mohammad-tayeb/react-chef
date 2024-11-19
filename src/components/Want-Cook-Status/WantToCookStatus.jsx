import PropTypes from 'prop-types';
const WantToCookStatus = ({foodItem}) => {
    const {food_name,time, calorie} = foodItem
    return (
        <div className='flex mt-8'>
            <p className='-ms-3'>{food_name}</p>
            <p>{time}</p>
            <p className='ms-5'>{calorie}</p>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded">
                       Prepeare
                </button>
        </div>
    );
};
WantToCookStatus.propTypes = {
    foodItem: PropTypes.object
}
export default WantToCookStatus;