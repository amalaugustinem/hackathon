import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet';
import "./dist/map.css"
import Markers from "./dist/images/marker.png"
import { useEffect, useState } from 'react';
import { useAuth } from "../../Context/AuthContext";
const L=require("leaflet")

const myIcon = L.icon({
    iconUrl: require('./dist/images/marker.png'),
    iconSize: [22,34],
    iconAnchor: [22, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
});

const Map =()=>{
    // const [markarray,setMarkarray] = useState([{lat:9.85130, lon:76.9400,key:"1"},{lat:9.85190, lon:76.9400,key:"2"}])
    useEffect(()=>{

    })
    const {markarray,updateMakerArray,updatedMakerarr} = useAuth();
    const LocationFinderDummy = () => {
        const map = useMapEvents({
            click(e) {
                // console.log(e.latlng);
                // console.log(markarray)
                // setMarkarray(oldArray => [...oldArray, {lat:e.latlng.lat, lon:e.latlng.lng,key:markarray.length+1}]);
                updateMakerArray({lat:e.latlng.lat, lon:e.latlng.lng,key:markarray.length+1});
                // <Marker position={[e.latlng.lat, e.latlng.lng]} icon={myIcon} />

            },
        });
        return null;
    };

    return(
        <MapContainer center={[9.8509, 76.9400]} zoom={80}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    <LocationFinderDummy/>
    {/* <div>{markarray.map((e)=>{
        return {e}
    })}</div> */}
    <>
    {updatedMakerarr().map((e)=>{
        return <Marker position={[e.lat-0.0002,e.lon+0.0001]} icon={myIcon} key={e.key}></Marker>
    })}</>
    </MapContainer>
    )
}

export default Map;