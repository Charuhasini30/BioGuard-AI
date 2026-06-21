import React from "react";

function RegionRanking({ regions }) {

  if (!regions || regions.length === 0) {
    return null;
  }

  const sortedRegions = [...regions].sort(
    (a, b) => b.score - a.score
  );

  return (

    <div style={{ marginTop: "30px" }}>

      <h2>Region Ranking</h2>

      <table border="1" cellPadding="10">

        <thead>

          <tr>
            <th>Rank</th>
            <th>Region</th>
            <th>Score</th>
            <th>Risk</th>
          </tr>

        </thead>

        <tbody>

          {sortedRegions.map((region, index) => (

            <tr key={index}>

              <td>{index + 1}</td>

              <td>{region.name}</td>

              <td>{region.score}</td>

              <td>{region.risk}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RegionRanking;