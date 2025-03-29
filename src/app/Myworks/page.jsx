import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
// Images
import phcLoginPageImage1 from "../../../public/phcloginpage.png";
import closeFriendsImage2 from "../../../public/CLOSEFRIENDS.png";
// import fitnessimage3 from "../../../public/myprojects/fitnessimage3.png";
// import fooddeleiveryimage4 from "../../../public/myprojects/fooddeleiveryimage4.png";
// import ecommerceimage5 from "../../../public/myprojects/ecommerceimage5.png";
// import recreationimage6 from "../../../public/myprojects/designimage6.png";

const RecentWorks = () => {
  const projects = [
    {
      id: 1,
      title: "PRIMARY HEALTH CARE SYSTEMS",
      image: phcLoginPageImage1,
      link: "https://www.figma.com/design/SN2pUbV8slG2gN6MmmHATI/Untitled?node-id=0-1&t=vm5HYSW211XSTy4T-1",
      category: "Web Design",
    },
    {
      id: 2,
      title: "LOVE NEST App",
      image: closeFriendsImage2,
      link: "https://www.figma.com/design/tz7ORxZOInNKksapiNv8hn/Untitled?node-id=5-501&t=VZFk5fyJSWEh0842-1",
      category: "App Design",
    },
    // {
    //   id: 3,
    //   title: "Fitness Application Design",
    //   image: fitnessimage3,
    //   link: "https://dribbble.com/shots/23999535-Fitness-Application-Design",
    //   category: "App Design",
    // },
    // {
    //   id: 4,
    //   title: "Food Delivery Application",
    //   image: fooddeleiveryimage4,
    //   link: "https://dribbble.com/shots/23982882-Food-Delivery-Application",
    //   category: "App Design",
    // },
    // {
    //   id: 5,
    //   title: "Ecommerce app for Mobile devices",
    //   image: ecommerceimage5,
    //   link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices",
    //   category: "App Design",
    // },
    // {
    //   id: 6,
    //   title: "Recreating the Design from another Application",
    //   image: recreationimage6,
    //   link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application",
    //   category: "App Design",
    // },
  ];

  return (
    <div className="bg-gradient-to-bl from-black via-black to-purple-900 min-h-screen">
      <Navbar />

      <main className="pt-24 pb-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-fadeleft">
            <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              My Recent
            </span>{" "}
            Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeup">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group block bg-gradient-to-br from-primary to-black rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:opacity-90"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-400">{project.category}</p>
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
// import Image from "next/image";
// export function MyWorks() {
//   return (
//     <div>
//       <h1>My Works</h1>
//       <Image 
//         src="/myprojects/phcLoginPageimage1.png" // Use the relative public path
//         alt="PHC Login Page"
//         width={500} 
//         height={300} 
//       />
//     </div>
//   );
// }
// <img src="/myprojects/phcLoginPageimage1.png" alt="PHC Login Page" width="500" />

// import Image from "next/image";
// export function MyWorks() {
//   return (
//     <div>
//       <h1>My Works</h1>
//       <Image 
//         src="/public/myprojects/CLOSE FRIENDSimage2.png" // Use the relative public path
//         alt="CLOSE FRIENDS"
//         width={500} 
//         height={300} 
//       />
//     </div>
//   );
// }
// <img src="/public/myprojects/CLOSE FRIENDSimage2.png" alt="CLOSE FRIENDS" width="500" />

export default RecentWorks;
