import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { GiFaceToFace } from "react-icons/gi";
export default function Footer() {
  return (
    <footer className="bg-dark-brown text-beige mt-10">
      <div className="px-6 max-w-7xl mx-auto">
        {/* Top: Logo + Links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 pt-8">
          {/* Logo + Description */}
          <div className="flex-1 flex flex-col items-start">
            <Image
              src="/beige logo.png"
              alt="LocallyCo Logo"
              width={200}
              height={200}
              className="object-cover w-42 h-10 mb-3"
            />
            <p className="text-sm leading-relaxed max-w-md">
              Design amazing digital experiences that create more happiness in
              the world. Build, innovate, and inspire with Locally UI.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1 mt-0">
            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <BsFillPeopleFill /> About Us
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/#" className="hover:underline">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2">
                {" "}
                <FaServer /> Services
              </h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/#" className="hover:underline">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3 flex items-center gap-2"> <GiFaceToFace /> Support</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/#" className="hover:underline">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/#" className="hover:underline">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-3 mt-4">
          <Link href="/#">
            <FaFacebook className="text-beige text-lg hover:text-light-beige" />
          </Link>
          <Link href="/#">
            <FaTwitter className="text-beige text-lg hover:text-light-beige" />
          </Link>
          <Link href="/#">
            <FaInstagram className="text-beige text-lg hover:text-light-beige" />
          </Link>
          <Link href="/#">
            <FaWhatsapp className="text-beige text-lg hover:text-light-beige" />
          </Link>
          <Link href="/#">
            <FaTiktok className="text-beige text-lg hover:text-light-beige" />
          </Link>
        </div>

        <hr className="my-6 border-beige/30" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6 text-sm">
          <p>© 2025 Locally UI. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/#" className="hover:underline">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
