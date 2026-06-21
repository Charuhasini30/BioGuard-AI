function RiskGauge({ score }) {

  let color = "#22c55e";

  if (score < 50) color = "#ef4444";
  else if (score < 80) color = "#f59e0b";

  return (
    <div className="gauge-container">

      <h3>Ecosystem Risk Meter</h3>

      <div
        className="gauge-circle"
        style={{
          background: `conic-gradient(
            ${color} ${score * 3.6}deg,
            #e5e7eb 0deg
          )`
        }}
      >
        <div className="gauge-inner">
          <h2>{score}</h2>
        </div>
      </div>

    </div>
  );
}

export default RiskGauge;