import { useRef, useState } from 'react';
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import SignaturePad from 'react-signature-canvas'
import '../signature.css'


export const FirmaDigital = () => {
    
    const [imageURL, setImageURL] = useState(null)
    const sigCanvas = useRef({});
    const limpiar = () => sigCanvas.current.clear();
    const guardar = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))
  return (
    <>
        <h1>firma tourenvias </h1>
        
        <Popup modal trigger={<button>firma aqui</button>} closeOnDocumentClick={false}>
            {close => (<>
            <SignaturePad 
            ref={sigCanvas}
            canvasProps={{
                className: "signatureCanvas"
            }}></SignaturePad>
            <button onClick={close}>Cerrar</button>
            <button onClick={limpiar}>limpiar</button>
            <button onClick={guardar}>guardar</button>
            </>)}
        </Popup>
        
        
        
        <br></br>
        <br></br>
        {imageURL ? (<img
        src={imageURL}
        alt="firma"
        style={{
            display:"block",
            margin:"0 auto",
            border:"1px solid black",
            width:"150px"
        }}
        ></img>) : null}
    </>
  )
}
