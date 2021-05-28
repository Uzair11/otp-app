/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, forwardRef, useImperativeHandle } from 'react';
import SingleOTPInput from "../SingleOtpInput";
import { green } from '@material-ui/core/colors';
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutlineIcon';

export function Otp(props, ref) {
    const [otp, setOtp] = React.useState(new Array(6).fill(""));
    const [otpMatch, setOtpMatch] = React.useState(false);
    const [optCount, setOtpCount] = React.useState(0);

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp(
            [...otp.map((value, i) => (i === index) ? element.value : value)]
        )

        if (element.nextSibling.nextSibling) {
            if (element.nextSibling.nextSibling.focus != undefined) {
                element.nextSibling.nextSibling.disabled = false
                element.nextSibling.nextSibling.focus();
            }
        }
    }

    useEffect(() => {
        otp.filter(item => item != "").length === otp.length ? setOtpMatch(true) : setOtpMatch(false)

    }, [otp])

    useImperativeHandle(ref, () => ({
        clearOtp() {
            setOtp([...otp.map(v => "")])
        }
    }), [])

    function Dash(props) {
        return (
            props.index + 1 === ((otp.length) / 2) ? "-" : ""
        )
    }

    return (
        otpMatch ? <><h1 style={{ color: "green" }}>OTP Matched, {otp}</h1></> : (
            otp.map((data, index) => {
                return (
                    <>
                        <SingleOTPInput
                            handleOtpChange={handleOtpChange}
                            index={index}
                            data={data}
                            disabled={index != 0}
                            autoFocus={index === 0}
                        />
                        <Dash key={index} index={index} />
                    </>
                )
            })
        )
    )
}

export default forwardRef(Otp);
