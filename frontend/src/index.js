import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import SignInState from './contexts/SignInContext/SignInState';
import SignUpState from './contexts/SignUpContext/SignUpState';
import './index.css'
import store from './store/index';


const Main = () => {
    return (
        <Provider store={store}>
            <SignUpState>
                <SignInState>
                    <App />
                </SignInState>
            </SignUpState>
        </Provider>
    )
}

ReactDOM.render(<Main />, document.getElementById('root'));
