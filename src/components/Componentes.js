import React from 'react'

const Componentes = () => {
  return (
    <div id="Componentes" className="mt-5 pt-3">
    <h2 className="text-center">Componentes</h2>
      <div className="text-center">
        <img src="/img/components.png" alt="" className="img-fluid" />
      </div>
      <p className="text-justify">
        Son herramientas que permiten la suplementación para solventar las dichas necesidades, lo que lo vincula a la reducción del riesgo ya que es fácil para el proceso, los cuales son:
      </p>

      <ol>
        <li>Para el protocolo de navegación segura del usuario, necesitamos el protocolo requerido para solicitar la aprobación del sitio a través de HTTPS, por la cual es necesario un certificado SSL, normalmente se compra para la seguridad del sitio WEB. </li>
        <li>Para los pagos seguros se va a usar es <b>MercadoPago</b> en este caso para Colombia ya que tiene buena seguridad y el pagoo se efectua de inmediato, existen otros servicio con Payu o internacional es <b>Stripe</b> </li>
        <li>
          Frontend es la parte visual con la cual el usuario interactua en la plataforma en este caso se hara en <b>React</b> el cual utiliza el patron Modelo Vista Presenter que nos da una buena seguridad al compilar el codigo escrito.
        </li>
        <li>Backend es el software que interactua con el servidor y para utilizar la base de datos, en este caso se hara en <b>NodeJs</b>  con TypeScript</li>
        <li>Bases de datos en MYSQl, en un servidor de PlanetScale o AWS la cual nos data buena seguridad y se hacen backups diarios para mayor seguridad</li>
        <li>ORM Sequelize es un paquete de node el cual nos permite mapear la base de datos de forma segura </li>
      </ol>

      <h4 className="text-center">Modulos de la aplicacion WEB</h4>

      <ol>
        <li>Registro de usuario nuevos</li>
        <li>Seccion de pagos Online</li>
        <li>Carrito o inventio de las compras</li>
        <li>Seccion para reposicion de los elementos</li>
        <li>Elementos prestados, tiempos, disponibilidad</li>
        <li>Usuarios registrados en la plataforma, tiempo, estado</li>
        <li>Seccion de ingresos u transacciones</li>
        <li>Listado de la contabilidad general</li>
      </ol>

    </div>
  )
}

export default Componentes