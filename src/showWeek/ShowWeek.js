
// importing required libraries
import React, { useEffect, useState } from "react";
import Class from "./ShowWeek.module.css"
import store from "../store";
import { changingStatus } from "../actions/actions";


const ShowWeek = (props) => {
  
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);

  
  const doneHandler=()=> {
    if (done) {
      setDone(false);
      store.dispatch(changingStatus(props.habit, props.index, ""));
    } else {
      setNotDone(false);
      store.dispatch(changingStatus(props.habit, props.index, "done"));
    }
  }
  
  const notDoneHandler=()=> {
    if (notDone) {
      setNotDone(false);
      store.dispatch(changingStatus(props.habit, props.index, ""));
    } else {
      setNotDone(true);
      setDone(false);
      store.dispatch(changingStatus(props.habit, props.index, "not-done"));
    }
  }
  const date = new Date();
  const weekDate = new Date(props.dateString);
  useEffect(() => {
    if (props.status === "done") {
      setDone(true);
      setNotDone(false);
    } else if (props.status === "not-done") {
      setNotDone(true);
      setDone(false);
    } else {
      setDone(false);
      setNotDone(false);
    }
  }, []);
  return (
    <div
      className={
        weekDate.toDateString() === date.toDateString()
          ? Class.today
          : Class.container
      }>
      <p>{props.day}</p>
      <p>{props.date}</p>
      <div >
        {/* <span onClick={doneHandler()}>
          name={done ? ( <i class="fa-regular fa-circle-check"></i>
          ): ( <i class="fa-solid fa-circle-check"></i>)}
        </span> */}

        <i class="fa-regular fa-circle-check"
        onClick={doneHandler}
        name={done ? "fa-regular fa-circle-check" : "fa-solid fa-circle-check"}
        ></i>

{/* <spna onClick={notDoneHandler}>
  name={notDone ? (<i class="fa-regular fa-circle-xmark"></i> 
  ) : ( <i class="fa-solid fa-circle-xmark"></i>)}
</spna> */}

        <i class="fa-regular fa-circle-xmark"
         onClick={notDoneHandler}
         name={notDone ? "close-circle" : "close-circle-outline"}
        ></i>
      </div>
    </div>
  );
};

// exporing up a week component by default
export default ShowWeek;