import React, {useCallback, useContext} from 'react';
import { withRouter, Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import fbApp from '../config/fbConfig';
import {AuthContext} from './Auth';

const SignIn2 = ({history}) => {
    const handleSignIn = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await fbApp
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            history.push('/home');
            
        } catch(error) {
            alert(error);
        }
    }, [history]);

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    return(
        <div>
            <h1>Login</h1>
            <div className="container row">
                <div className="col l3 m2 s1"></div>
                    <div className="col l6 m8 s10">
                        <form onSubmit={handleSignIn}>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email"/>
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password"/>
                            <button type="submit" className=' btn flat z-depth-0'>Sign In</button>
                            <Link to='/signup'><button className="btn-flat lighten-1 z-depth-0">Sign Up</button></Link>
                        </form>
                    </div>
                    <div className="col l3 m2 s1"></div>
            </div>
        </div>
    );
};

export default withRouter(SignIn2);