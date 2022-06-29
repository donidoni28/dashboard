import CardsContainer from './Component/CardsContainer'
import data from './data/data.json'
import InfoCard from './Component/InfoCard'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'

function App() {
  // console.log(data)
  let [mode, setMode] = useState('daily')
  
  
  // console.log(mode)
  let cards = data.map((card, i) => {
    return <InfoCard key={i} data={card} state={mode} />
  })

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ minHeight:`${window.innerHeight}px`, minWidth:`${window.innerWidth}px`}} >
      <CardsContainer state={mode} setState={setMode}>
        {cards}
      </CardsContainer>
    </div>
  );
}
// , backgroundColor:'hsl(226, 43%, 10%)'
export default App;
