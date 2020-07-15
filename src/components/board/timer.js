import React from "react";
import useInterval from "./useInterval.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

const Timer = (props)=>{
  const {
    clockCounter,
    setClockCounter,
    timerRun,
    setTimerRun
  } = props;

  useInterval(()=>{
    if (clockCounter > 0) {
      setClockCounter(clockCounter - 1);
    }
  },  timerRun ? 1000 : null);

  const toggleTimer = ()=>{
    setTimerRun(!timerRun);
  }

  const renderStartButton = ()=>{
    if (timerRun)  {
      return(
        <button onClick={toggleTimer}>
          <FontAwesomeIcon icon={faPause} />
        </button>
      );
    } else {
      return(
        <button onClick={toggleTimer}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
      );
    }
  }

  return(
    <div className="columns timerControls">
      <div className="column is-half clockCounter">
        <h2>{clockCounter}</h2>
      </div>
      <div className="column is-half polka">
        {renderStartButton()}
      </div>
    </div>
  )
}

export default Timer;
