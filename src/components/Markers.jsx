
import React, { useEffect, useState } from 'react'
import {Marker, Popup} from 'react-leaflet'
import { IconLocation } from './IconLocation'
import socket from './socket'
const Markers = ({entity,pos}) => {
  const [position, setPosition] = useState([-31.42528037992335, -62.07158078019124])
  useEffect(() => {
    socket.on('entity', (data) => {
      console.log(data)
      setPosition(data)
    })
  },[position])

 
  
  // const places = [
  //   {
  //     name: 'Casa',
  //     position: [-31.42528037992335, -62.07158078019124]
  //   },
  //   {
  //     name: 'Casa',
  //     position:[-31.42511978828081, -62.08801735591505] 
  //   },
  //   {
  //     name: 'Casa',
  //     position: [-31.4349803506662972, -62.09183682129213]
  //   }
  // ]

  // const markers = places.map(place => {
  //   return (
  //     <Marker icon={IconLocation} key={place.name} position={place.position}>
  //       <Popup>{place.name}</Popup>
  //     </Marker>
  //   )
  // })
  return (
    <Marker icon={IconLocation} position={position}>
    
  </Marker>
  )
}

export default Markers