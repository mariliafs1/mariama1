
import './App.css'
import {  useState } from 'react'
import MonthPayments from './components/MonthPayments';

import plusImage from './images/plus.png'
import hamburguerImage from './images/hamburguer.png'



function App() {


  const [count, setCount] = useState(0);

  const [id, setId] = useState([]);

  console.log(id);

  const handlePlus = (e) => {
    e.preventDefault();
    setCount(count +1);
    const newId = [...id, count]
    setId(newId);
    
  }

  return (
    
    <div className='App'>
      <nav className='navbar__container'>
        <div className='navbar__button'><img src={hamburguerImage} alt="" /></div>
        <div className='navbar__button' onClick={handlePlus}><img src={plusImage} alt="" /></div>
      </nav>
      <div  className='newPaymentWindow'>
        {id.map((ids)=>(
          <div className='kct_de_agulha3' key={ids}>
            < MonthPayments />
          </div>
        ))}
       </div> 
     
      
    </div>
    )
}

export default App;
