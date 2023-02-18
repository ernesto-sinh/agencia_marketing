import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import toronto_logo from 'assets/img/toronto_logo.png'
// import loading_button from 'assets/img/loading_button.gif'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { Typewriter } from 'react-simple-typewriter'

function Navbar(){

    const [loading,setLoading]=useState(true)

    window.onscroll = function() {scrollFuntion()}

    function scrollFuntion(){
        if(document.getElementById('navbar')){
            if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    return(
        <nav id='navbar' className='w-full py-4 top-0 transition duration-300 ease-in-out z-40 fixed'>
            <div className="  px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <Link to='/' className="ml-4 mt-2">
                        <img 
                        src={toronto_logo}
                        width={140}
                        height={120}
                        className=""
                        />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Casos</NavLink>
                        <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Servicios</NavLink>
                        <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Nosotros</NavLink>
                        <NavLink to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Carreras</NavLink>
                        <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Blog</NavLink>
                        <NavLink to='/Contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 transition duration-300 ease-in-out mx-4">Contacto</NavLink>
                    
                        <Link
                        to="button"
                        className="ml-12 inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2 text-base font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                        Hire us
                        <PulseLoader className="ml-3 -mr-1 h-2 w-8" color="#f2f2f2" size={8} margin={1} />
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

const MapStateToProp = state => ({

})

export default connect(MapStateToProp, {

}) (Navbar)