import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
  <nav className="bg-black opacity-95 text-white p-4">
  <div className="container mx-auto flex justify-between items-center">
   <Link to="/contact">
   <button className="hidden md:inline-block bg-[#4c4845] text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">
      احجز حصة مجانية
    </button>
   </Link>
    <div className="hidden md:flex space-x-4">
      <Link to="/" className="block hover:text-gray-300">الرئيسية</Link>
      <Link to="/about" className="block hover:text-gray-300">دوراتنـا</Link>
      <Link to="/services" className="block hover:text-gray-300">معلمونا</Link>
      <Link to="/about" className="block hover:text-gray-300">من نحن</Link>
      <Link to="/contact" className="block hover:text-gray-300">المدونة</Link>
    </div>
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
    </div>
    <img
      src="https://equraanacademy.com/wp-content/uploads/2024/06/logo-no-background.svg"
      alt=""
      className="w-20 h-20 md:w-28 md:h-20"
    />
  </div>
  {isOpen && (
    <div className="md:hidden bg-black space-y-2 p-4">
      <Link to="/" className="block hover:text-gray-300">الرئيسية</Link>
      <Link to="/" className="block hover:text-gray-300">دوراتنـا</Link>
      <Link to="/services" className="block hover:text-gray-300">معلمونا</Link>
      <Link to="/about" className="block hover:text-gray-300">من نحن</Link>
      <Link to="/contact" className="block hover:text-gray-300">المدونة</Link>
    </div>
  )}
</nav>

    </>
  )
}
