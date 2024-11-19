import PropTypes from 'prop-types';
import WantToCookStatus from '../Want-Cook-Status/WantToCookStatus';

const Status = ({ wantToCook, wantToCookFoods }) => {
    const uniqueFoods = [
        ...new Map(wantToCookFoods.map((UniquefoodItem) => [UniquefoodItem.food_name, UniquefoodItem])).values()
    ];
    return (
        <div className="bg-slate-50 w-1/3 ms-10 p-5">
            <h1>Want To Cook: {wantToCook}</h1>
            <hr className="mt-3" />
            <div className="flex gap-20 mt-5">
                <h1>Name</h1>
                <h1>Time</h1>
                <h1 className='ms-3'>Calories</h1>
            </div>
            <div>
                {
                        uniqueFoods.map((foodItem) => (
                            <WantToCookStatus key={foodItem.food_name} foodItem={foodItem} />
                        ))
                }
            </div>

        </div>
    );
};
Status.propTypes = {
    wantToCook: PropTypes.number,
    wantToCookFoods: PropTypes.array.isRequired
}
export default Status;