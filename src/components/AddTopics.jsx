import React  from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineRight } from 'react-icons/ai';


const AddTopics = ({ topics, deleteTopic }) => {
  const generateColorClass = (topicIndex, keywordIndex) => {
    const colors = [
      { bg: 'bg-[#B4E4D8]', text: 'text-[#3B917A]', border: 'border-[#3B917A] rounded-md' },
      { bg: 'bg-[#FDE7E5]', text: 'text-[#D34A4A]', border: 'border-[#D34A4A] rounded-md' },
      { bg: 'bg-[#FFFBC2]', text: 'text-[#F5E400]', border: 'border-[#F5E400] rounded-md' },
    ];
    const colorIndex = (topicIndex + keywordIndex) % colors.length;
    return colors[colorIndex];
  };

  

  return (
    <div className="grid grid-cols-1 gap-1">
      {topics.map((topic, topicIndex) => {
        return (
          <div
            key={topicIndex}
            className={`bg-[#F5F5F5] p-4 relative ${generateColorClass(topicIndex, 0).border}`}
          >
            <h3 className="text-2xl font-bold">{topic.name}</h3>
            <div className="flex flex-wrap font-semibold">
              {topic.keywords.split(',').map((keyword, keywordIndex) => {
                const { bg, text, border } = generateColorClass(topicIndex, keywordIndex);

                return (
                  <span
                    key={keywordIndex}
                    className={`rounded-xl px-3 py-1 mr-2 mb-2 border mt-2 bottom-2 ${bg} ${text} ${border}`}
                  >
                    {keyword}
                  </span>
                );
              })}
            </div>
     <a href='http://127.0.0.1:5000' >    <button
              className="bg-[#FE5726] font-semibold text-white py-2 px-4 rounded absolute top-1/2 right-0 transform -translate-y-1/2 mr-2 flex"
             
            >
              Write <AiOutlineRight size={20} className="m-1" />
            </button></a>  
            <div
              className="absolute bottom-0 right-0 p-1 text-gray-600 cursor-pointer"
              onClick={() => deleteTopic(topicIndex)}
            >
              <RiDeleteBinLine size={20} className="text-[#F50000]" />
            </div>
          </div>
        );
      })}
     
    </div>
  );
};

export default AddTopics;
