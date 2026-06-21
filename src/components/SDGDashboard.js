import React from "react";

function SDGDashboard() {

  const sdgs = [
    {
      title: "SDG 13",
      name: "Climate Action",
      icon: "🌍"
    },
    {
      title: "SDG 15",
      name: "Life on Land",
      icon: "🌱"
    },
    {
      title: "SDG 6",
      name: "Clean Water",
      icon: "💧"
    }
  ];

  return (

    <div className="sdg-container">

      <h2>
        Sustainable Development Goals Impact
      </h2>

      <div className="sdg-grid">

        {sdgs.map((sdg, index) => (

          <div className="sdg-card" key={index}>

            <h1>{sdg.icon}</h1>

            <h3>{sdg.title}</h3>

            <p>{sdg.name}</p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default SDGDashboard;