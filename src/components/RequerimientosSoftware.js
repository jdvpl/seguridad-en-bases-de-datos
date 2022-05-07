import React from 'react'

const RequerimientosSoftware = () => {
  return (
    <div id='Requerimientos'>
        <h2 className='text-center'>Requerimientos físicos y de software</h2>
        <h4>Fisicos</h4>
        <p className="text-justify">
            Computador para administrar la aplicacion WEB
        </p>
        <p>Router de internet para conectarse al software</p>
        <p>Servidor de hosting, servidor de bases de datos, si se desea tener en casa o en otro Lugar.</p>


        <h4>Software</h4>
        <p>Manejador de base de datos <b>WorkBench</b></p>
        <p><b>Visual studio Code</b> para editar el codigo ya sea el del Backend o el Frontend</p>
        <p><b>Node</b> para manejar el instalador de paquetes npm para el desarrollo del backend y el frontend</p>
        <p><b>TypeScript</b> para el backend y manejar los comandos de TSC.</p>
        <p><b>Navegador web Chrome</b> para la visualizacion del desarrollo y administracion </p>
        <p><b>Excel</b> para la mejor visualizacion de los datos y filtros permitidos</p>
        <p><b>Docker y kubernetes</b> para menor costo de un servidor dedicado se usan los contendores para correrlo</p>
    </div>
  )
}

export default RequerimientosSoftware