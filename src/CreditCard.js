import React from "react";
import "./CreditCard.css";

function CreditCard(props) {
  return (
    <div className="bodyDiv">
      <div className="outerDiv">
        <h1 className="bankname">{props.bankName}</h1>
        <div className="card-number">
          <p>{props.CreditCard.p1}</p>
          <p>{props.CreditCard.p2}</p>
          <p>{props.CreditCard.p3}</p>
          <p>{props.CreditCard.p4}</p>
        </div>
        <p className="code">{props.code}</p>
        <div className="expiry-date">
          <div className="valid-container">
            <p className="valid">
              VALID <br /> THRU
            </p>
          </div>
          <div>
            <p className="year">{props.year}</p>
          </div>
        </div>

        <h3 className="person-name">{props.personName}</h3>
      </div>
    </div>
  );
}

export default CreditCard;
