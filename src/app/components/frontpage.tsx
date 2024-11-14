"use client";
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Frontpage = () => {

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false); 
  };

  return (
    <div className="relative min-h-screen w-full bg-cover bg-center overflow-hidden">

      {/* Navbar */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-full p-3 z-20 bg-transparent">
        <nav className="font-serif">
          <div className="flex justify-end">
            <ul className="gap-10 text-white hidden md:flex">
              {['home', 'about', 'skill', 'project', 'contact'].map((section) => (
                <li key={section} className="group">
                  <Link href={`#${section}`}>
                    <span className="text-xl text-white transition-colors duration-300 group-hover:text-black group-hover:bg-white p-2 rounded capitalize">
                      {section}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}> 
          <SheetTrigger className="text-white absolute top-4 right-5 z-30 " onClick={() => setIsSheetOpen(true)}>
            <Menu />
          </SheetTrigger>
          <SheetContent className="bg-black text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Welcome To My Portfolio</SheetTitle>
            </SheetHeader>
            <ul className="mt-10 text-white">
              {['home', 'about', 'skill', 'project', 'contact'].map((section) => (
                <li key={section} className="group">
                  <Link href={`#${section}`} onClick={handleLinkClick} className="text-xl transition-colors duration-300 group-hover:text-black group-hover:bg-amber-700 p-2 rounded">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        <div className="relative h-[450px]">
          <div className="absolute top-1 left-0 z-10 ml-4 hidden md:block">
            <Image src="/Untitled design (4).png" alt="Left Image" width={100} height={220} className="object-cover" />
          </div>

          <div className="absolute ml-6 top-4 left-4 z-20">
            <Image src="/Pink Watercolour Flower Shop Logo.png" alt="Logo" width={80} height={30} className="object-contain" />
          </div>

          <Image
            src="/Untitled design (5).png"
            alt="Background"
            width={570}
            height={360}
            className="absolute top-0 right-0 w-full max-w-[570px]"
          />
          <div className="p-6 absolute top-[25%] ml-8">
            <h1 className="text-xl mb-2 animate__slideInBottom">{`Hello, my Name is`}</h1>
            <h2 className="text-base text-yellow-700 italic animate__slideInBottom">Tabsheera Shakeel</h2>
            <p className="mt-2 text-sm animate__slideInBottom">
              {`Frontend & Web Developer passionate about creating visually appealing, responsive websites with engaging user
              experiences. As a Personal Branding Specialist, I align designs with audience needs. With UI/UX expertise, I bring ideas to
              life. Currently exploring generative AI to sharpen my skills. Let's create something impactful together!`}
            </p>
            <div className="mt-4">
              <Link href="#projectcard">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-lg shadow-lg transition duration-300 hover:scale-105">Work</button>
              </Link>
              <Link href="https://www.linkedin.com/in/tabsheera-shakeel-116555300">
                <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-lg shadow-lg transition duration-300 hover:scale-105 ml-2 mt-2 md:mt-0">LinkedIn</button>
              </Link>
            </div>
          </div>
        </div>

        <Image
          src="/IMG_3283.png"
          alt="Profile"
          width={370}
          height={300}
          className="absolute profile-image top-[60%] right-12 w-3/4 max-w-[370px] z-10 sm:right-4 sm:top-[70%] mt-10"
        />
      </div>

      <div className="hidden md:block">
        <div className="absolute ml-4 top-1 left-0 z-10">
          <Image src="/Untitled design (4).png" alt="Left Image" width={100} height={220} className="object-cover" />
        </div>
        <div className="absolute ml-6 top-4 left-4 z-20">
          <Image src="/Pink Watercolour Flower Shop Logo.png" alt="Logo" width={120} height={30} className="object-contain" />
        </div>

        <div className="absolute ml-20 left-5 top-[30%] p-5 m-5 max-w-lg z-10">
          <h1 className="text-4xl mb-2 animate__slideInBottom">{`Hello, my Name is`}</h1>
          <h2 className="text-4xl text-yellow-700 italic animate__slideInBottom">Tabsheera Shakeel</h2>
          <p className="mt-2 text-lg animate__slideInBottom">
            {`Frontend & Web Developer passionate about creating visually appealing, responsive websites with engaging user
            experiences. As a Personal Branding Specialist, I align designs with audience needs. With UI/UX expertise, I bring ideas to
            life. Currently exploring generative AI to sharpen my skills. Let's create something impactful together!`}
          </p>
          <div className="mt-10">
            <Link href="#projectcard">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-lg shadow-lg transition duration-300 hover:scale-105">Work</button>
            </Link>
            <Link href="https://www.linkedin.com/in/tabsheera-shakeel-116555300">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-4 py-2 rounded-lg shadow-lg transition duration-300 hover:scale-105 ml-2">LinkedIn</button>
            </Link>
          </div>
        </div>

        <div className="absolute top-0 right-0 z-0">
          <Image src="/Untitled design (5).png" alt="Right Image 1" width={570} height={360} className="object-cover" />
        </div>
        <div className="absolute mr-24 right-5 top-[60%] transform -translate-y-1/2 z-0">
          <Image src="/IMG_3283.png" alt="Right Image 2" width={370} height={300} className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
