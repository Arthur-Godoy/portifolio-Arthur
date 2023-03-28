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
                        <p> Meu nome é <b>Arthur Godoy</b>, atualmente trabalho com desenvolvimento full-stack usando Laravel & React/Vue, Trabalho como Freelancer buscando sempre fazer o meu melhor em cada projeto. Aqui você poderá ver alguns deles.  </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;