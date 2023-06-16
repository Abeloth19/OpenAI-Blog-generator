import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const Main = ({ addTopic }) => {
  return (
    <div className="flex  gap-[100px] mb-4 pl-[50px]">
      <h2>ALL</h2>
      <h2>CUSTOM</h2>
      <h2>ICP</h2>
      <div className=' text-[#FE5726]  border-b-2 border-[#FE5726]'>
        <h2 className='mt-auto'>Mission</h2>
        </div>
      
      <h2>Product</h2>
      <button className="bg-[#FE5726] text-white font-semibold py-2 px-4 rounded flex ml-auto" onClick={addTopic}>
        ADD TOPIC <AiOutlineRight size={20} className="m-1" />
      </button>
    </div>
  );
};

export default Main;
