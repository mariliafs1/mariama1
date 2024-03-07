
import './PaymentWindow.css'
import exclamationImage from '../images/exclamation.png'
import checkImage from '../images/check.png'
import { useState } from 'react'


const PaymentWindow = () => {
  const [paymentState, setPaymentState] = useState(checkImage);

  const handlePaymentState = () => {
    if(paymentState === checkImage){
      setPaymentState(exclamationImage);
    }else{
      setPaymentState(checkImage);
    }
  }

  return (
    <div className='paymentWindow__container'>
        <div className="date">
            <p>15 jan 2024</p>
        </div>
        <div className="payment__container">
          <div className="payment__money">
            <p>R$ 500</p>
          </div>
          <div className="payment__state">
            <img src={paymentState} alt="Imagem do estado de pagamento" />
          </div>
          <button onClick={handlePaymentState}></button>
        </div>
    </div>
  )
}

export default PaymentWindow