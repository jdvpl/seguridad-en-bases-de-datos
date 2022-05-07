import React from 'react'

import styled from 'styled-components'


const Presentado = styled.h3`
    margin-top:15rem;
`;
const Presentadopor = () => {
  return (
    <div id='Presentadopor' className='mt-5'>
        <h3 className="text-center mt-5">
            Analizar la implementación de un sistema de información
        </h3>

        <Presentado className='text-center'>
            <h5> Presentado por: </h5> 
            Liborio Castañeda <br />
            Juan Daniel Suarez
        </Presentado>


        <Presentado className='text-center'>
            Fundación Universitaria del Área Andina. <br />
            Facultad de ciencias básicas. <br />
            Seguridad en bases de datos <br />
            Mayo 2022
        </Presentado>
        
    </div>
  )
}

export default Presentadopor