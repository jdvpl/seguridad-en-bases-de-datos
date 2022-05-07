import React from 'react'

const Costes = () => {
  return (
    <section id="Costes" className="mt-5 pt-3">
        <h3 className='text-center'>Costes</h3>

      <div className="table-responsive">
        <table className='table table-hover table-striped'>
          <thead>
            <tr>
              <th>Requerimiento</th>
              <th>Precio</th>
              <th>Observacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bases de datos</td>
              <td>29 dolares mensuales</td>
              <td>Hay un plan gratuito pero solo tiene 10gb por mes y 1000 conexiones de concuerrencias, tambien hay un plan en el que se paga por uso. <a target='_blank'  rel="noreferrer" href='https://planetscale.com/pricing'>Mas informacion</a></td>
            </tr>
            <tr>
              <td>Desarrollo de la plataforma</td>
              <td>3000 dolares</td>
              <td>Es el desarrollo del frontend, backend, diseños y conexiones a la base de datos</td>
            </tr>
            <tr>
              <td>Hosting </td>
              <td> Precio por usabilidad</td>
              <td>El coste depende de la usabilidad y en que servidor se hara el deployment, si es de poca usabilidad se podria desplegar en firebaseHosting y el precio oscila como maximo si supera el plan gratuito entre 60 a 100  dolares mensuales</td>
            </tr>
            <tr>
              <td>Dominio</td>
              <td>14 dolares</td>
              <td>Este toca renovarlo anualmente</td>
            </tr>
            <tr>
              <td>MercadoPago</td>
              <td>3.3% del monto mas 900 pesos</td>
              <td>Es la comision que pide MercadoPago por cada transaccion</td>
            </tr>
            <tr>
              <td>Internet mensual</td>
              <td>100.000 </td>
              <td>200 Megabytes eso depende de la ciudad</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      

    </section>
  )
}

export default Costes