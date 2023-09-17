import { useState } from "react";
import './App.css'

function App() {
  const allDataOfCards = [
    {
      defaultShow: "What is JSX?",
      hoverText: "JSX is a shorthand for JavaScript XML"
    },
    {
      defaultShow: "Who made this project?",
      hoverText: "Reyan"
    },
    {
      defaultShow: "How to give components memory?",
      hoverText: "useState Hook"
    }, {
      defaultShow: "How to pass data from parent to child components?",
      hoverText: "through props"
    }, {
      defaultShow: "who build react js?",
      hoverText: "Jordan Walke"
    }, {
      defaultShow: "What language is React based on?",
      hoverText: "JSX"
    }, {
      defaultShow: "What's the name of the syntax we use to describe a UI in React?",
      hoverText: "JSX"
    }
  ];



  const [cardsOfData, setCardsOfData] = useState(allDataOfCards)

  function handleMouseOver(index) {
    const updatedData = [...cardsOfData];

    updatedData[index].defaultShow = allDataOfCards[index].hoverText

    setCardsOfData(updatedData);
  }

  function handleMouseLeave() {
    setCardsOfData(allDataOfCards);
  }

  return (
    <div className="bodyofcards">
      {cardsOfData.map((data, index) => (
        <div
          className="singlecard"
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}
        >
          {data.defaultShow}
        </div>
      ))}
    </div>
  );
}

export default App;