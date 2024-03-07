
import './PaymentWindowModal.css'
import checkImage from '../images/check.png'
import plusImage from '../images/plus.png'
import heartImage from '../images/heart.png'

const PaymentWindowModal = ({isOpen , setCloseModal}) => {
    if(isOpen){
        return (
            <div className='kct_deagulha2'>
                <div className="modal__background" onClick={setCloseModal}></div> 
                <div className='modal__container'>   
                    <ul className='modal__lista'>
                        <li className='modal__borda'>
                            <button className='modal__button'>
                                <p>Pago</p>
                                <img src={checkImage} alt="" />
                            </button>
                        </li>
                        <li className='modal__borda'>
                            <button className='modal__button'>
                                <p>Relatório</p>
                                <img src={plusImage} alt="" />
                            </button>
                        </li>
                    </ul>
                    <button onClick={setCloseModal}>
                        <img className='modal__close' src={heartImage} alt="" />
                    </button>
                </div>
            </div>
        )
    }
        return null;
}

export default PaymentWindowModal