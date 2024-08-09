import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        error: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setFormData({...formData,error:''})
        const {email,password} = formData;
        if(!email || !password){
            setFormData({...formData, error:'Please fill in all fields'});
            return;
        }

        if(email ==='uwingajoselyne@gmail.com' && password === '123'){
            navigate('/')
            alert('Login successful')
        }
        else{
            setFormData({...formData, error:'invalid email or password'})
        }
    }

    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="row">
                            <div className="col-12">
                                <div className="auth-card">
                                    <h3 className='text-center mb-3'>Login</h3>
                                    {formData.error && <p className="text-red-500 mb-4">{formData.error}</p>}
                                    <form action="" onSubmit={handleSubmit} className='d-flex flex-column gap-15'>
                                        <div>
                                            <input type="email" onChange={handleInputChange} value={formData.email} name='email' placeholder='Email' className='form-control' />
                                        </div>
                                        <div className='mt-1'>
                                            <input type="password" onChange={handleInputChange} value={formData.password}  name='password' placeholder='Password' className='form-control' />
                                        </div>
                                        <div className=''>
                                            <Link to='/forgot-password'>Forget Password</Link>
                                            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                                <button className="button border-0" type='submit'>Login</button>
                                                <Link to='/signup' className="button signup">Signup</Link>
                                            </div>
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
