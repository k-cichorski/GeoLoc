import { Polygon } from 'react-leaflet';
import { useSelector } from 'react-redux';

const MapPolygon = React.memo(() => {
  const { positions } = useSelector(state => state.location);

  return positions === null ? null : <Polygon positions={positions} />
})

export default MapPolygon;