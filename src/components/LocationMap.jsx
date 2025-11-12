import React from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

// 📍 Your home or office location (Pokhara)
const center = {
  lat: 28.224297108170582,
  lng: 83.67863964577938,
};

const libraries = ["places"];

const LocationMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBjUXm_xotUMy2pqXlC9roOu-PvvGltI_8", // ✅ Directly use your key
    libraries,
  });

  const [selected, setSelected] = React.useState(false);

  if (loadError) {
    console.error("Google Maps Load Error:", loadError);
    return (
      <div className="p-4 text-center text-red-600 bg-red-100 h-full flex items-center justify-center">
        Map failed to load. Please check your API key and network connection.
      </div>
    );
  }

  return isLoaded ? (
    <section className="py-16 bg-[#F8F8F5]" id="map">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]">
          Visit <span className="text-[#D4AF37]">QuickEvent</span>
        </h2>
        <p className="text-[#4B5563] mt-2">
          Find us easily on the map — your trusted event partner in Pokhara.
        </p>
      </div>

      <div className="flex justify-center">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{
            disableDefaultUI: false,
            zoomControl: true,
            styles: [
              {
                elementType: "geometry",
                stylers: [{ color: "#f8f8f5" }],
              },
              {
                elementType: "labels.text.fill",
                stylers: [{ color: "#2C2C2C" }],
              },
              {
                elementType: "labels.text.stroke",
                stylers: [{ color: "#F8F8F5" }],
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#B9AFA1" }],
              },
              {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#D4AF37" }],
              },
            ],
          }}
        >
          <Marker
            position={center}
            title="QuickEvent"
            onClick={() => setSelected(true)}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png", // Gold marker
            }}
          />
          {selected && (
            <InfoWindow
              position={center}
              onCloseClick={() => setSelected(false)}
            >
              <div style={{ color: "#2C2C2C", fontWeight: 600 }}>
                📍 QuickEvent<br />Pokhara, Nepal
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </section>
  ) : (
    <div className="p-4 text-center text-gray-600 bg-gray-50 h-full flex items-center justify-center">
      Loading interactive map...
    </div>
  );
};

export default LocationMap;
