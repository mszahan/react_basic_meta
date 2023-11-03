import Main from "../propsDrilling/Main"
import MealsProvider from "../contextApi/MealsProvider"
import MealsList from "../contextApi/MealsList"
import Counter from "../contextApi/Counter"

function DrillPage(){
    return(
        <>
        <Main msg='The drilled massage which traveld through 4 layers'/>

        <MealsProvider>
        <MealsList/>
        <Counter/>
        </MealsProvider>
        </>
    )
}

export default DrillPage;