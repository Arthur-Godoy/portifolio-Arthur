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
        link: 'https://mega.nz/file/nfBkTACY#EN_iaen0j0u4uvUBkjMkCAUdl--dV7b25pjTh43aLSY',
        description: 'Aplicação em React Native, usando uma base de dados em JSON da bíblia.',
        images:[
            {
                url:'images/BibliaApp/1.gif',
                caption:'img1'
            },
        ]
    },

    {
        name: 'Aiko App',
        tecnologies: 'React Native - CSS',
        link: 'https://aiko-app-vercel.vercel.app/',
        description: 'Aplicação em React Native, usando uma base de dados em JSON de maquinas, essas maquinas sao disponibilizadas em um mapa, onde é possivel ver todas as informações da mesma.',
        images:[
            {
                url:'images/AikoApp/1.gif',
                caption:'img1'
            },
        ]
    },

    {
        name: 'ToDoApp',
        tecnologies: 'Laravel - MYSQL - Bootstrap',
        link: 'https://todoapp-simple-arthur.herokuapp.com/',
        description: 'Aplicação em Laravel de uma plicação To-Do, dessa vez com um design mais minimalista e com menos funcionalidades que o Task App. ',
        images:[
            {
                url:'images/ToDoApp/1.PNG',
                caption:'img1'
            },
            {
                url:'images/ToDoApp/2.PNG',
                caption:'img1'
            },
            {
                url:'images/ToDoApp/3.PNG',
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
                                            {project.name == 'Bible App' ? (
                                                <img width="200px" height="400px" src={ slideImage.url } />
                                            ):(
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
