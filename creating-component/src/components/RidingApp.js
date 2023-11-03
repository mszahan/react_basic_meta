import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'ride') return {money: state.money + 10};
    if (action.type === 'fuel') return {money: state.money - 50};
    return new Error();
}


function RidingApp(){
    const initialState = {money: 10};
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="riding">
            <h1>Wallet: {state.money}</h1>
            <div>
                <button className="button-primary" onClick={()=> dispatch({type: 'ride'})}>
                    A new customer
                </button>

                <button className="button-primary" onClick={() => dispatch({type:'fuel'})}>
                    Refill the tank
                </button>
            </div>

        </div>
    )
}

export default RidingApp;