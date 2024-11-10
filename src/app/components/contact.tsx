import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Contact() {
  return (
    <div
      id="contact"
      className="relative w-screen h-screen bg-cover bg-center flex flex-col lg:flex-row"
      style={{ backgroundImage: "url('/text-[rgba(0,0,0,0.54)].png')" }}
    >
      
      <div className="flex-1 flex flex-col items-center justify-center p-5 md:p-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <fieldset>
            <legend className="text-xl font-semibold">Personal Information</legend>

            <label htmlFor="name" className="block mt-4">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />

            <label htmlFor="email" className="block mt-4">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />

            <label htmlFor="message" className="block mt-4">
              Message
            </label>
            <textarea
              id="message"
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your message"
              rows={4}
            />

            <button
              type="submit"
              className="mt-4 bg-orange-800 text-white py-2 px-4 rounded hover:bg-orange-300 transition-colors"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      
      <div className="flex-1 flex flex-col items-start ml-10 justify-center mb-36 p-5 md:p-10 text-black space-y-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">Get In Touch</h2>

     
        <div className="flex items-center ">
          <Image src="/موقع1.jpeg" alt="Address Icon" width={32} height={32} className="mr-3" />
          <div>
            <p className="text-lg font-semibold">Address:</p>
            <p className="text-lg">{`Sindh,Pakistan`}</p>
          </div>
        </div>

       
        <div className="flex items-center">
          <Image src="/gmail app icon.jpeg" alt="Email Icon" width={32} height={32} className="mr-3" />
          <div>
            <p className="text-lg font-semibold">Email:</p>
            <p className="text-lg">tabsheerasha123@gmail.com</p>
          </div>
        </div>

      
        <div className="flex items-center">
          <Image src="/phone app icon.jpeg" alt="Phone Icon" width={32} height={32} className="mr-3" />
          <div>
            <p className="text-lg font-semibold">{`Phone:`}</p>
            <p className="text-lg">{`+123 ... 7890`}</p>
          </div>
        </div>

   
        <h3 className="text-2xl md:text-3xl font-bold mt-8">Follow Me</h3> {/* Increased margin */}
        <div className="flex space-x-4 mt-4">
          <Link href="https://www.linkedin.com/in/tabsheera-shakeel-116555300" target="_blank" rel="noopener noreferrer">
            <Image src="/Linkedin Black Icon.jpeg" alt="LinkedIn Icon" width={32} height={32} />
          </Link>
          <Link href="https://github.com/Tabsheera-Shakeel" target="_blank" rel="noopener noreferrer">
            <Image src="/Build software better, together.jpeg" alt="GitHub Icon" width={32} height={32} />
          </Link>
          <Link href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook-logo.jpeg" alt="Facebook Icon" width={32} height={32} />
          </Link>
        </div>
      </div>

      
    </div>
  );
}

export default Contact;
