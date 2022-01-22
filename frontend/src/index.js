import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignInState from './contexts/SignInContext/SignInState';
import SignUpState from './contexts/SignUpContext/SignUpState';
import './index.css'

const Main = () => {
    return (
        <SignUpState>
            <SignInState>
                <App />
            </SignInState>
        </SignUpState>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));
