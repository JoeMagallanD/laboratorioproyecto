import React, { Fragment } from 'react';
import HorarioLista from './HorarioLista';
import { Link } from 'react-router-dom';

function Horarios({ horarios, guardarRecargarLaboratorios, auth }) {
    return (
        <Fragment>
            {auth ? (
                <div>
                    <h1 className="text-center">Horarios</h1>
                    <div className="col-md-12 text-center">
                        <Link to={`/nuevo-horario`} className="btn btn-success mr-2">Agregar horario</Link>
                    </div>
                    <ul className="list-group mt-5">
                        {horarios.map(horario => (
                            <HorarioLista
                                key={horario.id}
                                horario={horario}
                                guardarRecargarLaboratorios={guardarRecargarLaboratorios}
                            />
                        ))}
                    </ul>
                </div>
            ) : <h1 className="text-center">Página no disponible</h1>}
        </Fragment>
    )
}
export default Horarios;