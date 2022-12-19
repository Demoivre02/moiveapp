import React, { useRef, useState } from "react";




function DramaSliders() {
  return (

      <>
    <div className="w-[250px] mt-[2em] md:ml-20 ml-8">
        <p className=" font-DM  sm:text-[24px] text-[18px]">Drama</p>
    </div>

    <div className="w-full sm::ml-24 ml-0 overflow-x-scroll">
       
      <div className="w-[1440px] m-auto">
       

        <div className="flex justify-evenly w-full  sm:py-8 py-2">

          <div className="sm:w-[220px] w-[250px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]" style={{background:"url('/images/farhome.jpeg')",backgroundSize:"cover"}} >
              <p className="text-white font-DM text-[24px] ">Far From Home </p>
          </div>

          
          <div className="sm:w-[250px] w-[220px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]"  style={{background:"url('/images/alchemy-of-souls-season-2.jpg')",backgroundSize:"cover"}}>
              <p className="text-white font-DM text-[24px]">Alchemy of souls </p>
          </div>

          <div className="sm:w-[250px] w-[220px] rounded-[12px] flex items-center text-center justify-center sm:h-[250px] h-[220px]" style={{background:"url('/images/himym.jpg')",backgroundSize:"cover"}} >
              <p className="text-white font-DM text-[24px]">How i met your mother</p>
          </div>

          <div className="sm:w-[250px] w-[220px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]" style={{background:"url('/images/housewives.jpeg')",backgroundSize:"cover"}}>
              <p className="text-white font-DM text-[24px]">Housewives</p>
          </div>
          <div className="sm:w-[250px] w-[220px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]" style={{background:"url('images/grey.jpg')",backgroundSize:"cover"}}>
              <p className="text-white font-DM text-[24px]">Grey's Anatomy</p>
          </div>
        
        </div>
        
      </div>
    </div>
    </>
  );
}


export default DramaSliders



