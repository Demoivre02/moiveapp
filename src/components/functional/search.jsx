import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [inputvalue, setInputValue] = useState("");
  const [data, setData] = useState({});

  function handleInput(e) {
    const myValue = e.target.value;
    setInputValue(myValue);
  }

  // querry
  useEffect(()=>{
    let Apikey = '19b22640';

    axios.get(`http://www.omdbapi.com/?apikey=${Apikey}&t=${inputvalue}`)
      .then(response => {
        setData(response.data)
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  },[inputvalue])


  return (
    <div className='w-[89%] my-16 mx-auto'>
        <div className='w-[77px] h-[31px]'>
          <p className='font-DM sm:text-[24px] text-[16px] text-[#000]'>Search</p>
        </div>

      <div className='w-[95%] mt-2'>
        <input
          className='sm:h-[54px] h-[34px] outline-none w-full border border-[#000]'
          onChange={handleInput}
          defaultValue={inputvalue}
          type={"text"}
        />
      </div>

      {/* response */}

      <div>
        <p className='my-2 sm:text-[30px] text-base text-[#000]'> {data.Title}</p>
        <p className='my-2 font-medium  sm:text-base text-sm'>{data.Year}</p>
        <p className='my-2 md:text-base text-sm font-medium'>{data.Actors}</p>
        <p className='my-2 md:w-[60%] w-full font-medium sm:text-sm text-[12px]'>{data.Plot}</p>
        <p className='my-2 font-medium sm:text-sm text-[12px]'>{data.Genre}</p>
        <p className='my-2 font-medium  sm:text-sm text-[12px]'>{data.Language}</p>
        <p className='my-2 font-medium  sm:text-sm text-[12px]'>{data.Type}</p>
        <p></p>
      </div>


    </div>
  );
}

export default Search;
