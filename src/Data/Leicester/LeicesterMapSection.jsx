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

/* ---------------- Derby Area Coordinates ---------------- */
const areaCoordinates = {
  "Leicester City Centre": { lat: 52.6369, lng: -1.1398 },
  Oadby: { lat: 52.618, lng: -1.090 },
  Wigston: { lat: 52.61, lng: -1.125 },
  Evington: { lat: 52.632, lng: -1.114 },
  Aylestone: { lat: 52.61, lng: -1.168 },
  Braunstone: { lat: 52.62, lng: -1.164 },
  "Clarendon Park": { lat: 52.623, lng: -1.133 },
  Belgrave: { lat: 52.646, lng: -1.125 },
  Hamilton: { lat: 52.627, lng: -1.139 },
  "Rushey Mead": { lat: 52.657, lng: -1.120 },
  "Thurnby Lodge": { lat: 52.648, lng: -1.112 },
  Glenfield: { lat: 52.645, lng: -1.182 },
  Enderby: { lat: 52.621, lng: -1.174 },
  Blaby: { lat: 52.597, lng: -1.177 }
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
export default function LeicesterMapSection() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-black relative">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Leicester Service Coverage Map
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