import React from "react";

const List = (props)=>{
  const {playList, timerRun} = props;

  const renderClass = ()=>{
    if (timerRun) {
      return("show");
    }

    return "";
  }
  return(
    <div className="columns categoryList">
      <div className="column">
        <section className='swing'>
          <ul id='list'>
            {playList.map((entry, index)=>{
              return(<li className={renderClass()} key={index}><span>{index + 1}</span><span>{entry}</span></li>)
            })}
          </ul>
        </section>
      </div>
    </div>
   )
}

export default List;
