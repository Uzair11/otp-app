import logo from './logo.svg';
import React, { useRef } from 'react';
import './App.css';
import OtpCode from "../src/components/OtpCode";
import AppBar from "../src/components/AppBar";
import SendOtp from "../src/components/SendOtp";

function App() {
    const childRef = useRef();
    const clearOtp = () => {
        childRef.current.clearOtp()
    }

    return (
        <React.Fragment>
            <AppBar />
            <div className="otpText">Please enter the OTP you received</div>
            <div className="App">
                <OtpCode ref={childRef} />
                <SendOtp clearOtp={clearOtp}/>
            </div>
        </React.Fragment >
    );
}

export default App;
