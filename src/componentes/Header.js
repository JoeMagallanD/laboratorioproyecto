import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
//

function Header() {


    
 

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 mb-5">
                <div className="container-fluid">
                    <Link to="/laboratorios" className="navbar-brand">Sistema de Laboratorios | </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink
                                    to='/laboratorios'
                                    className="nav-link"
                                    activeClassName="active"
                                >Laboratorios</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to='/nuevo-laboratorio'
                                    className="nav-link"
                                    activeClassName="active"
                                >Nuevo Laboratorio</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to='/horarios'
                                    className="nav-link"
                                    activeClassName="active"
                                >Horarios</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to='/nuevo-horario'
                                    className="nav-link"
                                    activeClassName="active"
                                >Nuevo Horario</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  
                                    to="/nuevo-marcador" 
                                    className="nav-link" 
                                    activeClassName="active"
                                >Generar Marcador</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
        </nav>
    )
}
export default withRouter(Header);