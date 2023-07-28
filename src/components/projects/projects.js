import React, { Component } from 'react';
import classes from './projects.module.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "animate.css/animate.min.css";

const projects = [
    {
        name: 'Task App',
        description: 'Aplicação em Laravel, Um aplicativo de To-Do, com login e criação de sessões.',
        tecnologies: 'Laravel - MYSQL - Bootstrap',
        link: 'http://taskapp-arthur.herokuapp.com/board/4',
        images:[
            {
                url:'images/TaskApp/1.PNG',
                caption:'img1'
            },
            {
                url:'images/TaskApp/2.PNG',
                caption:'IMG2'
            },
        ]
    },
    {
        name: 'Bible App',
        tecnologies: 'React Native - CSS',
        link: 'https://mega.nz/file/KLR1AYSS#0QnE2M3Uo_4RES-_ZlOq0mWqtrWmCEGhaEbJfo0-qW4',
        description: 'Aplicação em React Native, usando uma base de dados em JSON da bíblia.',
        images:[
            {
                url:'images/BibliaApp/1.gif',
                caption:'img1'
            },
        ]
    },

]

class Projects extends Component {
    render() {
        return (
            <div className={classes.box} id="projects">
                <span className={classes.head}>MEUS PROJETOS</span>
                <div className={classes.container}>
                    {projects.map((project) => (
                        <div className={classes.project}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <p><b>Tecnologias: </b> {project.tecnologies}</p>
                            <a href={project.link} target="blank">Link do Projeto</a>
                            <Slide>
                                {project.images.map((slideImage, index)=> (
                                    <div key={index}>
                                        <div style={{ textAlign:'center' }}>
                                            {project.name === 'Bible App' ? (
                                                // eslint-disable-next-line jsx-a11y/alt-text
                                                <img width="200px" height="400px" src={ slideImage.url } />
                                            ):(
                                                // eslint-disable-next-line jsx-a11y/alt-text
                                                <img width="951px" height="500px" src={ slideImage.url } />
                                            )}
                                        </div>
                                    </div>
                                ))} 
                            </Slide>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects;
