import React from 'react';
import s from './s.module.scss'
import {useTabStore} from "../../state/tabStore";

const Description = () => {

  const {activeTab} = useTabStore();

  const renderTabText = () => {
    switch (activeTab) {
      case 1:
        return 'Time to focus!';
      case 2 :
        return 'Time for a break!';
      case 3:
        return 'Time for a break!'
      default:
        return ''
    }
  }

  return (
    <div className={s.d}>
      {/*count pomodoro*/}
      <h3 className={s.d__count}>#1</h3>
      <p className={s.d__text}>{renderTabText()}</p>
    </div>
  );
};

export {Description};
