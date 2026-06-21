import React, { useState } from "react";

function SearchRegion({ regions }) {

  const [search, setSearch] = useState("");

  const filteredRegions = regions?.filter(
    (region) =>
      region.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (

    <div style={{ marginTop: "30px" }}>

      <h2>Search Region</h2>

      <input
        type="text"
        placeholder="Search region..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <div style={{ marginTop: "15px" }}>

        {search.trim() === "" ? (

          <p>Type a district name to search...</p>

        ) : filteredRegions?.length === 0 ? (

          <p>No matching region found.</p>

        ) : (

          filteredRegions.map((region, index) => (

            <div
              key={index}
              style={{
                padding: "10px",
                marginBottom: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px"
              }}
            >

              <p>
                <strong>{region.name}</strong>
                {" | "}
                Score: {region.score}
                {" | "}
                Risk: {region.risk}
              </p>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default SearchRegion;