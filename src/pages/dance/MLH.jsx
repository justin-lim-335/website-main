import { FaGlobe, FaYoutube, FaInstagram } from "react-icons/fa";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import React from "react";

export default function MLH() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-2 sm:p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Stanford Mua Lac Hong</h1>

      {/* Social Links */}
      <div className="flex space-x-6 text-3xl mt-4">
        <a
          href="https://stanfordmlh.weebly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-200"
          aria-label="Website"
        >
          <FaGlobe />
        </a>
        <a
          href="https://youtube.com/@stanfordmlh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-colors duration-200"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com/stanfordmlh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-200"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
      <div>
        <p className="w-full text-gray-300">
          <strong>Years Active:</strong> 2022-2025<br></br>
          <strong>Roles:</strong> Choreographer, Dance Captain, Dancer
        </p>
        <p className="w-full text-gray-300 mt-4 mb-4">
          Established in 2013, Stanford's Múa Lạc Hồng (MLH) is a non-audition dance team based in California, on the university's campus. While best known for dancing with vibrantly colored fans, MLH also uses other props such as nón lá (conical hats) and colorful parasols. The team performs traditional Vietnamese dances at various cultural events and festivals, aiming to promote Vietnamese culture and heritage within the Stanford community and beyond. MLH is dedicated to fostering a sense of community among its members while celebrating and sharing Vietnamese traditions through dance.
        </p>
        <hr className="color-grayscale-100"></hr>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Hipnotized 2025</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/eaM5SCQVNnE?si=2ZH_hv6uKvSoYjBC" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 2025<br></br>
            <strong>Role: </strong> Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">ECC 2025</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/JZw4658rNxQ?si=1EpRxJi9Gv0hQag_" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> March 2025<br></br>
            <strong>Role: </strong> Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>
        
        <div>
          <h1 className="text-2xl font-bold mb-4">Breaking Ground 2024</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/IhSj-fvJtpY?si=0wIK3_lThMeO9Swd" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> November 2024<br></br>
            <strong>Role: </strong> Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Hipnotized 2024</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/PI10vnSrXcw?si=tKZK6NUdEGH7y2dM" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 2024<br></br>
            <strong>Role: </strong> Dance Captain & Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Breaking Ground 2023</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/jzbu85ggDJM?si=TAnIfH54NUs4Cd3k" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> November 2023<br></br>
            <strong>Role: </strong> Dance Captain & Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Hipnotized 2023</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/GMJySTyQ6ko?si=28wgDpRrZ_nz02gr" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 2023<br></br>
            <strong>Role: </strong> Choreographer & Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">ECC 2023</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/U4wjVDxizyI?si=h3onrqdwBUxUPsty" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> March 2023<br></br>
            <strong>Role: </strong> Choreographer & Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Breaking Ground 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/fEmaVpVGsaM?si=-x2-16wZMQXAIVaQ" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> November 2022<br></br>
            <strong>Role: </strong> Choreographer & Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Late Mid-Autumn Festival 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/DNhoZ5b70Lw?si=fkDxJHbK4YPpyPl5" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> October 2022<br></br>
            <strong>Role: </strong> Choreographer & Dancer<br></br>
            This performance was for Stanford's annual Late Mid-Autumn Festival and is a showcase of performances we did outside of regular dance showcases at Stanford.
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Hipnotized 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/6hzED0b4qAU?si=VByRb5VeY6dlHKII" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 2022<br></br>
            <strong>Role: </strong> Dancer
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>
      </div>
    </div>
  );
}
