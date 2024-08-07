import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                                <div className="login-card">
                                    <h3>Login</h3>
                                    <form action="">
                                        <div>
                                            <input type="email" name='email' placeholder='Email' className='form-control' />
                                        </div>
                                        <div>
                                            <input type="password" name='password' placeholder='Password' className='form-control' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
