import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet';
import "./dist/map.css"
import { db } from "../../js/firebase";
import { onValue, push, ref,get,set } from "firebase/database";
import Markers from "./dist/images/marker.png"
import { useEffect, useState } from 'react';
import database from '../../js/firebase';
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

function addNewTodo() {
    set(ref(db, "users"), {
        Makers: [{lat:9.85190, lon:76.9400,key:"1"},{lat:9.85290, lon:76.1420,key:"2"}]
      });
  }
//   addNewTodo()
  
const Map =()=>{
    const { currentUser} = useAuth();
    let admin=[];
    const starCou= ref(db,"/admin");
onValue(starCou, (snapshot) => {
    const data = snapshot.val();
    admin=data.Email;
  });
    const [markarray,setMarkarray] = useState([])
    const starCountRef = ref(db,"/users");
    useEffect(()=>{
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            const datas=data.Marker
            datas.map((e)=>{
              markarray.push(e)
            //   console.log(e)
            })
            setMarkarray(old=>[...old])
          //   setMarkarray(data)
          });
    },[])
    // useEffect(() => {
    //     const query = ref(db, "todos");
    //     return onValue(query, (snapshot) => {
    //       const data = snapshot.val();
    //       console.log(data)
    //       if (snapshot.exists()) {
    //         // .map((project) => {
    //         //   setProjects((projects) => [...projects, project]);
    //         // });
    //       }
    //     });
    //   }, []);
    const LocationFinderDummy = () => {
        const map = useMapEvents({
            click(e) {
                // console.log(e.latlng);
                // console.log(markarray)
                setMarkarray(oldArray => [...oldArray, {lat:e.latlng.lat, lon:e.latlng.lng,key:markarray.length+100}]);
                set(ref(db, '/users'), {
                    Marker:[...markarray,{lat:e.latlng.lat, lon:e.latlng.lng,key:markarray.length+100}],
                  });
                // updateMakerArray({lat:e.latlng.lat, lon:e.latlng.lng,key:markarray.length+1});
                // <Marker position={[e.latlng.lat, e.latlng.lng]} icon={myIcon} />

            },
        });
        return null;
    };

    return(
        <MapContainer center={[9.8509, 76.9400]} zoom={80}scrollWheelZoom={false}>
      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    {(admin.includes(currentUser.email))?(<LocationFinderDummy/>):(<></>)}
    {/* <div>{markarray.map((e)=>{
        return {e}
    })}</div> */}
    <>
    {markarray.map((e)=>{
        return <Marker position={[e.lat-0.0002,e.lon+0.0001]} icon={myIcon} key={e.key}></Marker>
    })}</>
    </MapContainer>
    )
}

export default Map;