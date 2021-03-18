import Leaflet from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup, Polygon, Circle, Polyline, Tooltip} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

function Map() {
    const fillBlueOptions = { fillColor: 'blue' }
    const blackOptions = { color: 'black' }
    const limeOptions = { color: 'lime' }
    const purpleOptions = { color: 'purple' }
    const redOptions = { color: 'red' }
    const position = [51.505, -0.09]
    const circle = [51.510, -0.11]
    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ]
    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.11],
        [51.51, -0.12],
        [51.514, -0.09],

    ]

    return (
        <div >
            <MapContainer center={position} zoom={13} style={{height : '92vh'}}>
                <TileLayer attribution='Tiles &copy; Esri &mdash; Source: Esri,
                        i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS
                        User Community' url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/
                        MapServer/tile/{z}/{y}/{x}'/>
                <Marker position={position}/>

                <Circle center={circle} pathOptions={fillBlueOptions} radius={1500} />
                <Polygon pathOptions={redOptions} positions={polygon} >
                    <Tooltip sticky>Uçuşa Yasak Alan !</Tooltip>
                </Polygon>
                <Polyline pathOptions={limeOptions} positions={polyline} />
            </MapContainer>
        </div>
    );
}

export default Map;
