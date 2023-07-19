import React from 'react';
import { useContext } from 'react'
import { Context } from '../../context'
import './reg.css'
import { Link } from 'react-router-dom';

export const Registers = () => {
  const {
    email,
    username,
    password,
    setEmail,
    setUsername,
    setPassword,
    Registr
  } = useContext(Context)
  return (
    <div className="classregist">
      <div className="form">
        <ul className="tab-group"></ul>

        <div className="tab-content">
          <div id="signup">
            <h1 className='regs' >Registration</h1>

            <form >
              <div className="field-wrap">

                <input type="email" placeholder='Email adress' required autoComplete="off" value={email} className="inputlabels" onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div className="field-wrap">
                <input type="text" placeholder='Username' required autoComplete="off" className="inputlabels" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>

              <div className="field-wrap">

                <input type="password" placeholder='Password' required autoComplete="off" className="inputlabels" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>

              <Link to='/login' className='Links'><h4 className='pb-3'>Войти</h4></Link>

              <button type="submit" className="button button-block" onClick={Registr}>
                Register
              </button>
            </form>
          </div>

          <div id="login"></div>
        </div>
      </div>
    </div>
  );
};
