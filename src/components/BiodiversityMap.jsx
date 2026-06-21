import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

function BiodiversityMap({ result }) {

  // ✅ ADD THIS BACK (IMPORTANT)
  const getColor = (risk) => {
    if (risk === "High") return "red";
    if (risk === "Medium") return "orange";
    return "green";
  };

  const regions = result?.regions || [];

  return (
    <MapContainer
      center={[11.5, 76.7]}
      zoom={9}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {regions.map((region, index) => (
        <Marker
          key={index}
          position={region.position}
          icon={
            new L.DivIcon({
              html: `
                <div style="
                  background:${getColor(region.risk)};
                  width:15px;
                  height:15px;
                  border-radius:50%;
                  border:2px solid white;
                "></div>
              `
            })
          }
        >
          <Popup>
  <h3>{region.name}</h3>

  <p>
    <strong>Score:</strong> {region.score}
  </p>

  <p>
    <strong>Risk:</strong> {region.risk}
  </p>

  <p>
    <strong>Latitude:</strong> {region.position[0]}
  </p>

  <p>
    <strong>Longitude:</strong> {region.position[1]}
  </p>
</Popup>
            
        </Marker>
      ))}
    </MapContainer>
  );
}

export default BiodiversityMap;