'use client'

import L from 'leaflet'
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { useState } from 'react'
import Marker2 from './Marker2'

const Map = () => {

    const coord =[-4.015581,-79.20783];
    const polyline = [
      [-4.015581, -79.20783],
      [-4.0735965,-79.3137789],
      [-3.98652, -79.35912],
    ]
    const fillBlueOptions = { fillColor: 'blue' }
    const limeOptions = { color: 'gray' }
    const latitudInicial= -4.015581;
    const longitudInicial= -79.20783;
    const latitudFinal= -3.98652;
    const longitudFinal= -79.35912;

//
    
  
    return (
        <div>
            <MapContainer style={{
                height: '100vh',
                width: '100vw'
            }} center={coord} zoom={15} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker2 latitud={latitudInicial} longitud={longitudInicial}></Marker2>
                <Marker2 latitud={latitudFinal} longitud={longitudFinal}></Marker2>
                
                <Polyline pathOptions={limeOptions} positions={polyline} />
            </MapContainer>
        </div>
    )
}

export default Map