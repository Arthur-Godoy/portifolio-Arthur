import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>SOBRE MIM</span>
                    <h2 className={classes.heading}>Quem é Arthur?</h2>
                    <div className={classes.About}>
                        <p> Meu nome é <b>Arthur Godoy</b> Apaixonado por tecnologia, atualmente estudo desenvolvimento full-stack com Laravel, já estou preparado para entrar no mercado, Ainda não tenho experiência porém tenho sede de aprender a de me mostrar valoroso para uma empresa, Porém ainda não tive oportunidade de me provar no mercado, e espero encontrar em breve :)  </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;