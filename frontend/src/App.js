import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './Components/Alert/Alert';
import LandingPage from './Components/LandingPage/LandingPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import SignInContext from './contexts/SignInContext/SignInContext';
import SignUpContext from './contexts/SignUpContext/SignUpContext';
import AppRoutes from './Routes/Routes';

function App() {
    const signupcontext = useContext(SignUpContext);
    const { showsignUp } = signupcontext;
    const signincontext = useContext(SignInContext);
    const { showsignIn } = signincontext;
    return (
        <>
            <Alert />
            <Router>
                {
                    showsignIn && <SignIn />
                }
                {
                    showsignUp && <SignUp />
                }
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                </Routes>
                <AppRoutes />
            </Router>
        </>
    );
}

export default App;
