"use client";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram, FaPinterestP } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">
            <span className="text-blue-700">Atvan</span>
            <span className="text-red-500">tiqs</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="text-sm space-y-1">
            <li>Box 3233</li>
            <li>1810 Kings Way</li>
            <li>King Street, 5th Avenue, New York</li>
            <li className="text-blue-600 mt-2">+1-2355-3345-5</li>
            <li>
              <a href="mailto:Contact@Attornasite.co" className="text-blue-600 hover:underline">
                Contact@Attornasite.co
              </a>
            </li>
          </ul>
        </div>

        {/* Hot Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Hot Links</h3>
          <ul className="text-sm space-y-2 text-gray-600">
            <li><a href="#" className="hover:underline">Frequently Asked Questions</a></li>
            <li><a href="#" className="hover:underline">Story About Us</a></li>
            <li><a href="#" className="hover:underline">Our Works</a></li>
            <li><a href="#" className="hover:underline">Services We Provided</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-black">
            <a href="#" className="hover:text-purple-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-500"><FaXTwitter /></a>
            <a href="#" className="hover:text-purple-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-purple-500"><FaPinterestP /></a>
            <a href="#" className="hover:text-purple-500"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-100 py-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6">
        <p>&copy; {new Date().getFullYear()} , GoodLayers. All Right Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">News</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
