const MenuItem = ({ menu }) => {
    const { food_name, short_description, ingredients_number, ingredients, time, calorie } = menu
    return (
    <div>
       <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img className="w-full" src="https://via.placeholder.com/300" alt="Card Image" />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Card Title</div>
    <p className="text-gray-700 text-base">
      This is a description of the card. It can be used to provide more details or information about the content.
    </p>
  </div>
  <div className="px-6 py-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button Text
    </button>
  </div>
</div>


    </div>
    );
};

export default MenuItem;