import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>Hii</div> */}
      <div className='container'>

        <h1 className='text-center fw-bold text-danger'>Welcome to cards website</h1>

        <div class="container">
          <div class="row">

              <div class="col">
                <div class="card" >
                  <img src="https://picsum.photos/200/301" style={{height: 200}} class="card-img-top" alt="imgae"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>

              <div class="col">
                
                <div class="col">
                  <div class="card" >
                    <img src="https://picsum.photos/200/302" style={{height: 200}} class="card-img-top" alt="imgae"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>

              </div>

              <div class="col">
                
              <div class="col">
                <div class="card" >
                  <img src="https://picsum.photos/200/303" style={{height: 200}} class="card-img-top" alt="imgae"/>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>

              </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
