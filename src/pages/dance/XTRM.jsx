import { FaGlobe, FaYoutube, FaInstagram } from "react-icons/fa";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import React from "react";

export default function XTRM() {
  return (
    <div className="flex flex-col items-center text-center space-y-6 p-2 sm:p-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Stanford XTRM</h1>

      {/* Social Links */}
      <div className="flex space-x-6 text-3xl mt-4">
        <a
          href="https://www.youtube.com/c/stanfordXTRM"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-red-500 transition-colors duration-200"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
        <a
          href="http://instagram.com/stanfordxtrm"
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
          <strong>Years Active:</strong> 2021-2023<br></br>
          <strong>Roles:</strong> Dancer, Cover Leader
        </p>
        <p className="w-full text-gray-300 mt-4 mb-4">
          XTRM (pronounced "extreme") is Stanford University’s non-audition, competitive K-pop Dance Team. XTRM strives to provide opportunities to learn dances popularized by various K-pop groups and foster a community passionate about Korean pop culture. 
        </p>
        <hr className="color-grayscale-100"></hr>
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Eternal Sunshine</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/oIaW3xQJinA?si=eBCznECFlj15EksJ" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> December 6, 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "Eternal Sunshine" by ATEEZ / Mingi
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Party On The Edge 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/ctytDSZIO-M?si=4rxNvQqU2JXGgp63" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> October 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "HOT" by SEVENTEEN / Mingyu [2:40-4:20] <br></br>
            This performance was part of Stanford University's annual festival, Party On The Edge 2022, showcasing various student organizations and their talents.
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Late Mid-Autumn Festival 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/4cH593HxAcA?si=l_P2Nlz_W-_bwjku" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> October 10, 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "WANNABE" by ITZY / Chaeryeong [0:00-4:39]
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">SF Korean Culture Festival 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/vuRC--bDsKU?si=QQ8PCinMWFz0tUHr" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> August 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "WANNABE" by ITZY / Chaeryeong [0:00-3:15]
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Hipnotized 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/5lcUlp09v2U?si=_xGegPOp0mxZwhA1" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> June 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Songs: </strong> "Shangri-La" by VIXX [0:00-1:25] & "LIT" by ONEUS [2:50-4:14]
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">Stanford Korea Conference</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/U8NT7houHLw?si=ElXWmIPfUVZFVA4H" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> May 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "Love Shot" by EXO [10:43-12:00]
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">JIKJIN</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/EpcLVk4v-4U?si=Pxuz5nkAgixbXDfA" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> March 31, 2022<br></br>
            <strong>Role: </strong> Cover Leader & Dancer<br></br>
            <strong>Song/Member: </strong> "JIKJIN" by TREASURE 
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>

        <div>
          <h1 className="text-2xl font-bold mb-4">ECC 2022</h1>
          <ResponsiveVideo url="https://www.youtube.com/embed/KisYKhpelbk?si=NPtRkWU-EKQcjDBN" />

          <p className="w-full text-gray-300 mt-6">
            <strong>Date: </strong> March 2022<br></br>
            <strong>Role: </strong> Dancer<br></br>
            <strong>Song/Member: </strong> "Love Killa" by MONSTA X [0:00-1:23]
          </p>
        </div>

        <hr className="my-4 color-grayscale-100"></hr>
      </div>
    </div>
  );
}
