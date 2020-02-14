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
                            
                            <input type="email" name="email" placeholder="Email"/>
                            
                            <input type="password" name="password" placeholder="Password"/>
                            <Link to='/signin'><button type="submit" className="btn-flat lighten-1 z-depth-0">Sign In</button></Link>
                            <button type="submit" className=' btn z-depth-0'>Sign Up</button>
                        </form>
                    </div>
                <div className="col l3 m2 s1"></div>
            </div>
        </div>
    );
};

export default withRouter(SignUp2);