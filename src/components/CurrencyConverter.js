import React, { useState, useEffect } from "react";
import "./CurrencyConverter.css";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("MXN");
  const [conversionRate, setConversionRate] = useState(1);

  useEffect(() => {
    const fetchConversionRate = async () => {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      const data = await response.json();
      setConversionRate(data.rates[toCurrency]);
    };

    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const convertedAmount = (amount * conversionRate).toFixed(2);

  return (
    <div className="currency-converter">
      <h2>Convertidor de monedas</h2>
      <div className="converter-body">
        <div className="input-container">
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="amount-input"
            placeholder="Enter amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="currency-select"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="MXN">MXN</option>
            {/* Añade más opciones según sea necesario */}
          </select>
          <span className="to-label">to</span>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="currency-select"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="MXN">MXN</option>
            {/* Añade más opciones según sea necesario */}
          </select>
        </div>
        <div className="result-container">
          <p className="result-text">
            {amount} {fromCurrency} = {convertedAmount} {toCurrency}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
