import { useState } from 'react';
import PaymentWindow from './PaymentWindow'
import PaymentWindowModal from './PaymentWindowModal'

const MonthPayments = () => {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className='kct_de_agulha'>
      <div className='paymentWindow__button' onClick={() => setOpenModal(true)}>
        <PaymentWindow />
      </div>
      <PaymentWindowModal isOpen={openModal} setCloseModal={() => setOpenModal(false)}/> 
    </div>
  )
}

export default MonthPayments