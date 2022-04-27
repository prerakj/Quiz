import "./App.css";
import Quiz1 from "./Quiz1";
import Quiz2 from "./Quiz2";
import { useState } from "react";

function App() {
  const [numberOfQuesLeft, setNumberOfQuesLeft] = useState();
  const [rangeLeft, setRangeLeft] = useState();
  const [operationsLeft, setOperationsLeft] = useState([]);
  const [startQuizLeft, setStartQuizLeft] = useState(false);
  
  const Welcome = () => {
    return (
      <>
        <h1>Welcome to the Arithmetic Quiz !!</h1>
        <h4>Default values will be selected if you don't select any</h4>
        <h3>Choose Your Preferences to Start this quiz</h3>
        <div>
          <label>Number of Questions?</label>
          <br />
          <input
            type="Number"
            value={numberOfQuesLeft}
            onChange={(e)=>setNumberOfQuesLeft(e.target.value)}
          ></input>
        </div>
        <br />
        <div>
          <label>Range of Numbers?</label>
          <br />
          <input type="Number" value={rangeLeft} onChange={(e)=>setRangeLeft(e.target.value)}></input>
        </div>
        <br />
        <div>
          <label>Select the operations you want to include:</label>
          <br />
          <input
            onClick={(e)=>setOperationsLeft([...operationsLeft,e.target.value])}
            type="checkbox"
            name="operation1"
            value="+"
          />
          <label for="operation1"> Addition</label>
          <br></br>
          <input
            onClick={(e)=>setOperationsLeft([...operationsLeft,e.target.value])}
            type="checkbox"
            name="operation2"
            value="-"
          />
          <label for="operation2"> Subtraction</label>
          <br></br>
          <input
            onClick={(e)=>setOperationsLeft([...operationsLeft,e.target.value])}
            type="checkbox"
            name="operation3"
            value="*"
          />
          <label for="operation3"> Multiplication</label>
          <br></br>
          <input
            onClick={(e)=>setOperationsLeft([...operationsLeft,e.target.value])}
            type="checkbox"
            name="operation4"
            value="/"
          />
          <label for="operation4"> Division</label>
          <br></br>
        </div>
        <br />
        <br />
      </>
    );
  };
  return (
    <div className="App">
      <div className="row">
        <div className="column left">
          {!startQuizLeft ? (
            <>
            <h1>Advanced Quiz</h1>
              {Welcome()}
              <button onClick={() => setStartQuizLeft(true)}>
                Save changes
              </button>
            </>
          ) : (
            <>
              <Quiz1
                numberOfQues={numberOfQuesLeft}
                range={rangeLeft}
                operators={operationsLeft}
              />
            </>
          )}
        </div>
        <div className="column right">
        <h1>Simple Quiz</h1>
        <Quiz2/>
        </div>
      </div>
    </div>
  );
}

export default App;
