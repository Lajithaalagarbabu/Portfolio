import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import image1 from "../../../public/lajitha2.png";

const AboutSection = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-24 pb-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
            {/* Title Section - First on mobile, integrated into content on desktop */}
            <h1 className="w-full text-center justify-center md:hidden bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent text-2xl md:text-3xl font-bold mb-8 animate-fadedown order-1">
              About me
            </h1>

            {/* Content Section */}
            <div className="w-full md:w-3/5 order-3 md:order-1">
              {/* Desktop Title - Hidden on mobile */}
              <h1 className="hidden md:block bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent text-2xl md:text-3xl font-bold mb-8 animate-fadedown">
                About me
              </h1>
              <div className="space-y-6 text-gray-200">
                <p className="leading-relaxed animate-fadeleft hover:translate-x-2 transition-transform duration-300">
                 I Am Lajitha, As a beginner UI/UX designer, I am passionate about crafting intuitive and visually appealing digital experiences.
                 With a strong foundation in design principles, I focus on creating user-friendly interfaces that enhance usability 
                 and accessibility. 
                </p>
                <p className="leading-relaxed animate-fadeleft hover:translate-x-2 transition-transform duration-300 [animation-delay:200ms]">
                  My experience spans website redesigns, social media creatives,
                  and prototyping, focusing on usability and accessibility. I
                  also possess technical skills in HTML and CSS, enabling me to
                  bridge the gap between design and development.
                </p>
                <p className="leading-relaxed animate-fadeleft hover:translate-x-2 transition-transform duration-300 [animation-delay:400ms]">
                  Collaboration is key to my growth as a UI/UX designer.
                  I enjoy working in team environments alongside developers, 
                  marketers, and clients to create impactful solutions. With
                  a keen eye for detail, I strive to ensure every design is 
                  both functional and visually appealing, bringing creativity and precision to every project.
                </p>
                <p className="leading-relaxed animate-fadeleft hover:translate-x-2 transition-transform duration-300 [animation-delay:600ms]">
                Showcasing my commitment to discipline and excellence, I am always eager to learn,
                grow, and refine my skills. I strive to contribute to projects that challenge and
                inspire me, pushing me to create meaningful and user-centric designs.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-2/5 order-1 md:order-2 animate-fadein">
              <div className="relative  p-1 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 max-w-md mx-auto">
                <Image
                  src={image1}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutSection;

// import React from "react";
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import image1 from "../../../public/sree2.jpg";

// const AboutSection = () => {
//   return (
//     <div className="bg-black min-h-screen ">
//       <Navbar />
//       <main className="pt-24 pb-8 px-4 md:px-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
//             {/* Content Section */}
//             <div className="w-full md:w-3/5 order-2 md:order-1">
//               <h1 className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent text-2xl md:text-3xl font-bold mb-8 animate-fadedown order-2 md:order-1">
//                 About me
//               </h1>
//               <div className="space-y-6 text-gray-200">
//                 <p className="leading-relaxed animate-fadeleft hover:translate-x-2 transition-transform duration-300">
//                   I am SreeValsan R, a UI/UX designer passionate about creating
//                   intuitive and impactful digital experiences. With expertise in
//                   tools like Figma and Adobe Photoshop, I specialize in
//                   designing user-friendly interfaces that combine functionality
//                   and aesthetics.
//                 </p>
//                 <p className="leading-relaxed animate-fadeleft hover:translate-x-2 transition-transform duration-300 [animation-delay:200ms]">
//                   My experience spans website redesigns, social media creatives,
//                   and prototyping, focusing on usability and accessibility. I
//                   also possess technical skills in HTML and CSS, enabling me to
//                   bridge the gap between design and development.
//                 </p>
//                 <p className="leading-relaxed animate-fadeleft hover:translate-x-2 transition-transform duration-300 [animation-delay:400ms]">
//                   Collaboration is at the heart of my work. I thrive in team
//                   environments, working with developers, marketers, and clients
//                   to deliver results-driven solutions. My dedication to detail
//                   ensures every project is executed with precision and
//                   creativity.
//                 </p>
//                 <p className="leading-relaxed animate-fadeleft hover:translate-x-2 transition-transform duration-300 [animation-delay:600ms]">
//                   Outside of work, I am a state-level judo player and a gold
//                   medalist in yoga, showcasing my commitment to discipline and
//                   excellence. I continuously seek to grow, learn, and contribute
//                   to projects that challenge and inspire me.
//                 </p>
//               </div>
//             </div>

//             {/* Image Section */}
//             <div className="w-full md:w-2/5 order-1 md:order-2 animate-fadein">
//               <div className="relative bg-gradient-to-br from-primary to-button p-1 rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 max-w-md mx-auto">
//                 <Image
//                   src={image1}
//                   alt="Profile"
//                   width={300}
//                   height={300}
//                   className="rounded-lg w-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AboutSection;
