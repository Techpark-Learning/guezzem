import React, {useState, useEffect} from "react";
import Letter from "./board/letter.js";
import Timer from "./board/timer.js";
import Settings from "./board/settings.js";
import List from "./board/list.js";
import categoryList from "./board/categoryList.js";
import letterList from "./board/letterList.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

const Board = () =>{
  const [playList, setPlayList] = useState([]);
  const [clockCounter, setClockCounter] = useState(120);
  const [listLength, setListLength] = useState(6);
  const [timerRun, setTimerRun] = useState(false);
  const [currentLetter, setCurrentLetter] = useState('');

  useEffect(()=>{
    createList();
    getLetter();
  },[listLength]);

  const getLetter = ()=>{
    let index = Math.floor((Math.random() * letterList.length));

    setCurrentLetter(letterList[index]);
  }

  const listAdd = ()=>{
    setListLength(listLength + 1);
  }

  const listRemove = ()=>{
    setListLength(listLength - 1);
  }

  const restartGame = ()=>{
    createList();
    getLetter();
    setClockCounter(120);
    setTimerRun(false);
  }

  const createList = ()=>{
    let targetList = [];

    while (targetList.length < listLength) {
      let index = Math.floor(Math.random() * categoryList.length);

      if(!targetList.includes(categoryList[index])){
        targetList.push(categoryList[index]);
      }
    }

    setPlayList(targetList);
  }

  return(
    <div className="container">
      <div className="columns bbox">
        <div className="column one-third">
          <Letter
            currentLetter={currentLetter}
           />
          <Timer
            clockCounter={clockCounter}
            setClockCounter={setClockCounter}
            timerRun={timerRun}
            setTimerRun={setTimerRun}
           />
        </div>
        <div className="column">
          <Settings
            listLength={listLength}
            setListLength={setListLength}
            listAdd={listAdd}
            listRemove={listRemove}
           />
          <List
            playList={playList}
            timerRun={timerRun}
            />
        </div>
        <div className="column is-one-fifth restartControls">
          <button onClick={restartGame}>
            <FontAwesomeIcon icon={faSync} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Board;
