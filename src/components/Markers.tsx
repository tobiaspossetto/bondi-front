
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { icon, Icon } from 'leaflet';
import bondiURL from '../icons/bondi.svg';
import socket from './socket';
import { Pos } from './types';

export interface MarkerProps {
  entity: string;
  pos: Pos;
}

interface BondiData {
  coord: Pos;
}

interface BondiMarkerProps {
  line: string;
  
}


export const BondiIcon = icon({
  iconUrl: bondiURL,
  iconRetinaUrl: bondiURL,
  iconSize: [28, 28],
  iconAnchor: [14, 21],
  popupAnchor: [0, -16],
  className: 'leaflet-venue-icon'
});

const bondiImg = document.createElement('img');
bondiImg.src = bondiURL;

const charCodeA = "a".charCodeAt(0);
const charCodeZ = "z".charCodeAt(0);

export function bondiHue(line: string) {
  const l = line.toLowerCase();
  return Math.floor((360 * 7.5 / (charCodeZ - charCodeA) * (l.charCodeAt(0) - charCodeA)) % 360);
}

export const BondiMarker = ({ line }: BondiMarkerProps) => {
  const [position, setPosition] = useState<Pos>([0, 0])


  const [licon, setLicon] = useState<Icon | undefined>(undefined);

  function updateLicon(line: string) {
    const canvas = document.createElement('canvas');
    canvas.width = 56;
    canvas.height = 56;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.filter = `hue-rotate(${bondiHue(line)}deg)`;
      ctx.drawImage(bondiImg, 0, 0, 56, 56);
      ctx.font = "bold 28px sans-serif";
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(line[0].toUpperCase(), 28, 32);
    }

    const url = canvas.toDataURL();

    setLicon(icon({
      iconUrl: url,
      iconRetinaUrl: url,
      iconSize: [28, 28],
      iconAnchor: [14, 21],
      popupAnchor: [0, -16],
      className: 'leaflet-venue-icon'
    }));
  }

  useEffect(() => {
    updateLicon(line);
    bondiImg.addEventListener('load', () => updateLicon(line));
    return () => {
      bondiImg.removeEventListener('load', () => updateLicon(line));
    };
  }, [line]);

  useEffect(() => {
    function onData(data: BondiData) {
      console.log(line)
      console.count('soket')
      setPosition(data.coord)
    }
    socket.on(line, onData)
    return () => {
      socket.off(line, onData)
    }
  }, [line])

  return (
    licon ? <Marker icon={licon} position={position} /> : <Marker position={position} />
  );
};





const Markers = ({ pos }: MarkerProps) => (
  <Marker position={pos} />
);

export default Markers;