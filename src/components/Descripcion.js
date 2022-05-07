import React from 'react'

const Descripcion = () => {
  return (
    <div id="Descripcion" className="mt-5 pt-3">
      <h2 className="text-center">Descripción de la necesidad</h2>
        <div className="text-center">
          <img src="/img/necesidad.png" alt="" className="img-fluid" />
        </div>

      <i className="text-justify fst-italic">
        Carlos tiene un negocio de alquiler de menaje para eventos (sillas, manteles, decoración, carpas, cristalería y mobiliario). Él lleva el control en un cuaderno de anotaciones en el que tiene los datos de los clientes, qué se le alquilo, por cuánto tiempo, el inventario, costos, ingresos, etc. A futuro tiene proyectada la apertura de sucursales en otras ciudades.
      </i>
      <p></p>
      <i className="text-justify mt-2">
        Él quiere tener una plataforma web en la que pueda gestionar todo su negocio y contabilidad. Por ejemplo, que los clientes puedan realizar las solicitudes de alquiler y realizar los pagos en línea, llevar el control de inventarios, etc.; para que cuando tenga las demás sucursales las pueda gestionar desde un solo lugar.
      </i>

    </div>
  )
}

export default Descripcion