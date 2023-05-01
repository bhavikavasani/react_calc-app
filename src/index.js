import React from 'react';
import ReactDOM from 'react-dom/client';
// import add from './Calc';
// import Calc from './Calc';
import {add,sub,multiply,division} from './Calc';


function App()
{
  return(
      <>
      <button style={{border:"none",padding:"5px",backgroundColor:"cyan"}} type='button' onClick={add}>Addition</button><br /><br />
      <button style={{border:"none",padding:"5px",backgroundColor:"cyan"}} type='button' onClick={sub}>Substraction</button><br /><br />
      <button style={{border:"none",padding:"5px",backgroundColor:"cyan"}} type='button' onClick={multiply}>Multiplication</button><br /><br />
      <button style={{border:"none",padding:"5px",backgroundColor:"cyan"}} type='button' onClick={division}>Division</button>
      </>
  )
// add()  
//<Calc />
}
const root = ReactDOM.createRoot(document.getElementById('calc-demo-app'));
root.render(<App />
);

// const test = ReactDOM.createRoot(document.getElementById("calc-demo"));
// test.render(
//   <>
//   <button type='button' onClick={()=>{add()}}>Addition</button><br /><br />
//   <button type='button' onClick={()=>{sub()}}>Substraction</button>
//   </>
// )

