import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Section1 from './components/Section01/Section1'
import Section02 from './components/Section02/Section02'
import Status from './components/Status/Status'
import CurentlyCooking from './components/CurentlyCooking/CurentlyCooking'

function App() {

  const [wantToCook, setWantToCook] = useState(0);
  const [wantToCookFoods, setWantToCookFoods] = useState([]);
  const [curentCookingStatus, setCurentCookingStatus] = useState(0);
  const [curentCookingFood, setCurentCookingFood] = useState([]);

  const handleWantToCook = () => {
    const newWantToCook = wantToCook + 1;
    setWantToCook(newWantToCook);
  }

  const handleWantToCookFoods = (foodItem) => {
    const newFood = [...wantToCookFoods, foodItem]
    setWantToCookFoods(newFood);
  }

  const handleCurentlyCooking = (foodname) => {
    const newCurentltCooking = curentCookingStatus + 1
    setCurentCookingStatus(newCurentltCooking);
    console.log(foodname)
    console.log(wantToCookFoods)
    const remainingFood = wantToCookFoods.filter(food => food.food_name !== foodname);
    setWantToCookFoods(remainingFood);
  }

  const handleCurentlyCookingFood = (foodItem) => {
    const newCurentFoodItem = [...curentCookingFood, foodItem]
    setCurentCookingFood(newCurentFoodItem);
    // console.log('remove food' , food_name)
  }



  return (
    <>
      <Header></Header>
      <Section1></Section1>
      <Section02></Section02>
      <div className='flex flex-wrap sm:flex-col md:flex-row lg:flex-row'>
        <Menu handleWantToCook={handleWantToCook} handleWantToCookFoods={handleWantToCookFoods}></Menu>
        <div>
          <Status
            wantToCook={wantToCook}
            wantToCookFoods={wantToCookFoods}
            handleCurentlyCooking={handleCurentlyCooking}
            handleCurentlyCookingFood={handleCurentlyCookingFood}
          ></Status>
          <CurentlyCooking
            curentCookingStatus={curentCookingStatus}
            curentCookingFood={curentCookingFood}
          ></CurentlyCooking>
        </div>
      </div>
    </>
  )
}

export default App
