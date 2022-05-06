import React from 'react'

const ArquitecturCobit = () => {
  return (
    <div id="arquitecturCobit" className="mt-5 pt-3">
      <h3>ARQUITECTURA DE COBIT</h3>
        <div className="text-center">
          <img src="/img/arquitectura_cobit.jpeg" alt="" className="img-fluid" />
        </div>
        <p className="text-justify">
          A LA FECHA, COBIT TIENE CINCO VERSIONES MAYORES PUBLICADAS:
        </p>
        <ul>
          <li className="text-justify">
            En 1996, la primera edición de COBIT fue publicada. Esta incluía la colección y análisis de fuentes internacionales reconocidas y fue realizada por equipos en Europa, Estados Unidos y Australia.
          </li>
          <li className="text-justify">
            En 1998, fue publicada la segunda edición; su cambio principal fue la adición de las guías de gestión. Para el año 2000, la tercera edición fue publicada y en el 2003, la versión en línea ya se encontraba disponible en el sitio de ISACA.
          </li>
          <li className="text-justify">
            Fue posterior al 2003 que el marco de referencia de COBIT fue revisado y mejorado para soportar el incremento del control gerencial, introducir el manejo del desempeño y mayor desarrollo del Gobierno de TI.
          </li>
          <li className="text-justify">
            En diciembre de 2005, la cuarta edición fue publicada y en mayo de 2007, se liberó la versión 4.1.
          </li>
          <li className="text-justify">
            La versión número 5 de COBIT fue liberada en el año 2012. En esta edición se consolida e integran los marcos de referencia de COBIT 4.1, Val IT 2.0 y Risk IT. Este nuevo marco de referencia viene integrado principalmente del Modelo de Negocios para la Seguridad de la Información (BMIS, Business Model for Information Security) y el Marco de Referencia para el Aseguramiento de la Tecnología de la Información (ITAF, Information Technology Assurance Framework).
          </li>
        </ul>
        <div className="ratio ratio-16x9">
          <iframe  src="https://www.youtube.com/embed/Y8kqh9q3Jwg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        
    </div>
  )
}

export default ArquitecturCobit