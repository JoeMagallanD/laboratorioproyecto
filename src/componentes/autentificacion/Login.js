import React ,{useState}from 'react';
import Swal from 'sweetalert2';
import firebase from '../config/firebase';
import {withRouter} from 'react-router-dom';

 function Login({history,recargar}) {
     const [ correo, guardarCorreo ] = useState('');
     const [ contrasena , guardarContrasena ] = useState('');

     const  logeo  = async e =>{
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
            if(error.message==='The password is invalid or the user does not have a password.'){
                Swal.fire({
                    type: 'error',
                    title: 'Contraseña incorrecta',
                    text: 'La contraseña que ingresaste es incorrecta!',
                })
            }else if(error.message==='There is no user record corresponding to this identifier. The user may have been deleted.'){
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
            <div className="jumbotron">
                <div id="login-row" className="row justify-content-center align-items-center">
                 <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form onSubmit={logeo}>
                            <h3 className="text-center text-info">Iniciar Sesión</h3>
                            <div className="form-group">
                                <label for="username" className="text-info">Correo</label><br/>
                                <input type="text" name="username" id="username" className="form-control"
                                required
                                value={correo}
                                onChange={e=>guardarCorreo(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-info">Contraseña</label><br/>
                                <input type="password" name="password" id="password" className="form-control"
                                required
                                value={contrasena}
                                onChange={e=>guardarContrasena(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="Entrar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default withRouter(Login);
