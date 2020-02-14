import React, {useCallback} from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import fbApp from '../config/fbConfig';

const SignUp2 = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const {email, password} = event.target.elements;
        try {
            await fbApp
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push('/');
        } catch(error) {
            alert(error);
        }
    }, [history]);

    return(
        <div>
            <h1>Sign Up</h1>
            <div className="container row">
                <div className="col l3 m2 s1"></div>
                    <div className="col l6 m8 s10">
                        <form onSubmit={handleSignUp}>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email"/>
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password"/>
                            <button type="submit" className="btn-flat lighten-1 z-depth-0">Sign Up</button>
                            <Link to='/signin'><button type="submit" className=' btn flat z-depth-0'>Sign In</button></Link>
                        </form>
                    </div>
                <div className="col l3 m2 s1"></div>
            </div>
        </div>
    );
};

export default withRouter(SignUp2);