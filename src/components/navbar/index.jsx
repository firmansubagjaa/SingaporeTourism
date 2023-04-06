import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="bg-[#f4f7fa] w-[71vw]">
        <div className="navbar">
          <div className="flex-1">
            <a className="btn btn-ghost font-bold text-xl uppercase">top-rated tourist attractions in singapore</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
