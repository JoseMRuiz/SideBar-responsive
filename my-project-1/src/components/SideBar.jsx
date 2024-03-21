import React, { useState } from 'react'
import imagen1 from '../imagenes/imagen1.png'


const SideBar = () => {
    const [open ,setOpen] = useState(true)
return (
    <div className=''>
    <div className={` ${open  ? "w-72" : "w-20" } duration-300   w-72 h-screen bg-cyan-700 relative`}>Home page
        <img
        src={imagen1}
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-cyan-900 w-8 ${!open && 'rotate-180'}`}
        onClick={() => setOpen(!open)}
        />
    </div>
    <div className='p-7 text-6xl font-semibold flx-1 h-screen'>
        <h1>Home pageeeeeee</h1>
    </div>
    </div>
)
}

export default SideBar
