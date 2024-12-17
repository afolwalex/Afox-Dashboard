import React, {useState} from 'react';
import InputField from '../../components/InputField';
import {Button} from '../../styles/form.styles';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();
        navigate('/app');
    };

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-10">
                    <h5>Welcome Back!</h5>
                    <p>Please enter your email and password to get back in.</p>
                    <form className="mt-5" onSubmit={onSubmit}>
                        <InputField
                            type="email"
                            value={email}
                            setValue={setEmail}
                            label="Your Email"
                            required={true}
                        />
                        <InputField
                            type="password"
                            value={password}
                            setValue={setPassword}
                            label="Your Password"
                            required={true}
                        />
                        <div className="mt-5">
                            <Button wide="true" type="submit">
                                <span>Login</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
