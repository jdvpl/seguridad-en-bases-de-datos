import React from 'react'

const Actividadesdesarrollo = () => {
  return (
    <section id="Actividadesdesarrollo" className="mt-5 pt-3">
        <h3 className='text-center'>Actividades de desarrollo con tiempos proyectados</h3>
        <div className="text-center">
      <img src="/img/desarrollo.png" alt="" className="img-fluid" />
      </div>
      <p>Para el desarrollo de esta plataforma es considerable tener en cuenta por lo menos dos ingenieros dichas actividades se pueden dividir entre ellos.</p>
      <div className="table-responsive">
        <table className='table table-hover table-striped'>
          <thead>
            <tr>
              <th>Actividad</th>
              <th>Tiempo</th>
              <th>Observacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modelamiento de la base de datos</td>
              <td>2 dias</td>
              <td>El tiempo difiere de los Requerimientos para ello toca hacer un buen analisis de lo que se requiere, campos, relaciones, tablas, etc.</td>
            </tr>
            <tr>
              <td>Configuracion Planet Scale</td>
              <td>5 horas</td>
              <td>Se puede comenzar con el plan gratuito y manejar las diferentes ramas.</td>
            </tr>
            <tr>
              <td>Desarrollo del Backend </td>
              <td>20 dias</td>
              <td>Este depende de la habilidad del desarrollador, se deben aplicar buenas practicas para construir los diferentes endpoints, JWT y tokens para los diferentes verbos.</td>
            </tr>
            <tr>
              <td>Configuracion MercadoPago con el Backend</td>
              <td>5 dias</td>
              <td>En el Dashboard hay dos tipos de token uno para produccion y el otro para pruebas</td>
            </tr>             
            <tr>
              <td>Desarrollo del Mockup </td>
              <td>3 dias</td>
              <td>Este lo hace el diseñador WEB</td>
            </tr>
            <tr>
              <td>Desarrollo del Fronted </td>
              <td>20 dias</td>
              <td>Este tambien depende de la habilidad del desarrollador y si el diseño esta completo</td>
            </tr>
            
            <tr>
              <td>Test del backend Local y en produccion</td>
              <td>5 dias</td>
              <td>Este requerimiento podria tener algunos bugs</td>
            </tr>

            <tr>
              <td>Solucciones de los bugs</td>
              <td>5 dias</td>
              <td>Esto dependra de la dificultas y si hay errores</td>
            </tr>

            <tr>
              <td>Test del Fronted en local y produccion</td>
              <td>de 5 a 10 dias</td>
              <td>Esto tambien depende el backend </td>
            </tr>
            <tr>
              <td>Test de la plataforma completa en produccion</td>
              <td>3 dias</td>
              <td>Esto podria tardar menos ya que en las anteriores ya se han ejecutado de forma correcta</td>
            </tr>
            <tr>
              <td>Vulnerabilidades</td>
              <td>5 dias</td>
              <td>Deacuerdo a las buenas practidas de las anteriores actividades esto no deberia tomar mucho timepo</td>
            </tr>
          </tbody>
        </table>
      </div>

      
      

    </section>
  )
}

export default Actividadesdesarrollo