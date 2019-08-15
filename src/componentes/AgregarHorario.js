import React, { useState } from 'react';
import OpcionesLab from './OpcionesLab';
import Error from './Error';

import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';
import firebase from './config/firebase';

function AgregarHorario({history, datos}){
    
    //state
    const [nombreDocente, guardarNombreDocente ] = useState('');
    const [materia, guardarMateria ] = useState('');
    const [horainicio, guardarHorainicio ] = useState('');
    const [horafin, guardarHorafin] = useState('');
    const [lab, guardarLab] = useState('');
    const [dia, guardarDia] = useState('');
    const [error, guardarError ] = useState(false);
   
    const AgregarHorario = async e => {
        e.preventDefault();

        if(nombreDocente === '' || materia === '' || horainicio === '' || horafin ==='' || lab ==='' || dia ===''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //se crea el nuevo producto
        try {
            firebase.firestore().collection('horario')
            .add({
                nombreDocente,
                materia,
                horainicio,
                horafin,
                lab,
                dia
            }).then(()=>{
                Swal.fire({
                    position: 'center',
                    type: 'success',
                    title: 'Excelente!',
                    text: 'Horario creado con exito',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuele a intentarlo'
              })
        } 
        //redirigir al usuario a horarios
        history.push('/horarios');
    }
    return (
        <div className="jumbotron">
            <div className="col-md-8 mx-auto ">
                <h1 className="text-center">Agregar Nuevo Horario</h1>

                {(error) ? <Error mensaje='Todos los campos son obligatorios' /> : null}

                <form
                    className="mt-5"
                    onSubmit={AgregarHorario}
                >
                    <div className="form-group">
                        <label>Nombre Docente</label>
                        <input
                            type="text"
                            className="form-control"
                            name="docente"
                            placeholder="Docente"
                            onChange={e => guardarNombreDocente(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Materia</label>
                        <input
                            type="text"
                            className="form-control"
                            name="materia"
                            placeholder="Materia"
                            onChange={e => guardarMateria(e.target.value)}
                        />
                    </div>
                    <div className="form row">
                        <div className="form-group col-md-6">
                            <label>Hora inicio</label>
                            <input
                                type="time"
                                className="form-control"
                                name="horaini"
                                placeholder="Materia"
                                onChange={e => guardarHorainicio(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Hora Fin</label>
                            <input
                                type="time"
                                className="form-control"
                                name="horafin"
                                placeholder="Materia"
                                onChange={e => guardarHorafin(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Laboratorio</label>
                        <select
                            className="form-control"
                            name="laboratorio"
                            onChange={e => guardarLab(e.target.value)}>
                            <option>Seleccione un laboratorio</option>
                            {datos.map(dato => (
                                <OpcionesLab key={dato.id} dato={dato} />
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Día</label>
                        <select
                            className="form-control"
                            name="dia"
                            onChange={e => guardarDia(e.target.value)}>
                            <option>Seleccione un día</option>
                            <option value="Lunes">Lunes</option>
                            <option value="Martes" >Martes</option>
                            <option value="Miercoles">Miercoles</option>
                            <option value="Jueves">Jueves</option>
                            <option value="Viernes">Viernes</option>
                        </select>
                    </div>

                    <input type="submit" className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3" value="Agregar Horario" />
                </form>
            </div>
        </div>
        
        
    )
}
export default withRouter(AgregarHorario);