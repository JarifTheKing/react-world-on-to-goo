
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => {return res.json()})


function App() {

  return (
    <>
      <Suspense fallback={<h1>আমার মাথা নষ্ট! মনে বড় কষ্ট!.....</h1>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
