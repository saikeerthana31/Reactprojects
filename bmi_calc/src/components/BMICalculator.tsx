import React, { useState } from "react";
import "../App.css";

const BMICalculator: React.FC = () => {
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(2)));

      if (bmiValue < 18.5) setCategory("Underweight");
      else if (bmiValue < 24.9) setCategory("Normal weight");
      else if (bmiValue < 29.9) setCategory("Overweight");
      else setCategory("Obese");
    }
  };

  const reset = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="app">
      <div className="bmi-container">
        <h2>BMI Calculator</h2>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        <div className="btns">
          <button className="calculate" onClick={calculateBMI}>
            Calculate
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
        {bmi !== null && (
          <>
            <p className="bmi-result">Your BMI is: {bmi}</p>
            <p className="bmi-category">{category}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
