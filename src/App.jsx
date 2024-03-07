import PaymentWindow from './components/PaymentWindow'
import PaymentWindowModal from './components/PaymentWindowModal'
import './App.css'
import { useState } from 'react'




function App() {

  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div>
      <div className='paymentWindow__button' onClick={() => setOpenModal(true)}>
        <PaymentWindow />
      </div>
      <PaymentWindowModal isOpen={openModal} setCloseModal={() => setOpenModal(false)} />
    </div>
    )
}

export default App;
