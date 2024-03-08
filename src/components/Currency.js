import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const currencyLabel = {
  $: "$ Dollar",
  "£": "£ Pound",
  "€": "€ Euro",
  "₹": "₹ Ruppee",
};

const Currency = () => {

  //get current global state
  const { currency, dispatch } = useContext(AppContext);

  //state hook update our component
  const [isOpen, setIsOpen] = useState(false);

  //update currency in global state
  const setCurrencyHandler = (currency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency,
    });
  };

  return (
    <div id="currency-menu" className="dropdown" style={{ cursor: 'pointer' }}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: 'lightgreen', color: 'white' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Currency {'('}{currencyLabel[currency]}{')'}
      </button>
      <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `}
        style={{ backgroundColor: 'lightgreen', color: 'white', border:'2px solid darkgreen'}}
        >
          {Object.entries(currencyLabel).map(([key, label]) => (
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrencyHandler(key)}
          >
           {label}
          </button>
        </li>))}
      </ul>
    </div>
  );
};

export default Currency;
