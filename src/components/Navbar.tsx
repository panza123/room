import { useState } from "react";
import { nav } from "../layout/header/index.js";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiTireIronCross } from "react-icons/gi";


export default function Navbar() {
  const [open,setopen] = useState<boolean>(false)
  function handleClick (){
    setopen(!open)
  }
  return (
    <header className="w-full h-[50x] flex items-center gap-10 px-10 py-6 text-white absolute top-4 left-4">
      <div className="sm:flex lg:hidden" onClick={handleClick}>
      { !open ? <GiHamburgerMenu size={30}/> : <GiTireIronCross size={30}/>}
      </div>

      <h3 className="text-4xl  lg:text-3xl  ">room</h3>
      <nav className="hidden lg:flex gap-5">
        {nav.map((links) => (
          <ul key={links.id} className=" gap-10">
            <li>{links.link}</li>
          </ul>
        ))}
      </nav>
      {/* {menu} */}
      <div className=''>
      <nav className={open ? 'flex gap-3 ' :'hidden'}>
        {nav.map((links) => (
          <ul key={links.id} className=" gap-5 text-[16px]">
            <li>{links.link}</li>
          </ul>
        ))}
      </nav>
      </div>
    </header>
  );
}
