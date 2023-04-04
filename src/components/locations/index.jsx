import React from "react";

export default function () {
  return (
    <div className="bg-[#292a38] p-6 text-xs">
      <select className="select bg-[#292a38] text-white w-full max-w-xs mb-10">
        <option disabled selected>
          Pick your favorite Simpson
        </option>
        <option>Homer</option>
        <option>Marge</option>
        <option>Bart</option>
        <option>Lisa</option>
        <option>Maggie</option>
      </select>

      <ul className="menu bg-[#292a38] text-white w-56">
        <li>
          <a>Merlion</a>
        </li>
        <li>
          <a className="active">
            <div tabIndex={0} className="collapse collapse-arrow">
              <div className="">Marina Bay Sands</div>
              <div className="collapse-content">
                <p>ArtScience Museum</p>
                <p className="py-5">Marina Bay Sands Skypark</p>
                <p>Double Helix Brdige</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a className="">
            <div tabIndex={0} className="collapse collapse-arrow">
              <div className="">Garden by the Bay</div>
              <div className="collapse-content">
                <p>ArtScience Museum</p>
                <p className="py-5">Marina Bay Sands Skypark</p>
                <p>Double Helix Brdige</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a className="">
            <div tabIndex={0} className="collapse collapse-arrow">
              <div className="">China town</div>
              <div className="collapse-content">
                <p>ArtScience Museum</p>
                <p className="py-5">Marina Bay Sands Skypark</p>
                <p>Double Helix Brdige</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a>Asian Civillisations Museum</a>
        </li>
        <li>
          <a>Clarke Quay</a>
        </li>
        <li>
          <a>Fort Canning Park</a>
        </li>
        <li>
          <a>Singapore Flyer</a>
        </li>
        <li>
          <a>Orchard Road</a>
        </li>
      </ul>
    </div>
  );
}
