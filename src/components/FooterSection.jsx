// components/FooterSection.jsx
import { Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; // ✅ TikTok icon

export default function FooterSection() {
  return (
    <footer className="bg-[#0B0B0B] text-gray-400 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-8 mb-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">TT Autos Leicester LTD</h2>


            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/ttautos_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@ttautos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#861918] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#861918] transition">About Us</a></li>
              <li><a href="#service" className="hover:text-[#861918] transition">Service</a></li>
              <li><a href="#package" className="hover:text-[#861918] transition">Package</a></li>
              <li><a href="#contact" className="hover:text-[#861918] transition">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Business Info</h3>
            <ul className="text-sm space-y-2">
              {/* <li><span className="text-white font-semibold">Company Reg:</span> 1153016</li>
              <li><span className="text-white font-semibold">VAT Reg:</span> 115 5821 84</li> */}
              <li><span className="text-white font-semibold">Opening Hours:</span><span className="text-lg"> 9:00 AM – 5:00 PM (Mon–Fri)</span> </li>
              <li>
                <span className="text-white font-semibold">Phone:</span>{" "}
                <a href="tel:01162530770" className="hover:underline text-lg hover:text-[#861918]">
                  +44 116 253 0770
                </a>
              </li>
              <li>
                <span className="text-white font-semibold">Email:</span>{" "}
                <a href="mailto:ttautosgarage@gmail.com" className="hover:underline text-lg hover:text-[#861918]">
                  ttautosgarage@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TT Autos Leicester LTD. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <a href="/terms" className="hover:text-[#861918] transition duration-300">
              Terms & Conditions
            </a>
            <span className="text-gray-500">|</span>
            <a href="/privacy" className="hover:text-[#861918] transition duration-300">
              Privacy Policy
            </a>
          </div>

          {/* Center: Powered by Ansely */}
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#861918] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
