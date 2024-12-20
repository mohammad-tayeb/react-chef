import PropTypes from 'prop-types';
import WantToCookStatus from '../Want-Cook-Status/WantToCookStatus';

const Status = ({ wantToCook, wantToCookFoods, handleCurentlyCooking, handleCurentlyCookingFood }) => {
    const uniqueFoods = [
        ...new Map(wantToCookFoods.map((UniquefoodItem) => [UniquefoodItem.food_name, UniquefoodItem])).values()
    ];
    return (
        <div className="bg-slate-50 me-5 p-5 mt-6 border rounded-md w-full sm:w-full mx-auto">
            <h1 className='font-bold'>Want To Cook: {wantToCook}</h1>
            <hr className="mt-3" />
            <div className="flex gap-20 mt-5 font-bold ">
                <h1>Name</h1>
                <h1>Time</h1>
                <h1 className='ms-3'>Calories</h1>
            </div>
            <div>
                {
                    uniqueFoods.map((foodItem) => (
                        <WantToCookStatus key={foodItem.food_name} foodItem={foodItem} handleCurentlyCooking={handleCurentlyCooking} handleCurentlyCookingFood={handleCurentlyCookingFood} />
                    ))
                }
            </div>

        </div>
    );
};
Status.propTypes = {
    wantToCook: PropTypes.number,
    wantToCookFoods: PropTypes.array.isRequired,
    handleCurentlyCooking: PropTypes.func.isRequired,
    handleCurentlyCookingFood: PropTypes.func.isRequired
}
export default Status;