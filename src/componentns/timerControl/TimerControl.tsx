import React from 'react';
import s from './s.module.scss';
import {useTabStore} from "/src/state/tabStore";
import {Timer} from "./Timer";

const TimerControl = () => {
  const {activeTab, setActiveTab} = useTabStore();


  const onHandleTabClick = (tabNumber) => {
    if (activeTab !== tabNumber) {
      setActiveTab(tabNumber);
    }
  }


  return (
    <div className={s.t}>
      <div className={s.t__wrap}>
        <ul className={s.t__list}>
          <li>
            <button onClick={() => onHandleTabClick(1)}>Pomodoro</button>
          </li>
          <li>
            <button onClick={() => onHandleTabClick(2)}>Short Break</button>
          </li>
          <li>
            <button onClick={() => onHandleTabClick(3)}>Long Break</button>
          </li>
        </ul>


        {activeTab === 1 && (
          <Timer defaultMinutes={50}/>
        )}

        {activeTab === 2 && (
          <Timer defaultMinutes={10}/>
        )}

        {activeTab === 3 && (
          <Timer defaultMinutes={20}/>
        )}
      </div>
    </div>
  );
};

export {TimerControl};
