import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'

function App() {

  const [themeMode, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme("light")
  }

  const darkTheme = () => {
    setTheme("dark")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])


  return (
    <>
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn></ThemeBtn>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card></Card>
                    </div>
                </div>
      </div>

      </ThemeProvider>
    </>
  )
}

export default App
