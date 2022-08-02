
import React, { useEffect, useState } from 'react'
import { Circle, MapContainer, Marker, Polyline, Popup, Rectangle, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Markers from './Markers'
import MyLocation from './MyLocation'
const C = [
 [-31.435644783154306, -62.11266700794385],
 [-31.43144523325101, -62.111693366088225,],
 [-31.435441087767437, -62.08745082109501],
 [-31.435445664840817, -62.08682318420538],
 [-31.435379057626488, -62.08635032529959],
 [-31.43559213107089, -62.08592196200486],
 [-31.435734020013033, -62.08538552021886],
 [-31.435885062844456, -62.08421607712533],
 [-31.435885062815515, -62.084194619433696],
 [-31.431152271695847, -62.0831378290742],
 [-31.430404529803273, -62.08799586909407],
 [-31.429092136842474, -62.08767452154318],
 [-31.428993723046023, -62.08824583204528],
 [-31.426260982377453, -62.08764769942801],
 [-31.426393730403163, -62.08657481582801],
 [-31.42656767581994, -62.08549388562917],
 [-31.426753064666507, -62.084321760288056],
 [-31.42519899131813, -62.083884560218564],
 [-31.42499300026633, -62.08370216998995],
 [-31.424812185540123, -62.08379068288463],
[-31.42399050408242, -62.08369680556235],
[-31.422184610628488, -62.08330252083062],
[-31.422363141566716, -62.08226182372944],
[-31.422539383311754, -62.081084334009134],
[-31.422857533160123, -62.07922556317343],
[-31.42303606282402, -62.07806684883949],
[-31.42325350233003, -62.07669355786729],
[-31.42304521818097, -62.07661845598679],
[-31.423963038279354, -62.0755294791242],
[-31.42859320070566, -62.070076548212874],
[-31.42728634165545, -62.06856378231921],
[-31.4253042754408, -62.06628390462025],
[-31.423564783286423, -62.068370663235456],
[-31.420822818569455, -62.06521647803688],
[-31.41673632872393, -62.06428386257783],
[-31.417198281089544, -62.06149611415712],
[-31.41952340681072, -62.06227199233533],
[-31.43072719364356, -62.06599980860323],
[-31.42921066031475, -62.06780417655071],
[-31.426188653608765, -62.07135937018945],
[-31.42815173760915, -62.073614830142745],
[-31.429148660608554, -62.07466587445642],
[-31.42937960650645, -62.07473353825265],
[-31.431138625793423, -62.07513952103559],
[-31.430634402644117, -62.078310697703245],
[-31.429964316522177, -62.08233361825357],
[-31.43129801474818, -62.08265749086522],
[-31.429757168543134, -62.09201445110188],
[-31.431690643998987, -62.09247567966143],
[-31.43243876309111, -62.08788544265468],
[-31.43795224764839, -62.089110157410495],

[-31.441140308589294, -62.08981165576614],
[-31.438339404694858, -62.10690285333699],
[-31.436579840730676, -62.10648639747256],
[-31.43561954438109, -62.11264048297481]




]

const A = [
  [-31.420788135887587, -62.10935408260213],
  [-31.426253856546097, -62.11054498340496],
  [-31.431491122395517, -62.11173553214557],
  [-31.431912229963846, -62.108685860490084],
  [-31.430067581730047, -62.10822988495897],
  [-31.429820405267936, -62.10823524937701],
  [-31.428717257915217, -62.107999214983174],
  [-31.429280276650992, -62.104737648817476],
  [-31.432434034550898, -62.10549403176253],
  [-31.43534510152396, -62.10616994843418],
  [-31.436622097658123, -62.09891189083686],
  [-31.43264458645808, -62.0979945753575],
  [-31.432987876586896, -62.09598828301496],
  [-31.43396739084117, -62.09622431740792],
  [-31.43544515469253, -62.087356178531486],
  [-31.435449731765708, -62.08680900789123],
  [-31.435408538099054, -62.086358396775715],
  [-31.435619083331126, -62.085870234740604],
  [-31.435756395174483, -62.08537670828077],
  [-31.435939477319405, -62.08418044305744],
  [-31.43131490078851, -62.08318127623016],
  [-31.42972199554003, -62.09205402365464],
  [-31.431679777360834, -62.092463169523704],
  [-31.43226689671217, -62.088962746140595],
  [-31.430451812652617, -62.08854595287425],
  [-31.430538781627224, -62.088020239908296],
  [-31.429094628277863, -62.08767691715364],
  [-31.428980193618955, -62.088232134419826],
  [-31.426263473876094, -62.087658141690625],
  [-31.42638477811739, -62.08664158447161],
  [-31.4264076656928, -62.08651015623051],
  [-31.42676928864422, -62.08431610925422],
  [-31.425203771624517, -62.083905731277724],
  [-31.42502295729488, -62.083699201183606],
  [-31.42476432354695, -62.08380648954436],
  [-31.42380760134098, -62.08369651897575],
  [-31.422193968816334, -62.083318327504756],
  [-31.422523564099265, -62.08121547563576],
  [-31.422963022668757, -62.07859495742684],
  [-31.42322273016257, -62.07666816475585],
  [-31.419777970156087, -62.07592787507042],
  [-31.418681571487134, -62.082555613549054],
  [-31.414839302605497, -62.081762758712436],
  [-31.41514950114009, -62.08020690836974],
[-31.406890033335404, -62.07842563373544],
[-31.406551226153134, -62.07999204380064],
[-31.41211849713909, -62.081215131110255],
[-31.412420658641153, -62.081215131110255],
[-31.414847071790028, -62.08177303058632],
[-31.416606467024856, -62.082184486828105],
[-31.41675754067003, -62.08235078378741]
  
 ]
const fillBlueOptions = { fillColor: 'blue' }
const limeOptions = { color: 'red', borderStyle:'dotted', borderWidth: 90}
const lineA = { color: 'blue', borderStyle:'dotted', borderWidth: 90}
const MapView = ({position})=> {
 

  return(
    <MapContainer center={[-31.424528037992335, -62.07158078019124] } zoom={16} minZoom={14} scrollWheelZoom={true}>

    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
   <Markers entity='a' position={position}/>
   <Markers entity='b' position={position}/>
   <Polyline pathOptions={limeOptions} positions={C} />
   <Polyline pathOptions={lineA} positions={A} />
   <Circle center={[-31.42946673981706, -62.091439918356535]} pathOptions={fillBlueOptions} radius={30} />
   <MyLocation change={position}/>
   
  </MapContainer>
  )
}


export default MapView