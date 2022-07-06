
import React, { useEffect, useState } from 'react'
import {Marker, Popup} from 'react-leaflet'
import { IconLocation } from './IconLocation'
import socket from './socket'
const Markers = ({entity,pos}) => {
  const [position, setPosition] = useState([-31.42528037992335, -62.07158078019124])
  useEffect(() => {
    socket.on(entity, (data) => {
      console.log(data)
      setPosition(data.coord)
    })
  },[position])

 
  //icon={IconLocation}
  return (
    <Marker icon={IconLocation} position={position}>
     
  </Marker>
  )
}

export default Markers