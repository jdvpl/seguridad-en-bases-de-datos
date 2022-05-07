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
        <Conclusiones/>
      </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Inicio