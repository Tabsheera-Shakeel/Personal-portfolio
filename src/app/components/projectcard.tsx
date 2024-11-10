// "use client";

// import React from "react";

// const ProjectCard = () => {
 
//   const projects = [
//     {
//       videoSrc: "/e-commerce.png",
//       title: "E-commerce Website UI",
//       text: "A fully responsive and interactive e-commerce platform with dynamic product pages and smooth checkout.",
//       link: "https://era-ecommerc-ui.vercel.app/",
//     },
//     {
//       videoSrc: "/foodpand.png",
//       title: "Foodpanda Clone",
//       text: "An intuitive food delivery platform replicating the Foodpanda experience, with restaurant browsing and order tracking.",
//       link: "https://my-foodpanda-ui.vercel.app ",
//     },
//     {
//       videoSrc: "/resume.png",
//       title: "Resume Builder",
//       text: "An editable, shareable resume builder with custom fields and design options.",
//       link: "https://resume-builder-milestone-5.vercel.app/",
//     },
//     {
//       videoSrc: "/netflix.png",
//       title: "Netflix Clone",
//       text: "A streaming platform inspired by Netflix, featuring video previews and genre-based browsing.",
//       link: "https://nfx-clone-by-tabsheera.vercel.app/",
//     },
//     {
//       videoSrc: "/real-state.png",
//       title: "Real Estate Website",
//       text: "A real estate portal with property listings and agent connections.",
//       link: "https://realstate-website-seven.vercel.app/",
//     },
//     {
//       videoSrc: "/panacloud.png",
//       title: "Educational Company Website",
//       text: "An informative and interactive website for an educational company with an easy-to-navigate interface.",
//       link: "https://example-portfolio.com",
//     },
//   ];

//   return (
//     <div id="project" className="bg-black min-h-screen py-10"> 
//       <h1 className="text-4xl text-orange-700 font-bold text-center mb-4">My Work</h1>
//       <p className="text-center mb-10 text-lg text-white px-4">
        
//         {`I built these projects using Next.js, Tailwind CSS, TypeScript, HTML, and CSS. I designed custom templates for them using Figma and Canva, making sure they are fully responsive.`}
//       </p>
      
//       <div id="projectcard" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg p-4 w-3/4 ml-20 hover:shadow-xl transition-shadow transform hover:scale-105" // Change card background to white
//           >
           
//             <div className="w-full h-[150px] sm:h-[180px] lg:h-[220px] overflow-hidden rounded-lg">
//               <video
//                 className="w-full h-full object-cover"
//                 src={project.videoSrc}
//                 autoPlay
//                 loop
//                 muted
//               />
//             </div>
            
           
//             <div className="text-center">
//               <h2 className="text-lg sm:text-xl font-semibold mb-1">{project.title}</h2>
//               <p className="text-sm sm:text-base text-gray-700 mb-2">{project.text}</p>
//               <p className="text-blue-500 text-sm font-semibold">Click to view live project</p>
//             </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = () => {
  const projects = [
    {
      ImageSrc: "/e-commerce.png",
      title: "E-commerce Website UI",
      text: "A fully responsive and interactive e-commerce platform with dynamic product pages and smooth checkout.",
      link: "https://era-ecommerc-ui.vercel.app/",
    },
    {
      ImageSrc: "/foodpand.png",
      title: "Foodpanda Clone",
      text: "An intuitive food delivery platform replicating the Foodpanda experience, with restaurant browsing and order tracking.",
      link: "https://my-foodpanda-ui.vercel.app",
    },
    {
      ImageSrc: "/resume.png",
      title: "Resume Builder",
      text: "An editable, shareable resume builder with custom fields and design options.",
      link: "https://resume-builder-milestone-5.vercel.app/",
    },
    {
      ImageSrc: "/netflix.png",
      title: "Netflix Clone",
      text: "A streaming platform inspired by Netflix, featuring video previews and genre-based browsing.",
      link: "https://nfx-clone-by-tabsheera.vercel.app/",
    },
    {
     ImageSrc: "/real-state.png",
      title: "Real Estate Website",
      text: "A real estate portal with property listings and agent connections.",
      link: "https://realstate-website-seven.vercel.app/",
    },
    {
     ImageSrc: "/panacloud.png",
      title: "Educational Company Website",
      text: "An informative and interactive website for an educational company with an easy-to-navigate interface.",
      link: "https://example-portfolio.com",
    },
  ];

  return (
    <div id="project" className="bg-black min-h-screen py-10">
      <h1 className="text-4xl text-orange-700 font-bold text-center mb-4">My Work</h1>
      <p className="text-center mb-10 text-lg text-white px-4">
        {`I built these projects using Next.js, Tailwind CSS, TypeScript, HTML, and CSS. I designed custom templates for them using Figma and Canva, making sure they are fully responsive.`}
      </p>
      
      <div id="projectcard" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 bg-white rounded-lg shadow-lg p-4 w-3/4 mx-20 hover:shadow-xl transition-shadow transform hover:scale-105"
          >
            <div className="w-full h-[150px] sm:h-[180px] lg:h-[220px] overflow-hidden rounded-lg relative">
              <Image
                src={project.ImageSrc}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            
            <div className="text-center">
              <h2 className="text-lg sm:text-xl font-semibold mb-1">{project.title}</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-2">{project.text}</p>
              <p className="text-blue-500 text-sm font-semibold">Click to view live project</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
