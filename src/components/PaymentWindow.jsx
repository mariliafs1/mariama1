
import './PaymentWindow.css'
import exclamationImage from '../images/exclamation.png'
import checkImage from '../images/check.png'
import { useState } from 'react'


const PaymentWindow = ( {date, payment, paymentState}) => {
  
  return (
    <div className='paymentWindow__container'>
        <div className="date">
            <p>{date}</p>
        </div>
        <div className="payment__container">
          <div className="payment__money">
            <p>R$ {payment}</p>
          </div>
          <div className="payment__state" >
            {paymentState === 'pago' &&  <img src={checkImage} alt="Imagem do estado de pagamento" />}
            {paymentState === 'atraso' &&  <img src={exclamationImage} alt="Imagem do estado de pagamento" />} 
          </div>
        </div>
    </div>
  )
}

export default PaymentWindow