import Img from '../assets/house.jpg'
import { FaBirthdayCake } from "react-icons/fa";
import { FaAsymmetrik } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
const Ourproperties = () => {
  return (
    <div className='mx-[480px] px-[12px]'>
        <div className="w-11/12 md:w-1/2 xl:w-1/3 m-auto text-center py-10">
        <h4 className="text-4xl font-bold">En Our Features</h4>
        <h1 className=" text-2xl text-gray-400 p-5">Lorem Ipsum is simply dummy text</h1>
        </div>
        <div className=" flex  px-20 py-20">
          <div className="image-container w-[50%] h-[525px] ">
            <img src={Img} className="  bg-cover bg-center rounded-md" alt="Properties" />
          </div>
          <div className="card-container pl-1 duration-300 flex-col g-8  h-[100%] w-[50%]  object-cover">
            <div className="card-1-container bg-green-500 hover:bg-white max-w-xl max-h-full mx-auto pl-1 rounded-md">
              <div className="card-wrapper flex justify-between bg-white shadow-2xl rounded-md px-4 py-6 items-center gap-x-3  mt-6">
              <div className="icon-cont flex gap-6">
              <FaBirthdayCake className="float-left w-[20%]  text-[60px] box-border text-green-500" />
              <span className="w-[75%] float-left pl-[25px] ">
                <h1 className="text-2xl font-medium capitalize">Choose a Category</h1>
                <p className="mt-[13px] mb-0 box-border  text-gray-500">Lorem ipsum dolor sit amet, qui assum oblique praesent te. Quo ei erant essent scaevola, est ut clita dolorem, ei est mazim fuisset scribentur</p>
              </span>
              </div>
            </div>
          </div>
          <div className="card-2-container bg-green-500 hover:bg-white max-w-xl max-h-full mx-auto pl-1 rounded-md">
              <div className="card-wrapper flex justify-between bg-white shadow-2xl rounded-md px-4 py-6 items-center gap-x-3  mt-6">
              <div className="icon-cont flex gap-6">
              <FaAsymmetrik className="float-left w-[20%] text-[60px] box-border text-green-500" />
              <span className="w-[75%] float-left pl-[25px]">
                <h1 className='text-2xl font-medium capitalize'>Find Location</h1>
                <p className='mt-[13px] mb-0 box-border m-0 p-0 text-gray-500'>Lorem ipsum dolor sit amet, qui assum oblique praesent te. Quo ei erant essent scaevola, est ut clita dolorem, ei est mazim fuisset scribentur</p>
              </span>
              </div>
            </div>
          </div>
          <div className="card-3-container bg-green-500 hover:bg-white max-w-xl max-h-full mx-auto pl-1 rounded-md">
              <div className="card-wrapper flex justify-between bg-white shadow-2xl rounded-md px-4 py-6 items-center gap-x-3  mt-6">
              <div className="icon-cont flex gap-6">
              <FaChartBar className="float-left w-[20%] text-[60px] box-border text-green-500" />
              <span className="w-[75%] float-left pl-[25px]">
                <h1 className='text-2xl font-medium capitalize'>Contact a Few Owners</h1>
                <p className='mt-[13px] mb-0 box-border m-0 p-0 text-gray-500'>Lorem ipsum dolor sit amet, qui assum oblique praesent te. Quo ei erant essent scaevola, est ut clita dolorem, ei est mazim fuisset scribentur</p>
              </span>
              </div>
            </div>
          </div>

          </div>

        </div>

    </div>
  )
}

export default Ourproperties