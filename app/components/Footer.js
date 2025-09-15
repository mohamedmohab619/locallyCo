import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
  return (
        <>
          {/* footer */}
          <section className="bg-[#F0DEC9] py-4">
                  <div className="container mx-auto ">
                    {/* first section */}
                    <div className="bg-[#E9EAEB] px-[120px] pb-3 rounded-2xl shadow-2xl">
                      <div className="flex justify-between bg-cyan-200">
                      <div className="flex justify-between bg-fuchsia-500 pt-3">
                        <h1 className="text-4xl font-bold mb-[32px] bg-lime-400">
                          Locallyco
                        </h1>
                      </div>
          
                        <div className="mr-[30px] flex space-x-[60px] bg-yellow-400">
                                        <div>
                                          <h3 className="text font-bold">About Us</h3>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                        </div>
          
                                        <div>
                                          <h3 className="text font-bold">About Us</h3>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                        </div>
          
                                        <div>
                                          <h3 className="text font-bold">About Us</h3>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                        </div>
                                        <div>
                                          <h3 className="text font-bold">About Us</h3>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                        </div>
                                        <div>
                                          <h3 className="text font-bold">About Us</h3>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                        </div>
                                        <div>
                                          <h3 className="text font-bold">About Us</h3>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                          <p className="">lorem</p>
                                        </div>
                          </div>
          
                    </div>
                    
                      <p className="text-lg md:text-lg max-w-2xl mb-[32px] bg-green-400 w-[300px]">
                        Design amazing digital experiences
                         that create more happy in the world.
                      </p>
                      {/* links */}
                      <div className="bg-amber-200 flex space-x-[32px]">
                        <Link href="/#" className="link"><FaFacebook className="text-gray-700 text-2xl hover:text-gray-800" /></Link>
                        <Link href="/#" className="link"><FaTwitter className="text-gray-700 text-2xl hover:text-gray-800" /></Link>
                        <Link href="/#" className="link"><FaInstagram className="text-gray-700 text-2xl hover:text-gray-800" /></Link>
                        <Link href="/#" className="link"><FaWhatsapp className="text-gray-700 text-2xl hover:text-gray-800" /></Link>
                        <Link href="/#" className="link"><FaTiktok className="text-gray-700 text-2xl hover:text-gray-800" /></Link>
                      </div>
                      <hr className="my-2 border-gray-300"/>
                                <div className="bg-cyan-400 flex justify-between pb-6 px-3">
                                  <p>© 2025 Locally UI. All rights reserved.</p>
                                  {/* icons */}
                                  <div className="border-green-700 space-x-4 flex">
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
