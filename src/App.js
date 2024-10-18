import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddTopics from './components/AddTopics';
import Main from './components/Main';




const App = () => {
  const [topics, setTopics] = useState([{
    name: 'The Importance of Establishing a Strong Online Presence for Small Business',
    keywords: 'online presence, small business, digital marketing, branding'
  },
  {
    name: 'How Fast Turnaround Times in Logo and Website Design Benifit Your Business',
    keywords: 'fast turnaround, logo design, website design, branding'
  },]);
  const [showModal, setShowModal] = useState(false);
  const [topicName, setTopicName] = useState('');
  const [topicKeywords, setTopicKeywords] = useState('');
  const [undoHistory, setUndoHistory] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'z') {
        undo();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const addTopic = () => {
    setShowModal(true);
  };

  const saveTopic = () => {
    if (topicName && topicKeywords) {
      const newTopic = { name: topicName, keywords: topicKeywords };
      setTopics([...topics, newTopic]);
      setShowModal(false);
      setTopicName('');
      setTopicKeywords('');
      addToUndoHistory(topics);
    }
  };

  const deleteTopic = (index) => {
    const updatedTopics = [...topics];
    updatedTopics.splice(index, 1);
    setTopics(updatedTopics);
    addToUndoHistory(topics);
  };

  

  const addToUndoHistory = (newState) => {
    setUndoHistory([...undoHistory, newState]);
  };

  const undo = () => {
    if (undoHistory.length > 0) {
      const previousState = undoHistory[undoHistory.length - 1];
      setTopics(previousState);
      setUndoHistory(undoHistory.slice(0, undoHistory.length - 1));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <Main addTopic={addTopic} />
      
      {/* Recommended Topics */}
      <div className="bg-[#E9EAEC] p-4 mb-1">
        <h3 className="text-black text-xl font-bold">Recommended Topic</h3>
      </div>

      <AddTopics
        topics={topics}
        showModal={showModal}
        deleteTopic={deleteTopic}
        
       

      />

      {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white w-[1240px] h-[500px] rounded-lg p-8 border-2 border-black">
          <h3 className="mb-4 text-2xl font-extrabold">Add Topic</h3>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="topicName">
              Name:
            </label>
            <input
              id="topicName"
              type="text"
              placeholder="Topic Name"
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              className="border border-gray-400 p-2 rounded-md w-full h-[100px]"
            />
          </div>
          <div>
            <label className="block mb-2 font-bold" htmlFor="topicKeywords">
              Keywords:
            </label>
            <input
              id="topicKeywords"
              type="text"
              placeholder="Keyword1, Keyword2, Keyword3"
              value={topicKeywords}
              onChange={(e) => setTopicKeywords(e.target.value)}
              className="border border-gray-400 p-2 rounded-md w-full h-[100px]"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-[#F43A01] text-white py-2 px-4 rounded"
              onClick={saveTopic}
            >
              Save
            </button>
            <button
              className="ml-2 bg-[#F50000] text-white py-2 px-4 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default App;
