import React from 'react';
import {Description, Header, TimerControl, Todolist} from "/src/componentns";

const App = () => {
  return (
    <div className='container'>
      <Header/>

      <TimerControl/>

      <Description/>

      <Todolist/>
    </div>
  );
};

export default App;
