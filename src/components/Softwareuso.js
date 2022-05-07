import React from 'react'

const Softwareuso = () => {
  return (
    <div id='softwareuso'>
        <h3 className="text-center">Si se usaran herramientas de software, argumentar su uso</h3>

        <div className="text-center">
            <img src="/img/uso.png" alt="" className="img-fluid" />
        </div>

        <p><b>WorkBench</b> Manejador de base de datos </p>
        <p><b>Visual studio Code</b> para editar el codigo ya sea el del Backend o el Frontend</p>
        <p><b>Node</b> para manejar el instalador de paquetes npm para el desarrollo del backend y el frontend</p>
        <p><b>TypeScript</b> para el backend y manejar los comandos de TSC.</p>
        <p><b>Navegador web Chrome</b> para la visualizacion del desarrollo y administracion </p>
        <p><b>Excel</b> para la mejor visualizacion de los datos y filtros permitidos</p>
        <p><b>Docker y kubernetes</b> para menor costo de un servidor dedicado se usan los contendores para correrlo</p>
    </div>
  )
}

export default Softwareuso