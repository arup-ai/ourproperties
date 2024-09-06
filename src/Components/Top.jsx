import Img from '../assets/property thumb.jpg'
import Img1 from '../assets/property thumb 2.jpg'
import Img2 from '../assets/property thumb 3.jpg'
import Img3 from '../assets/property thumb 4.jpg'
const Top = () => {
  return (
    <div>
         <div className="w-5/6 m-auto text-center py-10">
        <h4 className="text-4xl font-bold">Top Properties</h4>
        <h1 className=" text-xl text-gray-400 mt-[25px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took.</h1>
        </div>
        <div className="card container m-auto  flex items-center justify-between gap-8 ">
          <div className="card container">
            <img src={Img} className=" rounded-xl mt-[23px] h-[400px] w-[100%] object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform backdrop-blur-md" alt="" />
            <div className="">

            </div>

           </div>
           <div className="card container ">
            <img src={Img1} className=" rounded-xl mt-[23px] h-[400px] w-[100%]" alt="" />
           </div>
           <div className="card container ">
            <img src={Img2} className=" rounded-xl mt-[23px] h-[400px] w-[100%]" alt="" />
           </div>
           <div className="card container ">
            <img src={Img3} className=" rounded-xl mt-[23px] h-[400px] w-[100%]" alt="" />
           </div>
           
        </div>
    </div>
  )
}

export default Top