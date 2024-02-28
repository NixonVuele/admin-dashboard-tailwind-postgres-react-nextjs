'use client'

import L from 'leaflet'
import MarkerIcon from '../../node_modules/leaflet/dist/images/marker-icon.png'
import MarkerShadow from '../../node_modules/leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { useState } from 'react'

const Map = () => {

    const [coord, setCoord] = useState([-4.015581,-79.20783])
    const polyline = [
      [-4.015581, -79.20783],
      [-4.0735965,-79.3137789],
      [-3.98652, -79.35912],
    ]
    const fillBlueOptions = { fillColor: 'blue' }
    const blackOptions = { color: 'black' }
    const limeOptions = { color: 'gray' }
    const purpleOptions = { color: 'purple' }
    const redOptions = { color: 'red' }

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

                <Marker icon={
                    new L.Icon({
                      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png', // Cambiar a una imagen roja
                      iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                        iconSize: [25, 41],
                        iconAnchor: [12.5, 41],
                        popupAnchor: [0, -41],
                        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                        shadowSize: [41, 41],
                    })
                } position={[-4.015581,-79.20783]}>
                     <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Polyline pathOptions={limeOptions} positions={polyline} />
            </MapContainer>
        </div>
    )
}

export default Map