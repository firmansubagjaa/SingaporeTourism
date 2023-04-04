import React from "react";

export default function Sidebars() {
  return (
    <>
      <div className="drawer drawer-mobile w-24">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side w-48">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu bg-[#323342]  text-white w-24">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a className="active justify-center">Browse</a>
            </li>
            <li>
              <a className="justify-center items-center">
                Suggest <br /> Attraction
              </a>
            </li>
            <li>
              <a className="justify-center">Videos</a>
            </li>
            <li>
              <a className="justify-center">Blog</a>
            </li>
            <li>
              <a className="justify-center">About</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
