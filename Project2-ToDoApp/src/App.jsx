import { isValidElement, useState } from 'react'
import './App.css'

function App() {
  const [inputList, setList] = useState('');
  const [items, setItems] = useState([]);

  const inputChange = (e) => {
    setList(e.target.value);
    
  }
  
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
  }

  const handDelete = (id) => {
    // setItems((oldItems) => {
    //   return [...oldItems, inputList];
    // })
    setItems((oldItems) => {
      return oldItems.filter((ele, ind) => {
        return ind !== id;
      })
    })
  }

  return (
    <>
      <div className='main_div'>
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          {/* <br /> */}
          <input type="text" placeholder='Add a Task' onChange={inputChange}/>
          <button onClick={listOfItems}> + </button>
          <ol>
            {
              items.map( 
                (itemVal, index) => { 
                  return <li key={index}><i className="fa-solid fa-xmark" onClick={() => {handDelete(index)}}></i>{itemVal}</li> 
                } 
              )
            }
          </ol>
        </div>
      </div>

    </>
  )
}

export default App
