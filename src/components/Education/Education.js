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
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_7}`} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Desenvolvedor Full Stack - Terceirizado  <span>07/2023-HOJE</span></h2>
                                                    <h3>J17 Bank</h3>
                                                    <p>Aqui atuo utilizando React no front e Laravel para o Back, aplicação robusta que exige muito conhecimento e segurança em cada processo, aqui estou aprendendo como um código limpo, organizado e otimizado faz a diferença, e que boas práticas na verdade são tão necessárias quanto saber programar.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={`${classes.timeline_icon} ${classes.timeline_icon_6}`} >
                                                    <MdWork />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Desenvolvedor Full Stack - Terceirizado  <span>02/2023-HOJE</span></h2>
                                                    <h3>SheepTech</h3>
                                                    <p>Trabalho como desenvolvedor, aqui pude aprender com a equipe Laravel e Vue, atuei em grandes projetos desenvolvendo sistemas com essas tecnologias, pude ver na prática como a programação funciona, além de desenvolver o trabalho em equipe, que é muito necessário.</p>
                                                </div>
                                            </article>
                                        </ScrollAnimation>

                                        <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                                            <article className={classes.timeline_entry}>
                                                <div className={classes.timeline_icon} >
                                                    <MdSchool />
                                                </div>
                                                <div className={classes.label}>
                                                    <h2 >Graduação <span>2021-2025</span></h2>
                                                    <h3>FDV</h3>
                                                    <p>Graduação em Andamento, Em <b>Sistemas de Informação</b> com o foco em me tornar um desenvolvedor, sem dispensar o aprendizado de matérias que fujam do escopo.</p>
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
                                                    <p>Técnico em Informática, onde desenvolvi o raciocínio lógico necessario para um programador, dando meus primeiros passos em desenvolvimento.</p>
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
