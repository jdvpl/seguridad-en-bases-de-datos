import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Message from './Message';
import { VARIABLES } from '../Variables';
const Contact = () => {

    const [error, seterror] = useState(false);
    const [mensajeError, setmensajeError] = useState('');
    const [color, setcolor] = useState('danger');
    const [messages, setmessages] = useState([]);



    const onHandleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const message = e.target.elements.message.value;

        if(name.trim() === '' || message.trim() === ''){
            seterror(true);
            setmensajeError("Por favor llenar todos los campos.")
            return;
        }else{
            seterror(true);
            setmensajeError('Enviando Mensaje...');
            setcolor('warning')
            sendMessage(name, message);
        }
        
    }

    const sendMessage=async(name, message) => {
        const data={name, message};
        const url=VARIABLES.server;
        try {
            const response=await axios.post(url, data);
            if(response.status==200){
                seterror(true);
                setmensajeError('Mensaje enviado.');
                setcolor('success')
            }
            seterror(false);
            
        } catch (error) {
            seterror(true);
                setmensajeError(error.response.data.msg);
                setcolor('danger')
        }
    }

    const getData = async () =>{
        const url=VARIABLES.server;
        try {
          const response=await axios.get(url);
          setmessages(response.data)
        } catch (error) {
        }
      }

      useEffect(() => {
        getData();
      }, [messages]);
    
    let total="";
    let mensajes_data=[];
    if(messages !=null) {
        total=messages.total;
        let datos=messages.mensajes;
        if(datos !=null) {
            datos.map((val)=>mensajes_data.push(val))
        }
    }

    return (
        <div className="m-auto " id="contact">
        <div className="text-center mt-2">
            <h2 className="section-heading text-uppercase text-white pt-3">Comentarios</h2>
        </div>

        <form onSubmit={onHandleSubmit}>
            <div className="m-auto text-center container">
                <div className="col-md-12">
                    <div className="form-group">
                        <input className="form-control" id="name" type="text" placeholder="Nombre *" name="name" />
                        <div className="invalid-feedback" >Nombre.</div>
                    </div>
                </div>
                <div className="col-md-12 mt-3">
                    <div className="form-group form-group-textarea mb-md-0">
                        <textarea className="form-control" id="message" placeholder="Mensaje *" name="message"></textarea>
                        <div className="invalid-feedback">Observación.</div>
                    </div>
                </div>

                {error ? (
                <Message mensaje={mensajeError} color={color}/>
                ): null}

                <div className="d-grid mt-2 ">
                    <input className="btn btn-outline-light btn-block btn-xl text-uppercase" 
                        type="submit" value="Enviar mensaje"/>
                </div>
            </div>
        </form>

        <div className="mt-4 py-1">

                <h4 className="text-white text-center">Mensajes {total}</h4>
                <div className="container">
                {
                    mensajes_data.map((m)=>(
                        <div key={m.uid}>
                            <h5 className="text-white">{m.name}</h5>
                            <p className="text-muted ms-3">{m.message}</p>
                        </div>
                    ))
                }
                </div>
        </div>
        </div>
    )
}

export default Contact