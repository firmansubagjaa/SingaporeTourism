import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

export default function MapsSection() {
  // create API from google console
  // source ENV problem in Vite ReactJS = https://stackoverflow.com/questions/70709987/how-to-load-environment-variables-from-env-file-using-vite
  const { isLoaded } = useLoadScript({ googleMapsApiKey: import.meta.env.VITE_REACT_GOOGLE_MAP_API_KEY });

  // Loading conditional
  if (!isLoaded) return <div>......Loading</div>;

  const Map = () => {
    return (
      // set GoogleMap and MarkerF
      <GoogleMap zoom={15} center={{ lat: 1.28692, lng: 103.85457 }} mapContainerClassName="w-full h-full">
        <MarkerF zoom={17} position={{ lat: 1.28692, lng: 103.85457 }} />
        <MarkerF zoom={17} position={{ lat: 1.287466, lng: 103.851424 }} />
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
