import React from 'react'
import { Form } from 'react-bootstrap'
import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'

export default function Add(props) {
    const [show, setShow] = useState(false);
    
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
       
    
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          add
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton >
            <Modal.Title style={{color:"red",marginLeft:"100px" }}>add your movie</Modal.Title>
          </Modal.Header>
    <Modal.Body>
        <div>
            <input onChange={props.getName}></input> 
        <span> movie name</span> 
        </div>
        <div>
            <input onChange={props.getImg}></input> 
        <span> img</span> 
        </div>
        <div>
            <input onChange={props.getDescription}></input> 
        <span> description</span> 
        </div>
        <div>
            <input onChange={props.getRate}></input> 
        <span> rate satr </span> 
        </div>
        
        
        
         </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  onClick={props.change} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
