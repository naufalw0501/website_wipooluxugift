import React from 'react'
import { Link } from 'react-router-dom'
import { Wipoo } from '../assets/icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

const footer = () => {
    return (
        <div className="w-full mx-auto bg-primary mt-32">
            <div className="flex flex-wrap md:w-10/12 w-full px-3 md:px-0 mx-auto justify-around items-start pt-4 aos-init aos-animate" data-aos="zoom-in" data-aos-duration="1000">
                <div className="md:w-4/12 w-full text-white text-normal p-3">
                    <img src={Wipoo} className="object-cover w-16" />
                    <h4 className="font-bold mt-4 text-xl">Wipoo Luxugift</h4>
                    <address className="mt-3">
                    Ds. Branjang RT 03 RW 01, Kec. Ungaran Barat, Kab. Semarang
                    </address>
                </div>
                {/* <div className="md:flex-1 w-3/12 text-white flex flex-col p-2 mt-20 md:pl-10 pl-0">
                    <h5 className="mt-1 font-bold text-xl">About Us</h5>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/">Home</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/program">Program</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/kegiatan">Kegiatan</Link>
                    <Link className="mt-3 text-gray-300 hover:text-white" to="/galeri">Galeri</Link>
                </div> */}
                <div className="md:flex-1 w-4/12 text-white flex flex-col p-2 mt-20">
                    <h5 className="mt-1 font-bold text-xl">Our Online Shop</h5>
                    <a className="mt-3 text-gray hover:text-white" to="/"><a href="https://www.tokopedia.com/wipoo-luxugift/">Tokopedia</a></a>
                    <a className="mt-3 text-gray hover:text-white" to="/"><a href="http://shopee.co.id/wipoo.luxugift">Shopee</a></a>
                </div>
                <div className="md:flex-1 w-4/12 text-white flex flex-col p-2 mt-20 md:pl-10 pl-0">
                    <h5 className="mt-1 font-bold text-xl">Our Social Media</h5>
                    <a className="mt-3 text-gray hover:text-white" to="/"><a href="https://www.instagram.com/wipoo.luxugift/">Instagram</a></a>
                    <a className="mt-3 text-gray hover:text-white" to="/"><a href="https://www.tiktok.com/@wipoo.luxugift?_t=8XaQ5HuFTIA&_r=1">Tiktok</a></a>
                    <a className="mt-3 text-gray hover:text-white" to="/"><a href="https://wa.me/085712342153">Whatsapp</a></a>
                </div>
            </div>
            <p className="text-center mt-3 text-white text-sm pb-2">©Wipoo Luxugift</p>
        </div>
    )
}

export default footer
