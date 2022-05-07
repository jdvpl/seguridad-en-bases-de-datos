import React from 'react'

const Cronogramas = () => {
  return (
    <section id="Cronogramas" className="mt-5 pt-3">
        <h3 className='text-center'>Cronogramas</h3>
        <div className="text-center">
      <img src="/img/sprint.jpg" alt="" className="img-fluid" />
      </div>
      <p>Utilizaremos la metodologia agil SCRUM para cada seccion sera un sprint</p>
      <div className="table-responsive">
        <table className='table table-hover table-striped'>
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Duracion</th>
              <th>Desde</th>
              <th>Hasta</th>
              <th>Encargado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modelamiento de la base de datos</td>
              <td>2 dias</td>
              <td>Lunes 02/05/2022 </td>
              <td>Miercoles 04/05/2022 </td>
              <td>Ingeniero 1  y 2</td>
            </tr>
            <tr>
              <td>Configuracion Planet Scale</td>
              <td>5 horas</td>
              <td>Lunes 02/05/2022</td>
              <td>Miercoles 04/05/2022 </td>
              <td>Ingeniero 1 y 2</td>
            </tr>
            <tr>
              <td>Desarrollo del Backend </td>
              <td>20 dias</td>
              <td>Jueves 05/05/2022</td>
              <td>Jueves 25/05/2022 </td>
              <td>Ingeniero 1</td>
            </tr>
            <tr>
              <td>Configuracion MercadoPago con el Backend</td>
              <td>5 dias</td>
              <td>Jueves 26/05/2022</td>
              <td>Jueves 31/05/2022 </td>
              <td>Ingeniero 1</td>
            </tr>             
            <tr>
              <td>Desarrollo del Mockup </td>
              <td>3 dias</td>
              <td>Lunes 05/05/2022</td>
              <td>Miercoles 04/05/2022 </td>
              <td>Diseñador</td>
            </tr>
            <tr>
              <td>Desarrollo del Fronted </td>
              <td>20 dias</td>
              <td>Jueves 05/05/2022</td>
              <td>Jueves 25/05/2022 </td>
              <td>Ingeniero 2</td>
            </tr>
            
            <tr>
              <td>Test del backend Local y en produccion</td>
              <td>5 dias</td>
              <td>Miercoles 01/06/2022</td>
              <td>Martes 07/06/2022 </td>
              <td>Ingeniero 1</td>
            </tr>

            <tr>
              <td>Solucciones de los bugs</td>
              <td>5 dias</td>
              <td>Miercoles 08/06/2022</td>
              <td>Martes 14/06/2022 </td>
              <td>Ingeniero 1</td>
            </tr>

            <tr>
              <td>Test del Fronted en local y produccion</td>
              <td>de 5 a 10 dias</td>
              <td>Miercoles 01/06/2022</td>
              <td>Martes 14/06/2022 </td>
              <td>Ingeniero 2</td>
            </tr>
            <tr>
              <td>Test de la plataforma completa en produccion</td>
              <td>3 dias</td>
              <td>Miercoles 15/06/2022</td>
              <td>Viernes 17/06/2022 </td>
              <td>Ingeniero 1 y 2</td>
            </tr>
            <tr>
              <td>Vulnerabilidades</td>
              <td>5 dias</td>
              <td>Lunes 20/06/2022</td>
              <td>Viernes 24/06/2022 </td>
              <td>Ingeniero 1 y 2</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      

    </section>
  )
}

export default Cronogramas