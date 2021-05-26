import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonMargin: {
        margin: "5px"
    }
}));

function SendOtp(props) {
    const classes = useStyles();
    return (

        <React.Fragment>
            <h5>Did not receive OTP?</h5>
            <Button className={classes.buttonMargin} onClick={e => props.clearOtp()} variant="contained" color="primary" disableElevation>
                Re-Send
            </Button>
        </React.Fragment>
    );
}

export default SendOtp;