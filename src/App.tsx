import { useState } from 'react';
import MapView from './components/MapView';
import logoURL from './icons/logo.svg';

export default function App() {
  return (<>
    <header className="flex h-16 px-2 gap-4 bg-$yellow items-center">
      <img className="h-12" src={logoURL} alt="" />
      <h1 className='font-title font-900 text-8'>FIND MY BONDI</h1>
      <p>¡logo preliminar!</p>
    </header>
    <MapView className="grow block" position={[-31.424528037992335, -62.07158078019124]} />
  </>);
}
