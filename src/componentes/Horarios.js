import React, { Fragment } from 'react';
import HorarioLista from './HorarioLista';


function Horarios({ horarios, guardarRecargarLaboratorios, auth }) {
    return (
        <Fragment>
            {auth ? (
                <div>
                    <h1 className="text-center">Horarios</h1>
                    <div className="col-md-12 text-center">
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