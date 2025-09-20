import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
  return (
        <>
          {/* footer */}
                    <section className="py-4 bg-[#F0DEC9] ">
            <div className="container mx-auto bg-[#E9EAEB] rounded-2xl shadow-2xl ">
              {/* first section */}
              <div className="px-6 md:px-[120px] pb-3 rounded-2xl shadow-2xl">
                {/* Top part (Logo + Links) */}
                <div className="flex flex-col md:flex-row md:justify-between gap-8 pt-3 ">
                  
                  {/* Logo */}
                  <div>
                    <h1 className="text-4xl font-bold mb-4 md:mb-[32px]  mt-5">Locallyco</h1>
                    {/* Description */}
                      <p className="text-lg max-w-2xl mb-[32px] mt-6 ">
                        Design amazing digital experiences that create more happy in the world.
                      </p>
                  </div>
                  
                  {/* Footer columns */}
                  <div className="flex flex-cols-3 sm:flex-cols-3 md:flex-cols-4 gap-8 md:gap-[100px] ">
                    

                    <div className=''>
                      <h3 className="font-bold mb-3 mt-5 w-[70px]">About Us</h3>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                    </div>

                    <div className=''>
                      <h3 className="font-bold mb-3 mt-5">Services</h3>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                    </div>

                    <div className=''>
                      <h3 className="font-bold mb-3 mt-5">Support</h3>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                      <Link href="/#" className="link"><p className=''>lorem</p></Link>
                    </div>
                  </div>
                </div>

                
                {/* Social Links */}
                <div className="flex space-x-[32px] mt-3">
                  <Link href="/#" className="link">
                    <FaFacebook className="text-gray-700 text-2xl hover:text-gray-800" />
                  </Link>
                  <Link href="/#" className="link">
                    <FaTwitter className="text-gray-700 text-2xl hover:text-gray-800" />
                  </Link>
                  <Link href="/#" className="link">
                    <FaInstagram className="text-gray-700 text-2xl hover:text-gray-800" />
                  </Link>
                  <Link href="/#" className="link">
                    <FaWhatsapp className="text-gray-700 text-2xl hover:text-gray-800" />
                  </Link>
                  <Link href="/#" className="link">
                    <FaTiktok className="text-gray-700 text-2xl hover:text-gray-800" />
                  </Link>
                </div>

                <hr className="my-2 border-gray-300" />

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6 px-3 text-center md:text-left">
                  <p>© 2025 Locally UI. All rights reserved.</p>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/#" className="link">Privacy Policy</Link>
                    <Link href="/#" className="link">Terms of Service</Link>
                    <Link href="/#" className="link">Cookie Settings</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>
      );
}
