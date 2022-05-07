import React from 'react'
import Actividad from './Actividad'
import Banner from './Banner'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Objetivos from './Objetivos'
import Conclusiones from './Conclusiones'
import Alcances from './Alcances'
import Descripcion from './Descripcion'
import Presentadopor from './Presentadopor'
import Componentes from './Componentes'
import RequerimientosSoftware from './RequerimientosSoftware'
import Costes from './Costes'
import Cronogramas from './Cronogramas'
import Actividadesdesarrollo from './Actividadesdesarrollo'
import Formaspago from './Formaspago'
import Condicionescomerciales from './Condicionescomerciales'
import Tiempoentrega from './Tiempoentrega'
import Softwareuso from './Softwareuso'
import Procesos from './Procesos'

const Inicio = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className="container">
        <Presentadopor/>
        <Objetivos/>
        <Actividad/>
        <Descripcion/>
        <Alcances/>
        <Componentes/>
        <RequerimientosSoftware/>
        <Costes/>
        <Actividadesdesarrollo/>
        <Cronogramas/>
        <Formaspago/>
        <Condicionescomerciales/>
        <Tiempoentrega/>
        <Softwareuso/>
        <Procesos/>
        <Conclusiones/>
      </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Inicio