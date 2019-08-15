import React, { useState } from 'react';
import Swal from 'sweetalert2';
import firebase from '../config/firebase';
import { withRouter } from 'react-router-dom';

function Login({ history, recargar }) {
    const [correo, guardarCorreo] = useState('');
    const [contrasena, guardarContrasena] = useState('');

    const logeo = async e => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(correo, contrasena);
            Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Excelente',
                text: 'Sesión iniciada con éxito!',
                showConfirmButton: false,
                timer: 1500
            })
            recargar(true);
            history.replace('/home');
        } catch (error) {
            console.log(error.message);
            if (error.message === 'The password is invalid or the user does not have a password.') {
                Swal.fire({
                    type: 'error',
                    title: 'Contraseña incorrecta',
                    text: 'La contraseña que ingresaste es incorrecta!',
                })
            } else if (error.message === 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                Swal.fire({
                    type: 'error',
                    title: 'Contraseña incorrecta',
                    text: 'El correo que ingresaste es incorrecto!',
                })
            }

        }
    }

    return (
        <div className="container">
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Login Page</h2>
                </div>
            </div>
            <div class="main">
                <div class="col-md-6 col-sm-12">
                    <div class="login-form">
                        <form>
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" class="form-control" placeholder="User Name" value={correo}
                                    onChange={e => guardarCorreo(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password" value={contrasena}
                                    onChange={e => guardarContrasena(e.target.value)} />
                            </div>
                            <button type="submit" class="btn btn-black">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default withRouter(Login);
