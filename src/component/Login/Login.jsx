import React from 'react'
import './login.css'
import { useContext } from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'

export const Login = () => {
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    Login,
  } = useContext(Context)



  return (
    <div className="classregist">
      <div className="form">
        <ul className="tab-group"></ul>

        <div className="tab-content">
          <div id="signup">
            <h1 className='loginh1'>Login</h1>

            <form onSubmit={Login}>
              <div className="field-wrap">

                <input value={loginEmail} type="email" placeholder='Email adress' required autoComplete="off" className="inputlabels" onChange={(e) => 
                setLoginEmail(e.target.value)}/>
              </div>


              <div className="field-wrap">

                <input value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} type="password" placeholder='Password' required autoComplete="off" className="inputlabels" />
              </div>
              
              
              <Link to='/regist' className='Links'><h4 className='pb-3'>Зарегистрироваться</h4></Link>

              <button type="submit" className="button button-block" >
                Login
              </button>
            </form>
          </div>

          <div id="login"></div>
        </div>
      </div>
    </div>
  )
}
