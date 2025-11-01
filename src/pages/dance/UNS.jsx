import { FaGlobe, FaYoutube, FaInstagram } from "react-icons/fa";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import React from "react";

export default function UNS() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-2 sm:p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">UNS Dance</h1>

      {/* Social Links */}
      <div className="flex space-x-6 text-3xl mt-4">
        <a
          href="https://www.youtube.com/@uns-kpop"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-colors duration-200"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
      <div>
        <p className="w-full text-gray-300">
          <strong>Years Active:</strong> 2023-2025<br></br>
          <strong>Roles:</strong> Dancer, Cover Leader
        </p>
        <p className="w-full text-gray-300 mt-4 mb-4">
          Created in January 2023, Unserious (UNS) is a K-pop dance cover group at Stanford University. The team is dedicated to learning and performing choreographies from popular K-pop songs and achieves this through independently led dance covers.
        </p>
        <hr className="color-grayscale-100"></hr>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Panorama</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/218H_Zw8p9Q?si=rizYTbSY3VfSeVsB" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> March 6, 2025<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "Panorama" by IZ*ONE / Multiple(Hitomi, Minju, Hyewon)
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Good Boy Gone Bad</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/GAeRnWIL0uc?si=VSCsEjLOC21Nt-3j" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> April 3, 2024<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "Good Boy Gone Bad" by TXT / Yeonjun
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">BOUNCY (K-HOT CHILLI PEPPERS)</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/37CKv7qqpYQ?si=1MyJ_NEhlTnSYe-6" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> February 25, 2024<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "BOUNCY (K-HOT CHILLI PEPPERS)" by ATEEZ / San
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Boom</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/MHxji4AIIE4?si=y1lI-wGCaUeX0Ls5" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> July 6, 2023<br></br>
            <strong>Role: </strong> Cover Leader & Dancer<br></br>
            <strong>Song/Member: </strong> "Boom" by NCT Dream / Jeno
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">The 7th Sense</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/WAwKB9-UpAM?si=YpM9LpuVuDTXNMGg" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 16, 2023<br></br>
            <strong>Role: </strong> Cover Leader & Dancer<br></br>
            <strong>Song/Member: </strong> "The 7th Sense" by NCT U / Jaehyun<br></br>
            This was my first cover under UNS Dance, and I was honored to be the cover leader alongside my fellow member, Elisse Chow.
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>
      </div>
    </div>
  );
}
