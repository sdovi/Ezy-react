import React, { useState } from 'react'
import './Style.css'

export const Adminlogin = () => {
    const [adminusername, setAdminUsername] = useState()
    const [adminPassword, setAdminPassword] = useState()
    const [loginError, setLoginError] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Проверяем введенные данные
        if (adminusername === 'admin' && adminPassword === '123') {
            window.location.href = 'http://localhost:3000/admin';
        } else {
            setLoginError(true);
        }
    };
    return (
        <div>
            <div className='bgadmins'>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-2"></div>
                        <div class="col-lg-6 col-md-8 login-box">
                            <div class="col-lg-12 login-key">
                                <i class="fa fa-key" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-12 login-title">
                                ADMIN PANEL
                            </div>

                            <div class="col-lg-12 login-form">
                                <div class="col-lg-12 login-form">
                                    <form onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <label class="form-control-label">USERNAME</label>
                                            <input type="text" class="form-control" value={adminusername} onChange={e => setAdminUsername(e.target.value)} />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label">PASSWORD</label>
                                            <input type="password" class="form-control" value={adminPassword} onChange={e => setAdminPassword(e.target.value)} />
                                        </div>

                                        <div class="col-lg-12 loginbttm">
                                            <div class="col-lg-6 login-btm login-text">
                                            </div>
                                            <div class="col-lg-6 login-btm login-button">
                                                <button type="submit" class="btn btn-outline-primary">LOGIN</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {loginError && <p>Неверное имя пользователя или пароль</p>}
                            <div class="col-lg-3 col-md-2">

                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}
