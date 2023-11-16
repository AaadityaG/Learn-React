import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App() {

  const [data, setData] = useState([]);


  const getData = async () => {
    const res = await fetch('https://data.covid19india.org/data.json');
    const Adata = await res.json();
    console.log(Adata.statewise);
    setData(Adata.statewise);
  }


  useEffect(()=>{
    getData();
  }, [])

  return (
    <>
      {/* <h1>INDIA COVID-19 Dashboard</h1> */}
      <div className='container-fluid mt-5'>
        <div className='main-heading'>
          <h1 className='mb-5 text-center'><span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
        </div>

        <div className='table-responsive'>
          <table className='table table-hover'>
            <thead className='text-uppercase'>
              <tr>
                <th className='text-start'>State</th>
                <th>Confirmed</th>
                <th>Recoverd</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                data.map((currElem, ind) => {
                  return (
                    <tr key={ind}>
                        <td className='text-start'>{currElem.state}</td>
                        <td >{currElem.confirmed}</td>
                        <td>{currElem.recovered}</td>
                        <td>{currElem.deaths}</td>
                        <td>{currElem.active}</td>
                        <td>{currElem.lastupdatedtime}</td>
                    </tr>
                  )
                })
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
