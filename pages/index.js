import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Timer, Time, TimerOptions } from 'timer-node';
import styles from '../styles/login.module.scss'
function index() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Timer, setTimer] = useState(30);

  useEffect(() => {
    if(Timer >0){
      setTimeout(() => {
        setTimer(Timer-1);
      }, 1000);
    }
  }, [show,Timer])
  return (
    <>
      <div className={`${styles.Login_Container}`}>
        <div className={`${styles.Login_Header}`}>
          <Image src={"/logo.png"} alt="new logo" width={150} height={100}></Image>
        </div>
        <main className='d-flex justify-content-center align-items-center'>

          <form className={`${styles.Login_Form}`}>
            <h3>Scan to proceed</h3>
            <figure className='d-flex border justify-content-center align-items-center'>
              <Image src={"/qr.png"} width={230} height={200} alt="qr"></Image>
              <figcaption ata-toggle="modal" data-target="#exampleModalLong" type="button" onClick={handleShow}>Show Code</figcaption>
            </figure>

            <div className='d-flex w-100 align-items-center'>
              <span className='border w-100 '></span>
              <p className='mx-2 mb-0'>Or</p>
              <span className='border w-100'></span>
            </div>

            <div class="my-3">
              <label for="exampleFormControlInput1" className="form-label mb-2">Enter Your Mobile Number </label>
              <input type="email" className="form-control mb-2" id="exampleFormControlInput1" placeholder="+91 XXXXX XXXXX" />
            </div>
            <button className=''>Send Otp</button>
          </form>

        </main>
      </div>

      {/* modals */}

      <Modal show={show} onHide={handleClose} centered>

        <Modal.Body className={`${styles.Login_Form} w-100 `}>
        {
          Timer==0 ? (
            <div className={`d-flex flex-column align-items-center justify-content-center ${styles.SuccessFull}`}>
                  <Image src="/logo.png" alt="logo" width={100} style={{objectFit:"contain"}} height={100}></Image>

                  <Image src="/success.gif" alt="sucess" width={150} height={150} style={{objectFit:"contain"}}></Image>
                <h3 className='w-100 text-center'>
                  <strong className='text-center '>
                    Successfully authenticated
                  </strong>
                </h3>
            </div>
          ):(

      
          <form >
            <h3 className='text-center mb-2'>Scan And Proceed</h3>
            <figure className='d-flex border justify-content-center align-items-center'>
              <Image style={{opacity:"1"}} src={"/qr.png"} width={250} height={250} alt="qr"></Image>
            </figure>
            <div className="d-flex flex-column align-items-center ">
              <strong>Checking Login Status</strong>
              <div className="d-flex my-2">
                <div className="spinner-grow  spinner-grow-sm text-secondary mx-1" role="status">
                  <span className="sr-only"></span>
                </div>
                <div className="spinner-grow spinner-grow-sm text-secondary mx-1" role="status">
                  <span className="sr-only"></span>
                </div>
                <div className="spinner-grow spinner-grow-sm text-secondary mx-1" role="status">
                  <span className="sr-only"></span>
                </div>
              </div>
              <strong>

              {
                Timer
              }
              </strong>
            </div>
          </form>

          )
        }
        </Modal.Body>

      </Modal>
    </>
  )
}

export default index
