import changeTheNumber from "./incDec";
import {mulDivNumber} from "./incDec";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    mulDivNumber
});
export default rootReducer;