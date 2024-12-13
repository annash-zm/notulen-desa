
import { PiCircleFill } from 'react-icons/pi';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import Bwi from '../banyuwangi.json'



const MapComp = ({ layer, setLoading, setRegulasi, setVillage }) => {
    const position = [-8.22135, 114.2840704]
    // const [kecamatan, setKecamatan] = useState([
    //     { id: 'id3510100', color: 'blue', villageName : "Genteng" },
    //     { id: 'id3510210', color: 'yellow', villageName : "Wongsorejo" },
    //     { id: 'id3510080', color: 'cyan', villageName : "Glenmore" },
    //     { id: 'id3510090', color: 'purple', villageName : "Kalibaru" }
    // ])
    //console.log(layer.find(e=>e.id === regulasi))

    const data = layer

    const CloseAll = () => {
        const map = useMap()
        map.eachLayer(layer => {
            layer.closeTooltip()
        })
    }




    return (
        <div className='relative py-5 px-10 max-lg:px-5'>
            <div className='sticky top-20'>
                <MapContainer
                    className='border-[1px] border-black rounded-lg w-[600px] h-[600px] max-lg:h-[350px] max-lg:w-[340px]'
                    center={position} zoom={9.5}
                    scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <CloseAll />
                    <div className='leaflet-top max-lg:hidden leaflet-right leaflet-control map-legend mx-5 my-5'>
                        <div className='bg-white px-5 py-5 rounded-lg shadow-md flex flex-col gap-2 text-gray-500 text-xs'>
                            {data.map((item, idx) => (
                                <div key={idx} className='flex items-center gap-1'>
                                    <PiCircleFill
                                        color={`${item.color}`}
                                        style={{
                                            opacity: 0.5
                                        }}
                                    />
                                    <span className=''>
                                        {item.district}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <GeoJSON
                        style={{
                            fillColor: "gray",
                            fillOpacity: 0.6,
                            color: "black",
                            weight: 0.2,
                        }}
                        data={Bwi}
                    />

                    {
                        data.map((item, idx) => (
                            item.data.content.map((t, i) => (
                                <GeoJSON
                                    key={i}
                                    style={{
                                        fillColor: `${item.color}`,
                                        fillOpacity: 0.5,
                                        color: "black",
                                        weight: 0.5,
                                    }}
                                    data={Bwi.features.filter(e => e.properties.district_code === item.id).filter(e => e.properties.village_code === t.id_village)}
                                    onEachFeature={(district, layer) => {
                                        const districtName = district.properties.village + ', ' + district.properties.district;
                                        // layer.bindTooltip(districtName,
                                        //     { permanent: true, className: 'label' }
                                        // )
                                        layer.on({
                                            click: function (e) {
                                                layer.bindPopup(districtName).openPopup();
                                                setRegulasi(e.target.feature.properties.district_code)
                                                setVillage(e.target.feature.properties.village_code)
                                                //setClickMap(false)
                                                setLoading(true)
                                            }
                                        })

                                        layer.bindTooltip(districtName).openTooltip();

                                        layer.on('mouseover', function (e) {
                                            layer.bindPopup(districtName).closePopup();
                                            e.target.setStyle({
                                                fillColor: "black"
                                            })
                                        });

                                        layer.on('mouseout', function (e) {
                                            //layer.bindTooltip(districtName).closeTooltip();
                                            e.target.setStyle({
                                                fillColor: `${item.color}`
                                            })
                                        });


                                    }}

                                />
                            ))

                        ))
                    }

                </MapContainer>
            </div>
        </div>
    )
}

export default MapComp
