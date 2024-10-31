import React from 'react'
import '../App.css'
import { FaMapMarkerAlt ,FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePermPhoneMsg } from "react-icons/md";

export default function Contact() {
  return (
    <>
   <div className="flex justify-center items-center h-screen bg-gray-200">
      <form className="bg-white p-6 rounded shadow-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">اتصل بنا</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">الاسم</label>
          <input
            type="text"
            id="name"
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="أدخل اسمك"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="أدخل بريدك الإلكتروني"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">رسالة</label>
          <textarea
            id="message"
            className="border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="أدخل رسالتك"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200 w-full"
        >
          إرسال
        </button>
      </form>
    </div>
    </>
  )
}
