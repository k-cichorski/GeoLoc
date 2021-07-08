import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Spinner } from 'react-bootstrap';
import MapPolygon from './MapPolygon';
import './Map.css';

const Map = React.memo(({ coords, locName, positions, zoom, scrollWheelZoom }) => {
  return (
    <MapContainer center={coords} zoom={zoom} scrollWheelZoom={scrollWheelZoom}
      placeholder={<Spinner animation="border" variant="warning" />} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>
          {locName ? locName : `Lat: ${coords.lat}, Lng: ${coords.lng}`}
        </Popup>
      </Marker>
      <MapPolygon positions={positions} zoom={zoom} />
    </MapContainer>
  )
}, function (oldParams, newParams) {
  return oldParams.coords == newParams.coords
});

export default Map;