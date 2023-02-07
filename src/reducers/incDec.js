const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT" : return state + action.payload;
        case "DECREMENT" : return state - 1;
        default: return state;
    }
}
export default changeTheNumber;



const initialState2 = 5;
export const mulDivNumber = (state = initialState2, action) => {
    switch (action.type){
        case "MULTIPLICATION" : return state * 5;
        case "DIVISION" : return state / 5;
        default: return state;
    }
}

