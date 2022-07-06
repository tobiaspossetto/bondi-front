
import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet';

function MyLocation({change}) {
  const [position, setPosition] = useState([0,0]);

  const map = useMapEvents({
        click() {
          map.locate()
        },
        locationfound(e) {
          console.log(e)
          setPosition(e.latlng)
          map.flyTo(e.latlng, map.getZoom())
        },
      })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position){
        setPosition([position.coords.latitude, position.coords.longitude])
    }, function(error){
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