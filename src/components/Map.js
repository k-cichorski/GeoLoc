import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapPolygon from './MapPolygon';
import './Map.css';

function Map({ coords, locName, positions, zoom, scrollWheelZoom }) {
  return (
    <div className="map-container">
    <MapContainer center={coords} zoom={zoom} scrollWheelZoom={scrollWheelZoom} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>
          {locName}
        </Popup>
      </Marker>
      <MapPolygon positions={positions} zoom={zoom} />
    </MapContainer>
    </div>
  )
};

export default Map;