import React from 'react'
import {Wipoo} from "../assets/icons"

function joinus() {
    return (
        <div className="pt-32">
            
            {/* Logo Wipoo */}
            <div className="mx-auto mb-6 justify-center w-2/12">
                        <img src={Wipoo} />
            </div>

            {/* Daftar Reseller */}
            <div className="md:w-10/12 mx-auto my-8 w-11/12">
                <div className="flex md:flex-row flex-col justify-center items-center">
                    <div className="flex-1 ml-8">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-black text-primary tracking-wide ">Join Reseller & Dropshiper</h1>
                        <p className="text-xl mt-8 text-primary tracking-wide ">
                        Bagi kalian yang ingin mendapatkan penghasilan tambahan, Wipoo Luxugift
                        menyediakan layanan Reseller & Dropshiper nih bagi kalian. Produk kami
                        sangat cocok untuk kalangan Mahasiswa, Remaja, Anak Sekolah, dan masih 
                        banyak lagi. Apa saja sih keuntungannya ?
                        <br/>1. Harga Spesial
                        <br/>2. Foto Produk Lengkap & Terbaru
                        <br/>3. Free Konten
                         </p>
                        <a href="https://bit.ly/ResellerDropshiperWipoo">
                        <button 
                        type="button" class=" flex mx-auto my-6 px-3 py-3 text-xl justify-center bg-hovsecondary text-white leading-tight uppercase rounded shadow-md hover:bg-hovsecondary2 hover:shadow-lg focus:bg-hovsecondary2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hovsecondary2 active:shadow-lg transition duration-150 ease-in-out">
                        Pendaftaran Reseller / Dropshipper
                        </button></a> 
                    </div>
                </div>
            </div>

            {/* Daftar Membership */}            
            <div className="md:w-10/12 mx-auto mt-12 w-11/12">
                <div className="flex md:flex-row flex-col justify-center items-center">
                    <div className="flex-1 ml-8">
                        <h1 className="lg:text-5xl md:text-4xl text-3xl font-black text-primary tracking-wide ">Join Membership</h1>
                        <p className="text-xl mt-8 text-primary tracking-wide ">
                        Adalagi nih Wipz! buat kalian yang sudah berlangganan dengan Wipoo Luxugift
                        kalian bisa mendapatkan benefit lain dengan mandaftar menjadi Member loh.
                        Terus buat membership, apa saja keuntungannya ?
                        <br/>1. Mendapatkan DISKON loh Wipz! Diskon bisa cek disini ya <a href="https://bit.ly/DiskonMembershipWipoo" class="text-teal-700"> bit.ly/DiskonMembershipWipoo</a>
                        <br/>2. Mendapatkan prioritas dalam pengerjaan
                         </p>
                        <a href="https://bit.ly/ResellerDropshiperWipoo">
                        <button 
                        type="button" class=" flex mx-auto my-6 px-3 py-3 text-xl justify-center bg-hovsecondary text-white leading-tight uppercase rounded shadow-md hover:bg-hovsecondary2 hover:shadow-lg focus:bg-hovsecondary2 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hovsecondary2 active:shadow-lg transition duration-150 ease-in-out">
                        Pendaftaran Membership
                        </button></a> 
                    </div>
                </div>
            </div>


        </div>
    )
}

export default joinus
