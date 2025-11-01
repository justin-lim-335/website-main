import { FaGlobe, FaYoutube, FaInstagram } from "react-icons/fa";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import React from "react";

export default function Legacy() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-2 sm:p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Legacy Dance</h1>

      {/* Social Links */}
      <div className="flex space-x-6 text-3xl mt-4">
        <a
          href="https://lgcydance.weebly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-200"
          aria-label="Website"
        >
          <FaGlobe />
        </a>
        <a
          href="https://youtube.com/@legacydance4840"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-colors duration-200"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="https://instagram.com/lgcy_dance"
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
          <strong>Roles:</strong> Executive Director, Choreographer, Dancer
        </p>
        <p className="w-full text-gray-300 mt-4 mb-4">
          Legacy Dance is a competitive dance team at Stanford University that appreciates and draws from multiple styles, including house, whacking, hip hop, contemporary, and more. As a member of Legacy Dance, I have had the opportunity to collaborate and learn from many talented dancers and choreographers to create captivating sets that emphasize story-telling while blending various dance styles. Our team has performed at numerous on-campus showcases and competitions, showcasing our passion for dance and commitment to excellence.
        </p>
        <hr className="color-grayscale-100"></hr>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Hipnotized 2025</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/-033ZLNBf9E?si=WmarR2bqBDZfAVn9" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 2025<br></br>
            <strong>Role: </strong>Dancer<br></br>
            Taking place at Alliance Dance Team's annual "Hipnotized" showcase at Stanford University, this performance features our "Summer" themed set. 
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">World of Dance LA 2025</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/kJBtLlD5HQ4?si=1cTUfSPdC50hrKUC" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> April 2025<br></br>
            <strong>Role: </strong> Dancer<br></br>
            Our team competed at the World of Dance LA 2025 competition, showcasing a high-energy "Just-Dance" themed set, based on the video game of the same name. 
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Breaking Ground 2024</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/0L123P-5YJU?si=75vP5k_hKbZF9Vwx" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> November 2024<br></br>
            <strong>Role: </strong> Choreographer, Dancer<br></br>
            At the Common Origins Dance Company's annual "Breaking Ground" showcase, we performed in our "Elements" themed set, which explores stages of life within the context of different elements (fire, air, water, and earth). I choreographed to Mercy [4:00-5:12] alongside my fellow Artistic Director at the time, Juben Rana.
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Hipnotized 2024</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/Ysk3WpmIhDM?si=uYxVOAfQjnD8BFnO" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 2024 <br></br>
            <strong>Role: </strong> Dancer<br></br>
            For Alliance Dance's 2024 annual Hipnotized showcase at Stanford, the team performed a "Fruits" themed set, for a more fun performance that pivoted from serious tones we had been doing quite frequently at that point in time. 
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Breaking Ground 2023</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/NG9UAVDmibE?si=l6oQJv-8UcbJTdZ2" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> November 2023<br></br>
            <strong>Role: </strong> Dancer<br></br>
            For Common Origins Dance Company's 2023 Breaking Ground showcase, we performed a very emotional "Rage" themed set that explored a variety of perspectives on the concepts of anger and frustration. 
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">World of Dance LA 2023</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/vxT7QOvykok?si=RfEbALYhj6sCzdjz" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> April 2023<br></br>
            <strong>Role: </strong> Dancer<br></br>
            For our World of Dance LA 2023 competition, we performed a "Turning Back Time" set that explored themes of regret and acceptance through the breakup between two friends.
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Breaking Ground 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/IL47N-Z_GIc?si=lT9axyhoCC_2xjJS" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> November 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            The theme for Common Origins Dance Company's 2022 Breaking Ground showcase was "Spooky Christmas" which was intended to add a scarier twist onto the approaching holiday season. 
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Hipnotized 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/2rpX5G5usM4?si=9gb9uInuob8IQBxU" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            In my first performance with Legacy at Alliance Dance's annual Hipnotized showcase, we performed our "Headphones" themed set, based on a popular TikTok trend in which people ask what you are listening too. The flexibility of song choice allowed for a lot more creativity in what could be offered in a set like this.
          </p>
        </div>
      </div>
    </div>
  );
}
