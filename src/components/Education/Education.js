import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { GrPersonalComputer } from 'react-icons/gr'

class Education extends Component {
    render() {
        return (
            <div className={classes.box} id="education">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>MINHA JORNADA</span>
                    <section className={classes.container}>
                        <div className={classes.container_content}>
                            <div className={classes.row}>
                                <div className={classes.row_md_12}>
                                    <div className={classes.timeline_centered}>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Graduação <span>2021-2025</span></h2>
                                                    <h3>FDV</h3>
                                                    <p>Graduação em Andamento, Em <b>Sistemas de Informação</b> com o foco em me tornar um desenvolvedor, sem dispensar o aprendizado de matérias que fujam disso.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`} >
                                                    <GrPersonalComputer />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Técnico <span>2018-2020</span></h2>
                                                    <h3>IFMG-Ponte Nova</h3>
                                                    <p>Técnico em Informática, onde aprendi JAVA, e desenvolvi o raciocínio lógico necessario para um programador, dando meus primeiros passos em desenvolvimento.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`} >
                                                    <FaSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Ensino Médio <span>2018-2020</span></h2>
                                                    <h3>IFMG-Ponte Nova</h3>
                                                    <p>Ensino Médio Completo, no IFMG-Ponte Nova, ensino de qualidade e ótimos professores.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollAnimation>
            </div>

        )
    }
}

export default Education;
