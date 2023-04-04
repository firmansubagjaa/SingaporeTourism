import React from "react";
import Sidebars from "../../components/sidebars";
import Locations from "../../components/locations";
import Navbar from "../../components/navbar";
import MapsSection from "../../components/maps";

export default function Browse() {
  return (
    <div className="flex flex-row">
      <Sidebars />
      <Locations />
      <div className="flex flex-col">
        <Navbar />
        <MapsSection />
      </div>
    </div>
  );
}
