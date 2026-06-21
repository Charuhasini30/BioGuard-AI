import React, { useState } from "react";

function ClimateSimulator() {

  const [tempIncrease,setTempIncrease] =
  useState(1);

  const [rainfallDecrease,setRainfallDecrease] =
  useState(10);

  const [futureScore,setFutureScore] =
  useState(null);

  const runSimulation = () => {

    const currentScore = 61;

    const impact =
      tempIncrease * 8 +
      rainfallDecrease * 0.5;

    const future =
      Math.max(
        0,
        currentScore - impact
      );

    setFutureScore(
      future.toFixed(1)
    );

  };

  return (

    <div
      className="section"
    >

      <h2>
        Climate Change Simulator
      </h2>

      <p>
        Temperature Increase:
        +{tempIncrease}°C
      </p>

      <input
        type="range"
        min="1"
        max="5"
        value={tempIncrease}
        onChange={(e)=>
          setTempIncrease(
            Number(e.target.value)
          )
        }
      />

      <p>
        Rainfall Reduction:
        {rainfallDecrease}%
      </p>

      <input
        type="range"
        min="10"
        max="50"
        value={rainfallDecrease}
        onChange={(e)=>
          setRainfallDecrease(
            Number(e.target.value)
          )
        }
      />

      <br /><br />

      <button
        onClick={runSimulation}
      >
        Run Simulation
      </button>

      {futureScore && (

        <div
          style={{
            marginTop:"20px"
          }}
        >

          <h3>
            Current Score: 61
          </h3>

          <h3>
            Future Score:
            {futureScore}
          </h3>

          <h3>
            Expected Loss:
            {(61-futureScore).toFixed(1)}%
          </h3>

        </div>

      )}

    </div>

  );

}

export default ClimateSimulator;