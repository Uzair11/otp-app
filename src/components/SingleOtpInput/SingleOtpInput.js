/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, useEffect } from 'react';

export function SingleOTPInputComponent(props) {
    const [key, setKey] = React.useState("")
    const [data, setData] = React.useState("")

    useEffect(() => {
        setData(props.data)
        setKey(props.key)

    }, [data, key])

   
    return (
        <input
            className="otpContainer otpInput"
            type="text"
            name="otp"
            maxLength="1"
            key={props.index}
            value={props.data}
            autoComplete="off"
            autoSave="false"
            disabled={props.disabled}
            onChange={event => props.handleOtpChange(event.target, props.index)}
            onFocus={event => event.target.select()}
        />
    );
}

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
