// "use client";

// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { mapData } from '@/lib/siteData';
// import 'leaflet/dist/leaflet.css';

// const Map: React.FC = () => {
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         // Memastikan bahwa komponen hanya dimuat di sisi klien
//         setIsClient(true);
//     }, []);

//     if (!isClient) {
//         return null; // Tidak render peta di server-side
//     }

//     const center = {
//         lat: mapData.mainData.lat,
//         lng: mapData.mainData.lng,
//     };

//     const containerStyle = {
//         width: '100%',
//         height: '400px',
//         borderRadius: '1em',
//         transition: 'ease-out 0.16s',
//     };

//     return (
//         <div className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 mt-14">
//             <MapContainer
//                 center={[center.lat, center.lng]}
//                 zoom={10}
//                 style={containerStyle}
//                 scrollWheelZoom={false}
//             >
//                 <TileLayer
//                     url="https://your-qgis-server-url/{z}/{x}/{y}.png"  // Ganti dengan URL TileServer QGIS Anda
//                     attribution="&copy; <a href='https://www.qgis.org'>QGIS</a>"
//                 />
//                 <Marker position={[center.lat, center.lng]}>
//                     <Popup>
//                         Map center located at {center.lat}, {center.lng}
//                     </Popup>
//                 </Marker>
//             </MapContainer>
//         </div>
//     );
// };

// export default Map;

"use client";

import React from 'react';

const Map: React.FC = () => {
    return (
        <div id="map" className="container max-w-[1320px] mx-auto px-5 md:px-10 xl:px-5 mt-14">
            <div style={{ width: '100%', height: '500px', borderRadius: '1em', overflow: 'hidden' }}>
                <iframe
                    src="https://fascinating-souffle-1c2e87.netlify.app/#15/-6.5876/106.8053"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default Map;
