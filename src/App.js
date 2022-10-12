import React from "react";
import CreditCard from "./CreditCard";

function App() {
  const bankName = "Big Bank, Inc.";
  const year = "08/19";
  const code = 1234;
  const personName = "HARSHITA JOSHI";
  const creditNum = {
    p1: 1234,
    p2: 5678,
    p3: 8765,
    p4: 4321,
  };
  return (
    <div className="App">
      <CreditCard
        bankName={bankName}
        year={year}
        code={code}
        personName={personName}
        CreditCard={creditNum}
      />
    </div>
  );
}

export default App;
