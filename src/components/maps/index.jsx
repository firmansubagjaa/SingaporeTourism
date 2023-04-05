import React, { useState } from "react";
import { GoogleMap, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
import dataLocation from "../../constants/locations.json";
// import merlion from "../../assets/jpg/merlion.jpg";

export default function MapsSection() {
  // create getter and setter
  const [selectedMarker, setSelectedMarker] = useState("");

  // change JSON to string
  const dataToString = JSON.stringify(dataLocation);

  // parse JSON
  const parseData = JSON.parse(dataToString);
  const { location } = parseData;
  console.log(location);

  // create API from google console
  // source ENV problem in Vite ReactJS = https://stackoverflow.com/questions/70709987/how-to-load-environment-variables-from-env-file-using-vite
  const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLE_MAP_API_KEY });

  // Loading conditional
  if (!isLoaded) return <div>......Loading</div>;

  const Map = () => {
    return (
      // set GoogleMap for showing maps and add MarkerF to take a place
      <GoogleMap zoom={15} center={{ lat: 1.28692, lng: 103.85457 }} mapContainerClassName="w-full h-full">
        {location.map((items) => {
          return (
            <>
              <MarkerF
                htmlFor="my-modal-4"
                zoom={17}
                position={{ lat: items.Latitude, lng: items.Longitude }}
                onClick={() => {
                  setSelectedMarker(items);
                }}
              />
            </>
          );
        })}

        {/* conditional for showing description with InfoWindow*/}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.Latitude, lng: selectedMarker.Longitude }}
            options={{
              pixelOffset: new window.google.maps.Size(0, -40),
            }}
          >
            <div>
              <img src={selectedMarker.Image} alt="" className="w-56 rounded-md" />
              <div className="leading-loose">
                <h1 className="font-extrabold text-xl">{selectedMarker.Placename}</h1>
                <h1 className="font-bold">Description</h1>
              </div>
              <p>{selectedMarker.Description}</p>
            </div>
            {/* source : https://www.youtube.com/watch?v=V0tIqQ3lkt8 */}
          </InfoWindow>
        )}
      </GoogleMap>
    );
  };

  return (
    <>
      <Map />
    </>
  );
}

// source : https://www.youtube.com/watch?v=9e-5QHpadi0&list=PL2rFahu9sLJ2QuJaKKYDaJp0YqjFCDCtN&index=1
