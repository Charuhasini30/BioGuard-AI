import React from "react";

function ExplainabilityPanel({ explanation }) {

  if (!explanation || explanation.length === 0)
    return null;

  return (
    <div className="section">

      <h2>🧠 AI Explainability</h2>

      <p>
        Factors influencing the biodiversity prediction:
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th>Feature</th>
            <th>Impact</th>
          </tr>
        </thead>

        <tbody>

          {explanation.map((item, index) => (

            <tr key={index}>
              <td>{item.feature}</td>

              <td
                style={{
                  color:
                    item.impact >= 0
                      ? "green"
                      : "red",
                  fontWeight: "bold"
                }}
              >
                {item.impact.toFixed(2)}
              </td>
            </tr>

          ))}

        </tbody>
      </table>

    </div>
  );
}

export default ExplainabilityPanel;