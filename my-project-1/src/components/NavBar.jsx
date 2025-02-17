import React from 'react'
import logo from '../imagenes/logo.png'

const NavBar = () => {
return (
    <body class="antialiased bg-gray-200">
<header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 bg-cyan-700">
    <div class="flex-1 flex justify-between items-center">
    <a href="#">
    <img
    class='w-24 h-24'
    src={logo}
    
    />    
    </a>
</div>

<label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
<input class="hidden" type="checkbox" id="menu-toggle" />
<div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
    <ul class="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
        <li><a class="text-black lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-800" href="#">inicio</a></li>
        <li><a class="text-black lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-800" href="#">PDF</a></li>
        <li><a class="text-black lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-800" href="#">Documentacion</a></li>
        <li><a class="text-black lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-00 lg:mb-0 mb-2" href="#">cerrar sesion</a></li>
    </ul>
    </nav>
    <a href="#" class="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
    </a>

</div>

</header>

</body>
    
    
    
)
}

export default NavBar
