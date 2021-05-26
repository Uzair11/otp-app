/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import SingleOTPInput from "../SingleOtpInput";

export function Otp(props) {
    const [otp, setOtp] = React.useState(new Array(4).fill(""));
    const [otpMatch, setOtpMatch] = React.useState(false);
    const [optCount, setOtpCount] = React.useState(0);

    const handleOtpChange = (element, index) => {

        if (isNaN(element.value)) return false;

        setOtp(
            [...otp.map((value, i) => (i === index) ? element.value : value)]
        )

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    }

    useEffect(() => {
        otp.filter(item => item != "").length === 4 ? setOtpMatch(true) : setOtpMatch(false)

    }, [otp])

    return (
        otpMatch ? <h1>OTP Matched, {otp}</h1> : (
            otp.map((data, index) => {
                return (
                    <SingleOTPInput
                        handleOtpChange={handleOtpChange}
                        index={index}
                        data={data}
                    />
                )
            })
        )
    )

}

export default Otp;
