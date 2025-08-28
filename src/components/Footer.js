import React from "react";
import { Facebook, Instagram, Phone, Mail, Cloud } from "lucide-react"; // if you use lucide-react for icons

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6 border-b border-gray-600">
        {/* Left Info */}
        <div>
          <h3 className="text-xl font-semibold uppercase tracking-wide">
            The Mountaintop
          </h3>
          <p className="mt-2 italic text-gray-300">
            Exclusively offered by Summit Development
          </p>
          <p className="mt-2">
            456 Alpine Road <br />
            Boulder, Colorado 80302
          </p>
          <p className="mt-2">Managed by Peak Hotels</p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l md:border-r border-gray-600 px-6 md:px-10">
          <p className="uppercase text-gray-400 mb-2">Call Us</p>
          <p className="text-lg">555.123.4567</p>
        </div>

        <div className="flex flex-col justify-center px-6 md:px-10">
          <p className="uppercase text-gray-400 mb-2">Email Us</p>
          <p className="text-lg">info@themountaintop.com</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Awards */}
        <div className="flex gap-6">
          <div className="bg-gray-700 px-4 py-2 rounded">Award Placeholder</div>
          <div className="bg-gray-700 px-4 py-2 rounded">Award Placeholder</div>
          <div className="bg-gray-700 px-4 py-2 rounded">Award Placeholder</div>
        </div>

        {/* Weather + Social */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Cloud size={20} />
            <span>72°F</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="bg-[#262626] py-4 text-center text-gray-400 text-xs">
        Accessibility | Privacy Policy | Careers
      </div>
    </footer>
  );
}
