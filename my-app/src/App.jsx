import { useState } from "react";

export default function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");
  const [idealWeightRange, setIdealWeightRange] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let { bmiStatus, idealWeight, image } = getStatus(bmi);
    setStatus(bmiStatus);
    setIdealWeightRange(idealWeight);
    setImageSrc(image);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    let idealWeightMin = ((18.5 * (height / 100) ** 2)).toFixed(2);
    let idealWeightMax = ((24.9 * (height / 100) ** 2)).toFixed(2);

    if (bmi < 18.5) {
      return {
        bmiStatus: "Underweight",
        idealWeight: `${idealWeightMin}kg - ${idealWeightMax}kg`,
        image: "https://png.pngtree.com/png-clipart/20230812/original/pngtree-skinny-girlillustrationvector-on-white-background-slim-cartoon-weight-vector-png-image_10279476.png", 
      };
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return {
        bmiStatus: "Normal",
        idealWeight: `${idealWeightMin}kg - ${idealWeightMax}kg`,
        image: "https://img.freepik.com/free-vector/young-man-standing-isolated-icon_18591-83052.jpg", 
      };
    } else if (bmi >= 25 && bmi < 29.9) {
      return {
        bmiStatus: "Overweight",
        idealWeight: `${idealWeightMin}kg - ${idealWeightMax}kg`,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKc0dFc5JztQhPTuhvOmjImGJGtALEWor2pQ&s", 
      };
    } else {
      return {
        bmiStatus: "Obese",
        idealWeight: `${idealWeightMin}kg - ${idealWeightMax}kg`,
        image: "https://img.freepik.com/free-vector/overweight-man-cartoon-character_1308-134504.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726358400&semt=ais_hybrid", 
      };
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto">
        <h1 className="text-center mb-4 text-xl"> BMI Calculator</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Height
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
            type="text"
            placeholder="Height in cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Weight
          </label>
          <input
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-white"
            type="text"
            placeholder="Weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={calculateBMI}
          >
            Calculate BMI
          </button>
        </div>
        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
            <p>Ideal Weight Range: {idealWeightRange}</p>
            {imageSrc && <img src={imageSrc} alt={status} className="mt-2" />}
          </div>
        )}
      </form>
    </div>
  );
}
