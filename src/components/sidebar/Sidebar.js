import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                <h1><Link smooth to="/#start" className="h1_links">Arthur Godoy</Link></h1>

                <img src="images/profile-pic.png" />
                <p style={{ color: 'black', fontWeight: 'bold', fontSize:'14px' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a> arthurgodoygomides@gmail.com</p>
                <a href='https://drive.google.com/file/d/1ONs38_e_ZohUyTcA2dfBo--Y7VQb3jmg/view?usp=share_link'>Meu Currículo</a>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">Sobre</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interesses </Link></li>
                    {/* <li className="sidebar-nav-items"><Link smooth to="/#projects" className="links">Projetos </Link></li> */}
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Educação</Link></li>

                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> 
                            <a href="https://github.com/Arthur-Godoy" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg" />
                        </li>

                        <li className="sidebar-nav-icons">
                            <a href="https://www.linkedin.com/in/arthur-gomides-godoy-94aaa7212/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg" />
                        </li>

                        <li className="sidebar-nav-icons">
                            <a href="mailto:arthurgodoygomides@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg" />
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar