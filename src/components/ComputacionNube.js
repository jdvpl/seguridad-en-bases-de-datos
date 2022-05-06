import React from 'react'

const ComputacionNube = () => {
  return (
    <div id="computacionNube" className="mt-5 pt-3">
    <h2 className="text-center">COMPUTACION EN LA NUBE</h2>
      <h3>¿Qué es computación en la nube?</h3>
      <div className="text-center">
        <img src="/img/computacion_nube.png" alt="" className="img-fluid" />
      </div>
      <p className="text-justify">
        Es básicamente un tipo de computación basada en Internet que proporciona recursos y servicios a pedido y demanda. Cualquier servicio contratado a través de Internet se considera computación en la nube.
      </p>
      <p className="text-justify">
        En el modelo tradicional de implementación de Tecnologías de la Información (TI), las organizaciones destinan recursos materiales, humanos y tecnológicos, los cuales se agrupan en un área encargada de resolver problemas relacionados con la infraestructura TI y el desarrollo de aplicaciones para la organización.
      </p>
      <h3>Ventajas</h3>
      <div className="text-center">
        <img src="/img/ventajas_cloud_computing.png" alt="" className="img-fluid" />
      </div>
      <h3>Video</h3>
      <div className="ratio ratio-16x9">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r9K9aGnyyBU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <h3>Desventajas</h3>
      <div className="text-center">
        <img src="/img/desventajacc.jpeg" alt="" className="img-fluid w-100" />
      </div>
    </div>
  )
}

export default ComputacionNube