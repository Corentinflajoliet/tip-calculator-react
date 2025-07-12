import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Calculate tip and total whenever bill or tip percentage changes
  useEffect(() => {
    const bill = parseFloat(billAmount) || 0;
    const tip = parseFloat(tipPercentage) || 0;
    const tipValue = (bill * tip) / 100;
    const total = bill + tipValue;
    
    setTipAmount(tipValue);
    setTotalAmount(total);
  }, [billAmount, tipPercentage]);

  const handleNumberInput = (value, field) => {
    if (field === 'bill') {
      setBillAmount(value);
    } else if (field === 'tip') {
      setTipPercentage(value);
    }
  };

  const handleNumberPad = (number, field) => {
    if (field === 'bill') {
      setBillAmount(prev => prev + number);
    } else if (field === 'tip') {
      setTipPercentage(prev => prev + number);
    }
  };

  const handleClear = (field) => {
    if (field === 'bill') {
      setBillAmount('');
    } else if (field === 'tip') {
      setTipPercentage('');
    }
  };

  const handleBackspace = (field) => {
    if (field === 'bill') {
      setBillAmount(prev => prev.slice(0, -1));
    } else if (field === 'tip') {
      setTipPercentage(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="app">
      <div className="calculator">
        <header className="header">
          <h1>Just Tip It</h1>
          <p>Quick & Easy Tip Calculator</p>
        </header>

        <div className="input-section">
          <div className="input-group">
            <label htmlFor="bill-amount">Bill Amount</label>
            <div className="input-container">
              <span className="currency-symbol">$</span>
              <input
                id="bill-amount"
                type="text"
                value={billAmount}
                onChange={(e) => handleNumberInput(e.target.value, 'bill')}
                placeholder="0.00"
                className="amount-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="tip-percentage">Tip Percentage</label>
            <div className="input-container">
              <input
                id="tip-percentage"
                type="text"
                value={tipPercentage}
                onChange={(e) => handleNumberInput(e.target.value, 'tip')}
                placeholder="0"
                className="percentage-input"
              />
              <span className="percentage-symbol">%</span>
            </div>
          </div>
        </div>

        <div className="results-section">
          <div className="result-item">
            <span className="result-label">Tip Amount</span>
            <span className="result-value">${tipAmount.toFixed(2)}</span>
          </div>
          <div className="result-item total">
            <span className="result-label">Total</span>
            <span className="result-value">${totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="number-pad">
          <div className="pad-row">
            <button onClick={() => handleNumberPad('7', 'bill')} className="number-btn">7</button>
            <button onClick={() => handleNumberPad('8', 'bill')} className="number-btn">8</button>
            <button onClick={() => handleNumberPad('9', 'bill')} className="number-btn">9</button>
            <button onClick={() => handleClear('bill')} className="clear-btn">C</button>
          </div>
          <div className="pad-row">
            <button onClick={() => handleNumberPad('4', 'bill')} className="number-btn">4</button>
            <button onClick={() => handleNumberPad('5', 'bill')} className="number-btn">5</button>
            <button onClick={() => handleNumberPad('6', 'bill')} className="number-btn">6</button>
            <button onClick={() => handleBackspace('bill')} className="backspace-btn">⌫</button>
          </div>
          <div className="pad-row">
            <button onClick={() => handleNumberPad('1', 'bill')} className="number-btn">1</button>
            <button onClick={() => handleNumberPad('2', 'bill')} className="number-btn">2</button>
            <button onClick={() => handleNumberPad('3', 'bill')} className="number-btn">3</button>
            <button onClick={() => handleNumberPad('.', 'bill')} className="number-btn">.</button>
          </div>
          <div className="pad-row">
            <button onClick={() => handleNumberPad('0', 'bill')} className="number-btn zero">0</button>
            <button onClick={() => handleNumberPad('00', 'bill')} className="number-btn">00</button>
          </div>
        </div>

        <div className="tip-pad">
          <h3>Quick Tip Options</h3>
          <div className="tip-buttons">
            <button onClick={() => setTipPercentage('10')} className="tip-btn">10%</button>
            <button onClick={() => setTipPercentage('15')} className="tip-btn">15%</button>
            <button onClick={() => setTipPercentage('18')} className="tip-btn">18%</button>
            <button onClick={() => setTipPercentage('20')} className="tip-btn">20%</button>
            <button onClick={() => setTipPercentage('25')} className="tip-btn">25%</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
