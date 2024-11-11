import React from 'react';

const AboutPage = () => {
  return (
    <div
      id="about"
      className="relative w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center p-5"
      style={{ backgroundImage: "url('/text-[rgba(0,0,0,0.54)] (1).png')" }}
    >
     
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-700 text-center">
        About Me
      </h2>

      
      <div className="flex justify-center items-center w-full max-w-screen-md px-4">
        <div
          className="relative bg-cover bg-center p-5 md:p-10 rounded-lg shadow-lg text-gray-800 overflow-hidden"
          style={{
            backgroundImage: "url('https://i.pinimg.com/236x/72/bc/38/72bc38ff9ef33d48648ba034c1ca2cb8.jpg')",
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
            width: '100%',
            maxWidth: '700px',
            height: 'auto',
            maxHeight: '650px', 
          }}
        >
          <p className="text-sm md:text-base font-mono font-semibold text-black leading-relaxed overflow-hidden">
            {`Empower your business with captivating websites that fuel growth and improve your digital presence! I’m Tabsheera Shakeel, a Frontend Developer and Web Developer focused on creating visually appealing and responsive websites that drive results. 
            My priority is to provide excellent service and meet the unique needs of each client. As a Personal Branding Specialist, I create solutions that connect with your audience, improving your online identity. 
            I’m also exploring AI Engineering to include new technologies in my projects, ensuring user-friendly experiences. In addition to web development, I can create engaging social media posts that boost your brand's presence across various platforms. Let’s collaborate to create a compelling digital presence that showcases your brand and supports your success!`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
