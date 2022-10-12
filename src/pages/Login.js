
import React, { useState } from 'react';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [see, setSee] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', {
                email, password
            })
            if (response?.data?.success) {
                toast.success('Login Successfully!');
                toast('Redirecting to home page');
                console.log(response);
                localStorage.setItem('doctor_app_token', response.data.data.token);
                navigate('/')
            } else {
                toast.error(response.data.message);
            }
        }
        catch (error) {
            toast.error(error.response.data.message);
        }

    }

    return (
        <div style={{
            height: '100vh',
            width: '100%',
        }} className="gradient authentication" >
            <div className="container" style={{ height: '100%' }}>
                <div style={{
                    height: "100%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}>
                    <form onSubmit={handleSubmit}
                        style={{
                            width: '100%',
                            maxWidth: '500px',
                            padding: '2rem',
                            borderRadius: '10px',
                            background: 'white',
                            boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`
                        }}>
                        <h2 className='title'>Welcome back</h2>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='input email-input'
                            type="email"
                            placeholder='Enter your email'
                        />
                        <div className='input password-input'>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type={see ? 'text' : "password"}
                                placeholder='Enter your password'
                            />
                            <span
                                className='see-button'
                                onClick={() => setSee(!see)}
                            >
                                {see ?
                                    <span><EyeOutlined /></span>
                                    :
                                    <span><EyeInvisibleOutlined /></span>
                                }
                            </span>
                        </div>
                        <button type='submit'>Login</button>
                        <Link className='link' to="/register">Don't have account?</Link>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;