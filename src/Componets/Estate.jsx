
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";


const Estate = () => {
    const [data,setData]=useState([])
    // const data=useLoaderData();
    useEffect(()=>{
fetch('./fake.json')
.then(res=>res.json())
.then(es=>setData(es))
    },[])
   
    
  
    return (
        <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 border-2 -m-4">
            {/* 1 */}
            {
                data.map(estate=><div key={estate.id} className="card  p-4 md:w-1/3  shadow-xl ">
                    <figure className="relative">
                   <span className="badge  bg-[#482c7b] text-white text-xl font-bold absolute left-1 px-5 py-4">{estate.price}</span>
                        <img src={estate.image_url} className="w-full h-96" alt="Shoes" />
                        
                        </figure>
                    <div className="card-body">
                      <h2 className="card-title text-[#561d88]">
                       {estate.estate_title}
                        <div className="badge bg-[#482c7b] text-white">{estate.Status}</div>
                      </h2>
                      <h2 className="">
                      <span className="bg-[#20785c] font-bold text-xl shadow-lg rounded-lg text-white  px-5 py-2"> {estate.segment_name}</span>
                                             </h2>
                     
                     <div className=" my-3 flex items-center font-bold text-xl text-slate-500 gap-5">
                     <FaLocationDot />{estate.location}
                     </div>
                     <h1 className="my-2 font-bold text-lg text-[#561d88]  ">Facilities</h1>
                     <div className="grid grid-cols-3 justify-evenly">
                                               {
                            estate.facilities.map((service,idx)=><div key={idx}>
                                <p className="font-semibold text-slate-500">{service}</p>
                            </div>)
                        }
                    <div>
                       
                    </div>
                    
                     </div>
                   

                     
                    </div>
                    <Link  to={`/estate/${estate.id}`} className="btn bg-[#561d88] text-white">Property Details</Link>
                  </div>)
            }
            
           
          </div>
       
        </div>
       
      </section>
    );
};

export default Estate;