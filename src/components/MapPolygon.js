import { Polygon, useMap } from 'react-leaflet';

function MapPolygon({ positions, zoom }) {
  if (positions && positions[0]) {
    const map = useMap();
    map.flyTo(positions[0], zoom);
  }
  return positions === null ? null : <Polygon positions={positions} />
}

export default MapPolygon;