import React from 'react'
import {Profile} from "../assets/images"

function profile() {
    return (
        <div className="pt-32">
            
            {/* Profile Wipoo Luxugift */}
            <div className="md:w-10/12 mx-auto w-11/12">
                <div className="flex md:flex-row flex-col justify-center items-center">
                    <div className="flex-1 flex justify-center mx-3 w-2/3">
                        <img src={Profile} />
                    </div>
                    <div className="flex-1 ml-8">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-black text-primary tracking-wide lg:mb-12 ">Wipoo Luxugift</h1>
                        <p className="text-xl mt-8 text-fourth tracking-wide ">
                            Sejak Februari 2022 kami memulai perjalanan dengan motto kami
                            yaitu "Temukan Kejutan Di Setiap Saatnya". Kami memberikan solusi bagi
                            Anda dalam memberikan surprise atau kejutan kepada semua orang tersayang. 
                            Produk yang kami buat berbahan utama Kayu Jati Belanda dan Akrilik.
                            Kualitas merupakan hal yang kami utamakan, namun kami juga mempertimbangkan produk kami bisa 
                            didapatkan oleh siapapun dengan harga yang terjangkau.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Us */}
            <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-black text-primary mt-32 uppercase">Our Instagram</h2>
            <div className="md:w-10/12 mx-auto mt-5 flex md:flex-row flex-col justify-around">
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/Ci-G6CPB8c0/embed" frameborder="0"></iframe>
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mt-8 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/CmVgQlAD7XL/embed" frameborder="0"></iframe>
                <iframe className="md:w-3/12 w-8/12 md:mt-0 mt-8 mx-auto filter shadow-lg rounded-xl" height="510" src="https://www.instagram.com/p/CmY3PN0So2y/embed" frameborder="0"></iframe>
            </div>

            {/* Our Location */}
            <h3 className="text-center lg:text-5xl md:text-4xl text-3xl font-black text-primary mt-32 uppercase">
              Our Location
            </h3>
            <div className="md:w-8/12 w-11/12 mx-auto">
                <div>
                <iframe
                    className="mt-8 rounded-xl filter drop-shadow-md"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    scrolling="ye"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1129877036606!2d110.36188681477404!3d-7.112903094863513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7089582ac72d2f%3A0x6a79b6ffd65dd8a7!2sWipoo%20Luxugift!5e0!3m2!1sen!2sid!4v1671769158499!5m2!1sen!2sid"
                >
                </iframe>
                </div>
            </div>
        </div>
    )
}

export default profile
