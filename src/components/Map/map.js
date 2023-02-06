import PropTypes from 'prop-types';
import "leaflet/dist/leaflet.css";
import customMarker from "../../assets/images/icon-location.svg";
import * as L from "leaflet";

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function Map({coords}) {
  const customIcon = new L.Icon({
    iconUrl: customMarker,
    iconRetinaUrl: customMarker,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  const UpdateView = () => {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  };

    return (
    <MapContainer center={coords} zoom={13} scrollWheelZoom={false} style={{width:"100%", height:"100vh", zIndex:8}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    <Marker position={coords} icon={customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <UpdateView coords={coords} />
  </MapContainer>
    )
}

Map.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number)
}

export default Map;
