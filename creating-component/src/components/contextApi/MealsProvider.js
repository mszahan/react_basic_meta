import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ['Noodles', 'Chicken', 'Egg fry', 'plain rice'];

const MealsProvider = ({children}) =>{
    const [meals, setMealsList] = React.useState(todaysMeals);

    return(
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )

}

export const useMealsListContext = () => React.useContext(MealsContext);
export default MealsProvider