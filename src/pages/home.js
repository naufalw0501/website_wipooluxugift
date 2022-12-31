import React from "react";
import { Link } from "react-router-dom";
import { Covlampilus, Covgancikayu, Covphotoicon, Heroimage,  Hero2, Gal1, Gal10, Gal3, Gal4, Gal5, Gal6 } from "../assets/images";

function home() {
  return (
    <div className="pt-32">

      {/* Header Desktop */}
      <div className="md:w-10/12 md:flex-row flex-col w-11/12 mx-auto md:flex justify-center items-center hidden">
        <div className="flex-1 md:order-1 order-2">
          <h1 className="text-5xl font-black text-primary tracking-wide ">
            Wipoo.Luxugift
          </h1>
          <h2 className="text-xl mt-8 text-fourth tracking-wide ">
          Wipoo Luxugift, menyediakan berbagai barang dari akrilik dan mikro wood jati belanda. Kami menyediakan beberapa produk yaitu
          <br/>1. Lampu Tidur Akrilik Custom
          <br/>2. Lampu Tidur Poster One Piece
          <br/>3. Hampers Akrilik Ilustrasi
          <br/>4. Gantungan Kunci Kayu Jati Belanda
          <br/>5. Gantungan Kunci Akrilik
          <br/>6. Gantungan Kunci Pin
          <br/>7. Medali Akrilik
          <br/>8. Jasa Laser Grafir Kayu
          <br/>9. Jasa Edit Photo Icon
          <br/>10. Hampers Gift Wisuda
          <br/>11. Hampers Gift Ulang Tahun
          </h2>
          <div className="mt-11 ">
            <Link
              className="bg-hovsecondary px-8 py-2 text-xl text-white rounded-lg hover:bg-hovsecondary2 hover:shadow-md"
              to="/profile"
            >
              Lihat Profil Kami
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:order-2 order-1">
          <img src={Heroimage} className="object-cover w-9/10" />
        </div>
      </div>
      
      {/* Header Small */}
      <div  style={{backgroundImage: `url(${Hero2})`, backgroundPosition:'center',backgroundAttachment:'fixed'}} className="md:hidden block">
                <div className="container pt-36 pb-36 s:w-screen w-4/5 mx-auto flex justify-center"  >
                    <div className="flex-1 ">
                        <h1 className="text-5xl font-black text-primary tracking-wide ">
                        <span className="">WIPOO</span> LUXUGIFT
                        </h1>
                        <h2 className="text-xl mt-8 text-primary tracking-wide ">
                        Wipoo Luxugift, menyediakan berbagai barang dari akrilik dan mikro wood jati belanda. Kami menyediakan beberapa produk yaitu
                        <br/>1. Lampu Tidur Akrilik Custom
                        <br/>2. Lampu Tidur Poster One Piece
                        <br/>3. Hampers Akrilik Ilustrasi
                        <br/>4. Gantungan Kunci Kayu Jati Belanda
                        <br/>5. Gantungan Kunci Akrilik
                        <br/>6. Gantungan Kunci Pin
                        <br/>7. Medali Akrilik
                        <br/>8. Jasa Laser Grafir Kayu
                        <br/>9. Jasa Edit Photo Icon
                        <br/>10. Hampers Gift Wisuda
                        <br/>11. Hampers Gift Ulang Tahun
                        </h2>
                        <div className="mt-11">
                        <Link
                          className="bg-hovsecondary px-8 py-2 text-xl text-white rounded-lg hover:bg-hovsecondary2 hover:shadow-md"
                          to="/profile"
                        >
                          Lihat Profil Kami
                        </Link>
                      </div>
                    </div>
                </div>
           </div>

      {/* Sedikit Produk */}
      <h3 className="text-center lg:text-5xl md:text-4xl text-3xl  font-black text-primary mt-32 lg:pb-6 pb-1 uppercase">
                Our Product
      </h3>
      <div className="justify-center flex flex-wrap mx-6">
                {/*Produk Lampu Tidur Akrilik Ilustrasi*/}
                <div class="flex justify-center mx-3 my-3">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">

                        <img class="rounded-t-lg" src={Covlampilus} alt=""/>

                        <div class="p-6">
                        <h5 class="text-primary text-xl font-medium mb-2">Lampu Tidur Akrilik Ilustrasi (Hampers)</h5>
                        <p class="text-fourth text-base mb-4">
                         Cocok untuk kado wisuda, ulang tahun, atau nikahan. Bisa ditambah Barcode 
                         lagu Spotify. Tersedia 6 warna yaitu merah, biru, kuning, hijau, pink, dan 
                         warm white.
                        </p>
                        <p class="text-fourth text-base mb-2">
                        Ukuran : 10,5 x 13,5 cm & 10,5 x 13,5 cm
                        </p>
                        <h7 class="text-hovsecondary text-xl font-medium justify-center flex flex-wrap "> Rp.70.000,- & Rp.80.000,- </h7>
                        <h6 class="text-primary text-lg font-medium justify-center flex flex-wrap "> Order Via : </h6>
                            <div class="flex flex-wrap justify-center">
                            <a href="https://wa.me/6285712342153?text=Halo%2C%20saya%20ingin%20memesan%20Lampu%20Tidur%20Akrilik%20Ilustrasi%20(Hampers).%0AApakah%20bisa%20%3F">
                            <button type="button" class=" mx-1 my-1 inline-block px-6 py-2.5 bg-wprime text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-wsec hover:shadow-lg focus:bg-wsec focus:shadow-lg focus:outline-none focus:ring-0 active:bg-wtri active:shadow-lg transition duration-150 ease-in-out">Whatsapp</button> 
                            </a> 
                            <a href="https://shopee.co.id/product/798434704/23109655972?smtt=0.798418457-1671695723.9">
                            <button type="button" class=" mx-1 my-1 inline-block px-6 py-2.5 bg-sprime text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-ssec hover:shadow-lg focus:bg-ssec focus:shadow-lg focus:outline-none focus:ring-0 active:bg-stri active:shadow-lg transition duration-150 ease-in-out">Shopee</button> 
                            </a> 
                            <a href="">
                            <button type="button" class=" mx-1 my-1 inline-block px-6 py-2.5 bg-tprime text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-tsec hover:shadow-lg focus:bg-tsec focus:shadow-lg focus:outline-none focus:ring-0 active:bg-ttri active:shadow-lg transition duration-150 ease-in-out">Tokopedia</button>
                            </a> 
                            </div>                        
                        </div>
                    </div>
                </div>

                {/*Produk Gantungan Kunci Kayu Ilustrasi Custom*/}
                <div class="flex justify-center mx-3 my-3">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">

                        <img class="rounded-t-lg" src={Covgancikayu} alt=""/>

                        <div class="p-6">
                        <h5 class="text-primary text-xl font-medium mb-2">Gantungan Kunci Kayu Custom (Non Hampers)</h5>
                        <p class="text-fourth text-base mb-2">
                        Design bisa custom. Dapat diisi dengan ilustrasi orang, bangunan, gambar,
                         tulisan ataupun dapat diisi dengan logo perusahaan/organisasi Anda. Tersedia 
                         1 sisi dan 2 sisi. Grafir menggunakan metode Black and White
                        </p>
                        <p class="text-fourth text-base mb-2">
                        Ukuran : 4 & 5 cm
                        </p>
                        <h7 class="text-hovsecondary text-xl font-medium justify-center flex flex-wrap "> Rp.5.000,- s/d Rp.16.000,- </h7>
                        <h6 class="text-primary text-lg font-medium justify-center flex flex-wrap "> Order Via : </h6>
                            <div class="flex flex-wrap justify-center">
                            <a href="https://wa.me/6285712342153?text=Halo%2C%20saya%20ingin%20memesan%20Gantungan%20Kunci%20Kayu%20Custom%20(Non%20Hampers).%0AApakah%20bisa%20%3F">
                            <button type="button" class=" mx-1 my-1 inline-block px-6 py-2.5 bg-wprime text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-wsec hover:shadow-lg focus:bg-wsec focus:shadow-lg focus:outline-none focus:ring-0 active:bg-wtri active:shadow-lg transition duration-150 ease-in-out">Whatsapp</button>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Produk Photo Icon*/}
                <div class="flex justify-center mx-3 my-3">
                    <div class="rounded-lg shadow-lg bg-white max-w-sm">

                        <img class="rounded-t-lg" src={Covphotoicon} alt=""/>

                        <div class="p-6">
                        <h5 class="text-primary text-xl font-medium mb-2">Jasa Edit Photo Icon</h5>
                        <p class="text-fourth text-base mb-2">
                        Dapat digunakan untuk foto profil unik, design gantungan kunci, design lampu tidur, 
                        dan sebagainya. Terdapat berbagai macam varian warna Background yang tersedia. 
                        Untuk melihat contohnya bisa kunjungi instagram kami di <a href="https://instagram.com/wipoo.photoicon" class="font-bold text-hovsecondary">@wipoo.photoicon</a>
                        </p>
                        <p class="text-fourth text-base mb-2">
                        Ukuran : N/A
                        </p>
                        <h7 class="text-hovsecondary text-xl font-medium justify-center flex flex-wrap "> Rp.6.000,- s/d Rp.18.000,- </h7>
                        <h6 class="text-primary text-lg font-medium justify-center flex flex-wrap "> Order Via : </h6>
                            <div class="flex flex-wrap justify-center">
                            <a href="https://wa.me/6285712342153?text=Halo%2C%20saya%20ingin%20menggunakan%20Jasa%20Edit%20Photo%20Icon.%0AApakah%20bisa%20%3F">
                            <button type="button" class=" mx-1 my-1 inline-block px-6 py-2.5 bg-wprime text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-wsec hover:shadow-lg focus:bg-wsec focus:shadow-lg focus:outline-none focus:ring-0 active:bg-wtri active:shadow-lg transition duration-150 ease-in-out">Whatsapp</button> 
                            </a>
                            </div>
                        </div>
                    </div>
                </div>   

                <div className="mt-11">
            
          </div>
          

      </div>
      <div className="justify-center flex">
          <Link
              className="bg-hovsecondary px-8 py-2 text-xl rounded-xl text-white inline-block mb-24 lg:mb-24 lg:mt-6 md:mt-6 hover:bg-hovsecondary2 hover:shadow-md"
              to="/produk"
            >
              Lihat Produk Lainnya
          </Link>
      </div>


      {/* Gallery */}
      <div className="md:w-10/12 w-11/12 mx-auto lg:pb-6 pb-3 flex justify-center ">
        <div className="">
          <h3 className="text-left lg:text-5xl md:text-4xl text-3xl font-black text-primary uppercase">
                  Our Gallery
          </h3>
        </div>
      </div>
        <section class="overflow-hidden text-gray-700">
            {/* Gallery 1 */}
            <div class="container px-5 mx-auto lg:px-32 lg:py-2 py-1/2 lg:pt-2 pb-2 md:pb-4">
                <div class="flex flex-wrap -m-1 md:-m-2">
                <div class="flex flex-wrap w-1/2">
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={Gal1}/>
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={Gal10}/>
                    </div>
                    <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={Gal3}/>
                    </div>
                </div>
                <div class="flex flex-wrap w-1/2">
                    <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={Gal4}/>
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={Gal5}/>
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                        src={Gal6}/>
                    </div>
                </div>
                </div>
            </div>
            </section>

        <div className="justify-center flex">
          <Link
              className="bg-hovsecondary px-8 py-2 text-xl rounded-xl text-white inline-block mt-3 hover:bg-hovsecondary2 hover:shadow-md"
              to="/gallery"
            >
              Lihat Lainnya
          </Link>
        </div>


      
      {/* Lokasi Perusahaan */}
      <h3 className="text-center lg:text-5xl md:text-4xl text-3xl lg:pb-6 pb-1 font-black text-primary mt-32 uppercase">
        Our Location
      </h3>
      <div className="md:w-8/12 w-11/12 mx-auto">
        <div>
          <iframe
            className="mt-2 rounded-xl filter drop-shadow-md"
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="yes"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.1129877036606!2d110.36188681477404!3d-7.112903094863513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7089582ac72d2f%3A0x6a79b6ffd65dd8a7!2sWipoo%20Luxugift!5e0!3m2!1sen!2sid!4v1671769158499!5m2!1sen!2sid"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default home;
