import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(10);


  const onClickPlus = () => {
    setCount(count +1);
  }

  const onClickMinus = () => {
    setCount(count -1);
  }
  
  const onClickReset = () => {
    setCount(1000);
  }

  return (
    <div className="App">
      <div>
        <h2>Лічильник:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={onClickMinus}>- Мінус</button>
        <button className="plus" onClick={onClickPlus}>Плюс +</button>
        <button className="reset" onClick={onClickReset}>RESET</button>
      </div>
    </div>
  );
}

export default App;