import React, { useState } from 'react'
import SignInContext from './SignInContext';

const SignInState = (props) => {

    const [showsignIn, setShowsignIn] = useState(false);

    const showSignIn = () => {
        setShowsignIn(true);
    }
    const hideSignIn = () => {
        setShowsignIn(false);
    }

    return (
        <SignInContext.Provider value={{ showsignIn, showSignIn, hideSignIn }}>
            {props.children}
        </SignInContext.Provider>
    )
}

export default SignInState;
