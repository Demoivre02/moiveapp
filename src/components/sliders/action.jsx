import React, { useRef, useState } from "react";




function ActionSliders() {
  return (

      <>
    <div className="w-[250px] md:ml-20 ml-8">
        <p className=" font-DM  sm:text-[24px] text-[18px]">Action</p>
    </div>

    <div className="w-full sm::ml-24 ml-0 overflow-x-scroll">
       
      <div className="w-[1440px] m-auto">
       

        <div className="flex justify-evenly w-full  sm:py-8 py-2">

          <div className="sm:w-[220px] w-[250px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]" style={{background:"url('/images/Black-Adam-Poster-Featured-01.jpg')",backgroundSize:"cover"}} >
              <p className="text-white font-DM text-[24px] ">Black Adam</p>
          </div>

          
          <div className="sm:w-[250px] w-[220px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]"  style={{background:"url('/images/blackpanther.jpg')",backgroundSize:"cover"}}>
              <p className="text-white font-DM text-[24px]">Black Panther2</p>
          </div>

          <div className="sm:w-[250px] w-[220px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]" style={{background:"url('/images/avengers.jpg')",backgroundSize:"cover"}} >
              <p className="text-white font-DM text-[24px]">Avengers</p>
          </div>

          <div className="sm:w-[250px] w-[220px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]" style={{background:"url('/images/Extraction-2020-Movie-Poster.jpg')",backgroundSize:"cover"}}>
              <p className="text-white font-DM text-[24px]">Extraction</p>
          </div>
          <div className="sm:w-[250px] w-[220px] rounded-[12px] flex items-center justify-center sm:h-[250px] h-[220px]" style={{background:"url('images/grey man.jpg')",backgroundSize:"cover"}}>
              <p className="text-white font-DM text-[24px]">Grey Man</p>
          </div>
        
        </div>
        
      </div>
    </div>
    </>
  );
}


export default ActionSliders



