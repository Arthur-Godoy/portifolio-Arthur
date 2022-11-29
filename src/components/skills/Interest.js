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
                <h3>Desenvolvimento Mobile</h3>
                <p> Comecei a desenvolver apps, usando o React Native, com ele é possivel construir aplicações robustas e de fácil manutenção</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.app}>
                <h3>Desenvolvimento Web</h3>
                <p>Sou um desenvolvedor full-stack, hoje fazendo aplicações com Laravel(PHP), e o front-end com, HTML, CSS, JS, Bootstrap e React</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
              <div className={classes.other}>
                <h3>Outros</h3>
                <p>Tenho também vontade de aprofundar em Python, mesmo que não tenha muita relação com o que já sei, tenho também interesse em Cloud e Node para o back-end</p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    )
  }
}

export default Interest;