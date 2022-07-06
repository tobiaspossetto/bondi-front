import React from 'react'
import bondi from '../icons/bondi.svg'
import L from "leaflet" 


export const IconLocation = L.icon({
    iconUrl: bondi,
    iconRetinaUrl: bondi,
    iconSize: [30, 30],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
    className: 'leaflet-venue-icon'
});


