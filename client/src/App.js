import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [balance, setBalance] = useState(2342);

  const [form, showForm] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const [processType, setProcessType] = useState("");

  const process = (type) => {
    showForm(true);
    setProcessType(type);
  };
  const moneyRef = useRef();

  const processMoney = () => {
    if (processType == "withdraw") {
      let newBalance = balance - moneyRef.current.value;
      setBalance(newBalance);
    } else {
      let newBalance = parseInt(balance) + parseInt(moneyRef.current.value);
      setBalance(newBalance);
    }
    showForm(false);
  };
  return (
    <div className="App">
      <div>
        <p> Harjot singh</p>
        <p>Account Number : 0923525253</p>
      </div>
      <div className="processes">
        <button onClick={() => process("withdraw")}>Withdraw</button>
        <button onClick={() => process("deposit")}>Deposit</button>
        <button onClick={() => setShowBalance(true)}>Show Balance</button>
      </div>
      {form ? (
        <div>
          <input type="number" className="" ref={moneyRef} />
          <button onClick={processMoney}>Confirm</button>
        </div>
      ) : (
        ""
      )}
      <div>{showBalance ? "Balance: $" + balance : ""}</div>
    </div>
  );
}

export default App;
