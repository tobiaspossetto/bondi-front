import React from 'react'
import c from '../icons/c.svg'
import L from "leaflet" 


export const IconLocation = L.icon({
    iconUrl: c,
    iconRetinaUrl: c,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
    className: 'leaflet-venue-icon'
});


