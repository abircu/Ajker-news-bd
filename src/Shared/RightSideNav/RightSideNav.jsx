import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import QuZone from "../../assets/qZone1.png";
import QuZone2 from "../../assets/qZone2.png";
import QuZone3 from "../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Login With</h1>
        <div className="p-2">
          <button className=" btn btn-xs w-full bg-base-100 border text-center text-xs font-medium mb-2">
            <FcGoogle className="text-xl"></FcGoogle>
            login with Google
          </button>
          <button className=" btn btn-xs w-full bg-base-100 border text-center text-xs font-medium mb-2">
            <GrGithub className="text-xl"></GrGithub>
            login with Github
          </button>
        </div>
      </div>
      {/* find with us */}
      <div className="mt-7 ">
        <h1 className="text-2xl font-bold">Find US On</h1>
        <div className="border  rounded-lg mt-6 m-4">
          <div className="flex items-center w-full bg-base-100 border text-start text-xs font-medium  p-2  ">
            <SiFacebook className="text-xl text-blue-600 mr-1"></SiFacebook>
            Facebook
          </div>
          <div className="flex items-center w-full bg-base-100 border text-start text-xs font-medium  p-2">
            <AiFillTwitterCircle className="text-gray-600 text-xl mr-1"></AiFillTwitterCircle>
            Twitter
          </div>
          <div className="flex items-center w-full bg-base-100 border text-start text-xs font-medium p-2">
            <FaSquareInstagram className="text-red-400 text-xl mr-1"></FaSquareInstagram>
            Instagram
          </div>
        </div>
      </div>
      {/* Q zune */}
      <div className="p-3 mt-8 bg-gray-300">
        <h1 className="text-[#403F3F] font-poppins text-xl font-semibold">
          Q-Zone
        </h1>
        <div className="p-4">
          <div className="mb-4">
            <img src={QuZone} alt="" />
          </div>
          <div className="mb-4">
            <img src={QuZone2} alt="" />
          </div>
          <div className="mb-4">
            <img src={QuZone3} alt="" />
          </div>
        </div>
      </div>
      {/* Learn more */}
      <div className="bg-[#05001DCC] p-4 mt-3">
        <div className="text-white text-3xl font-bold font-poppins text-center p-4">
          <p>Create an Amazing Newspaper</p>
        </div>
        <div className="text-white text-xs  font-poppins text-center p-8">
          <p className="text-center">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="btn btn-secondary px-4 py-2   font-poppins font-medium btn-sm flex justify-center items-center">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
