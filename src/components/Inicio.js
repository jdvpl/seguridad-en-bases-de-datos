import React from 'react'
import Actividad from './Actividad'
import Banner from './Banner'
import Cobit from './Cobit'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Introduccion from './Introduccion'
import Itil from './Itil'
import Objetivos from './Objetivos'
import Conclusiones from './Conclusiones'
import ArquitecturCobit from './ArquitecturCobit'
import ComputacionNube from './ComputacionNube'
import OptimizarProcesosTI from './OptimizarProcesosTI'

const Inicio = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <div className="container">
        <Objetivos/>
        <Introduccion/>
        <Actividad/>
        <OptimizarProcesosTI/>
        <ArquitecturCobit/>
        <ComputacionNube/>
        <Cobit/>
        <Itil/>
        <Conclusiones/>
      </div>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Inicio