import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

/* ---------------- Leaflet icon fix ---------------- */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});


const areaCoordinates = {
  "Nottingham City Centre": { lat: 52.9548, lng: -1.1581 },
  "West Bridgford": { lat: 52.931, lng: -1.133 },
  Beeston: { lat: 52.942, lng: -1.204 },
  Arnold: { lat: 53.0, lng: -1.125 },
  Carlton: { lat: 52.988, lng: -1.136 },
  Mapperley: { lat: 52.965, lng: -1.128 },
  Sherwood: { lat: 52.977, lng: -1.131 },
  Hucknall: { lat: 53.033, lng: -1.197 },
  Bulwell: { lat: 53.000, lng: -1.178 },
  Gedling: { lat: 52.981, lng: -1.123 },
  "Long Eaton": { lat: 52.892, lng: -1.250 },
  Stapleford: { lat: 52.939, lng: -1.242 },
  Ruddington: { lat: 52.927, lng: -1.153 }
};

/* ---------------- Auto Fit Bounds ---------------- */
function FitBounds() {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      Object.values(areaCoordinates).map((area) => [
        area.lat,
        area.lng
      ])
    );
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map]);

  return null;
}

/* ---------------- MAIN COMPONENT ---------------- */
export default function NottinghamMapSection() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-black relative">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nottingham Service Coverage Map
          </h2>
        </div>

        {/* Map Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-2xl">

            {/* Responsive Map */}
            <div className="relative w-full h-[350px] md:h-[500px] rounded-2xl overflow-hidden">
              <MapContainer
                scrollWheelZoom={true}   /* Zoom Enabled */
                className="w-full h-full"
              >
                <TileLayer
                  attribution="© OpenStreetMap"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FitBounds />

                {Object.entries(areaCoordinates).map(([area, coords]) => (
                  <Marker
                    key={area}
                    position={[coords.lat, coords.lng]}
                    eventHandlers={{
                      click: () => setSelectedArea(area)
                    }}
                  >
                    <Popup>
                      <strong>{area}</strong>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* Area List */}
            <div className="mt-10">
              <h3 className="text-xl font-bold text-center text-[#0D1525] mb-6">
                Areas We Cover
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {Object.keys(areaCoordinates)
                  .sort()
                  .map((area) => (
                    <div
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`cursor-pointer rounded-xl px-3 py-2 text-center font-medium transition-all duration-300 transform hover:scale-105 ${selectedArea === area
                          ? "bg-[#e80202] text-white shadow-lg"
                          : "bg-[#e80202] text-white hover:bg-[#e80202]/70"
                        }`}
                    >
                      {area}
                    </div>
                  ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}