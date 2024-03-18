
import './App.css'
import {  useState, useRef, useEffect } from 'react'


import plusImage from './images/plus.png'
import hamburguerImage from './images/hamburguer.png'
import {motion} from 'framer-motion'

import PaymentWindow from './components/PaymentWindow'
import PaymentWindowModal from './components/PaymentWindowModal'

 import dataJSON from './assets/payment.json'



function App() {

  const [count, setCount] = useState(0);

  // const [id, setId] = useState([]);

  // const handlePlus = (e) => {
  //   e.preventDefault();
  //   setCount(count +1);
  //   const newId = [...id, count]
  //   setId(newId);
    
  // }


  

  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(()=>{
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [count])

  
  const [openModal, setOpenModal] = useState(false);
 const [paymentState, setPaymentState] = useState('');
 const [paymentData, setPaymentData] = useState();
  


  return (
    
    <div className='App'>
      <nav className='navbar__container'>
        <div className='navbar__button'><img src={hamburguerImage} alt="" /></div>
        <div className='navbar__button' ><img src={plusImage} alt="" /></div>
      </nav>
        <motion.div ref={carousel} className="carousel__container" whileTap={{cursor: "grabbing"}}>
          <motion.div  className='carousel__newPaymentWindow' 
            drag='x'
            dragConstraints={{right:0, left: -width-200}}  
          >
            {dataJSON.map((data)=>(
              <motion.div className='carousel__paymentWindow' key={data.id} onClick={() => setOpenModal(true)}>
                < PaymentWindow date={data.date} payment = {data.payment} paymentState = {data.paymentState} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div> 
        <PaymentWindowModal isOpen={openModal} 
          setCloseModal={() => setOpenModal(false)} 
          setPaymentPago={() => setPaymentState('pago')}
          setPaymentNaoPago={() => setPaymentState('')}
   
        /> 
      
    </div>
    )
}

export default App;
