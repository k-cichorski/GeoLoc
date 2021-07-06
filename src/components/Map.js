import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

function Map({coords, locName}) {
  return (
    <div className="map-container">
      <MapContainer center={coords} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>
            {locName}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map;