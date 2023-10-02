import { useEffect, useState } from 'react';
import './App.css'
import { AdviceContainer } from './components/Advice'
import { Footer } from './components/Footer'
import { IAdvice } from './inteface/advice.interface';
import axios from 'axios';

function App() {

  const [advice, setAdvice] = useState< IAdvice | null>(null);
  const [error, setError] = useState(null);

  const getAdviceData = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const transformedData: IAdvice = {
          id: response.data.slip.id,
          text: response.data.slip.advice,
        }

        setAdvice(transformedData)
      })
      .catch((error) => {
        setError(error)
      })
  }

  useEffect(() => {
    getAdviceData()
  }, [])

  return (
    <>
      {
        advice
          ? <AdviceContainer advice={advice} updateAdvice={getAdviceData} />
          : error
            ? <p>Something went wrong</p>
            : <p>Loading...</p>
      }
      <Footer />
    </>
  )
}

export default App
