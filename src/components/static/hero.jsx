import React from 'react'

function Hero() {
  return (
    <div>
        <div style={{background:"url('/images/Rectangle 5.png')"
            ,backgroundSize:"cover",overflow:"hidden"}} className='sm:h-[550px] h-[257px]'>
            <div className='sm:w-[490px] w-auto  md:ml-20 m-auto mt-20 h-[282px] '>

                <p className='text-[#fff] md:text-left text-center sm:text-[72px] text-[28px] font-DM '>
                    Watch something incredible.
                </p>

            </div>
        </div>
    </div> 
  )
}

export default Hero