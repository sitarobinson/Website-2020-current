import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Style from "style-it";
import { countryColors } from "../../utils/travel-locations";
import { WhiteCard } from "../export-components";

export default function TravelMap({ locations }) {
  const getCountryColor = (country) => {
    return countryColors[country] || countryColors.default;
  };

  // Get unique countries from locations
  const uniqueCountries = [
    ...new Set(locations.map((loc) => loc.country)),
  ].sort();

  // Center map on average of all locations
  const center =
    locations.length > 0
      ? [
          locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length,
          locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length,
        ]
      : [20, 0]; // Default center if no locations

  // Responsive zoom level based on screen width
  const isMobile = window.innerWidth <= 768;
  const zoomLevel = isMobile ? 1.5 : 2.5;
  const styles = `
    .map-legend {
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .legend-circle {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      flex-shrink: 0;
    }
    
    .legend-label {
      font-size: 0.9rem;
      color: var(--brown);
    }
  `;

  return Style.it(
    styles,
    <div>
      <MapContainer
        center={center}
        zoom={zoomLevel}
        zoomSnap={0.5}
        scrollWheelZoom={false}
        style={{
          height: "640px",
          width: "100%",
          borderRadius: "0.5rem",
          minHeight: "300px",
          maxHeight: "640px",
        }}
        tap={true}
        touchZoom={true}
        dragging={true}
        aria-label="Interactive map showing travel locations across multiple countries"
      >
        <TileLayer
          attribution="Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.jpg"
        />
        {locations.map((location, index) => {
          const colors = getCountryColor(location.country);
          return (
            <CircleMarker
              key={index}
              center={[location.lat, location.lng]}
              radius={5}
              pathOptions={{
                fillColor: colors.fill,
                fillOpacity: 1,
                color: colors.border,
                weight: 1,
              }}
              aria-label={`${location.name}, ${location.country}`}
            >
              <Popup>
                <strong>
                  {location.name}, {location.country}
                </strong>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>

      <WhiteCard className="map-legend">
        {uniqueCountries.map((country) => {
          const colors = getCountryColor(country);
          return (
            <div key={country} className="legend-item">
              <div
                className="legend-circle"
                style={{
                  backgroundColor: colors.fill,
                  border: `2px solid ${colors.border}`,
                }}
                aria-hidden="true"
              />
              <span className="legend-label">{country}</span>
            </div>
          );
        })}
      </WhiteCard>
    </div>,
  );
}
