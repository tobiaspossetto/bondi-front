
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'
import MyLocation from './MyLocation'

const MapView = ({position})=> {
  const [position1, setPosition1] = useState([-31.42528037992335, -62.07158078019124] );
  const [position2, setPosition2] = useState([-31.42511978828081, -62.08801735591505] );
  const [position3, setPosition3] = useState([-31.4349803506662972, -62.09183682129213]);

  return(
    <MapContainer center={[-31.424528037992335, -62.07158078019124] } zoom={16} minZoom={14} scrollWheelZoom={true}>

    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
   <Markers position={position}/>
   <Markers position={position}/>
   <Markers position={position}/>
   <MyLocation change={position}/>
   
  </MapContainer>
  )
}


export default MapView