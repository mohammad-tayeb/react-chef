import PropTypes from 'prop-types';
const CurentCookingStatus = ({ cFood }) => {
    const { food_name, time, calorie } = cFood
    return (
        <div className='flex gap-10 mb-6 text-xs'>
            <p className='w-2 me-14'>{food_name }</p>
            <p>{time}</p>
            <p className='w-28'>{calorie}</p>
        </div>
    );
};

CurentCookingStatus.propTypes = {
    cFood: PropTypes.object.isRequired
}
export default CurentCookingStatus;