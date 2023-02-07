import logo from './logo.svg';
import './App.css';

import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index";
import {mulNumber, divNumber} from "./actions/index";

function App() {

  const myState = useSelector((state) => state.changeTheNumber);
  const myState2 = useSelector((state) => state.mulDivNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment / Decrement Counter app</h1>
        <h4>Using react redux</h4>
        <div className="quantity">
          <a title="Decrement" className="quantity__minus" onClick={() => dispatch(decNumber())}><span>-</span></a>
          <input type="text" name="quantity" className="quantity__input" value={myState} />
          <a title="Increment" className="quantity__plus" onClick={() => dispatch(incNumber(5))}><span>+</span></a>
        </div>
      </div>

      <div className="container">
        <h1>Multiplier / Divider Counter app</h1>
        <h4>Using react redux</h4>
        <div className="quantity">
          <a title="Decrement" className="quantity__minus" onClick={() => dispatch(divNumber())}><span>/</span></a>
          <input type="text" name="quantity" className="quantity__input" value={myState2} />
          <a title="Increment" className="quantity__plus" onClick={() => dispatch(mulNumber())}><span>*</span></a>
        </div>
      </div>
    </>
  );
}

export default App;

