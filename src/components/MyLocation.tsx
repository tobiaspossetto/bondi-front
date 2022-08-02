
import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { Pos } from './types';

interface MyLocationProps {
  change: Pos
}

function MyLocation({ change }: MyLocationProps) {
  const [position, setPosition] = useState<Pos>([0, 0]);

  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      console.log(e)
      setPosition([e.latlng.lat, e.latlng.lng])
      map.flyTo(e.latlng, map.getZoom())
    },
  })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setPosition([position.coords.latitude, position.coords.longitude])
    }, function (error) {
      console.log(error)
    })
  }, [change])

  return (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )


}

export default MyLocation