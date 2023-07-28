import React, { Component } from 'react'
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class Interest extends Component {
  render() {
    return (
      <div className={classes.box} id="interest">
        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
          <span className={classes.head}>O QUE EU FAÇO?</span>
          <h2 className={classes.heading}>Alguns dos meus Interesses</h2>
          <div className={classes.Interest}>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.web}>
                <h3>API - Backend</h3>
                <p> Quando descobri uma API, e o poder e versatilidade de uma foi amor a primeira vista. Hoje tenho o prazer de trabalhar no desenvolvimento de API, com os testes garantindo eficiência e robustez.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Desenvolvimento Web - Front</h3>
                <p>Comecei minha jornada pelo Front-End, e é onde teno mais conforto de atuar, utilizo React ou Vue nos meu projetos, porém trabaho também em desenvolvimentos usando HTML e CSS puros.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Outros</h3>
                <p>MYSQL, Docker, Python, são alguns dos meus conhecimentos, tenho interesse em quase tudo que envolve Tecnologia, e gosto muito da área, portanto no futuro se Deus permitir, quero ter mais conhecimento e mais a agregar para qualquer pessoa.</p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;