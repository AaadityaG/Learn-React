import './App.css'

function App() {
  const date = new Date();
  // let hr; 
  // let sec; 
  // let min; 
  // setTimeout(() => {
  //   hr = date.getHours();
  //   min = date.getMinutes();
  //   sec = date.getSeconds();
  // }, 1000);

  let min;
  if(date.getMinutes() < 10){
    min = "0"+date.getMinutes();
  }
  else{
    min = date.getMinutes();
  }

  let month;
  if(date.getMonth() < 10){
    month = "0"+date.getMonth();
  }
  else{
    month = date.getMonth();
  }
  return (
    <>
      <h1>Hii I am, Aditya Gaikwad</h1>
      <h2>Today / {date.getDate() + "-" + month + "-" + date.getFullYear()}</h2>
      <h2>Time / {date.getHours() + ":" + min + " am"}</h2>
    </>
  )
}

export default App;
