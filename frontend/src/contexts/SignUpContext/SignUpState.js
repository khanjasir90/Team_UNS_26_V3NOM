import React, { useState } from 'react'
import SignUpContext from './SignUpContext';

const SignUpState = (props) => {

    const [showsignUp, setShowsignUp] = useState(false);

    const showSignUp = () => {
        setShowsignUp(true);
    }
    const hideSignUp = () => {
        setShowsignUp(false);
    }

    return (
        <SignUpContext.Provider value={{ showsignUp, showSignUp, hideSignUp }}>
            {props.children}
        </SignUpContext.Provider>
    )
}

export default SignUpState;
