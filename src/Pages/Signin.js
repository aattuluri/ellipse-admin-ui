import React from 'react';
import {  Redirect } from "react-router";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

//function for alert
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn({ history }) {
    const classes = useStyles();
    const token = localStorage.getItem('token');
    //states for alert and circular loading of button
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        message: 'success',
        type: 'error',
        autoHide: 300
    });
    const [loading, setLoading] = React.useState(false);
    const { vertical, horizontal, open, message, type, autoHide } = state;

    if(token){
        return <Redirect to="/home" />;
    }

    //function for closing of alert
    const handleClose = async (event, reason) => {
        setState({ ...state, open: false });
    }

    //Signup (this is not used regularly only used to create admin user)

    // const handleSignup = (event) => {
    //     event.preventDefault();
    //     const { username, password } = event.target.elements;
    //     try {
    //         var data = new FormData()
    //         const payload = {
    //             username: username.value,
    //             password: password.value
    //         };
    //         data = JSON.stringify(payload);
    //         fetch(process.env.REACT_APP_API_URL + '/api/admin/signup', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             method: 'POST',
    //             body: data
    //         }).then(res => {
    //             res.json().then(result => {
    //                 console.log(result);
    //             })
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


    // function for admin signin
    const handleSignin = (event) => {
        event.preventDefault();
        setLoading(true);
        const { username, password } = event.target.elements;
        try {
            var data = new FormData()
            const payload = {
                username: username.value,
                password: password.value
            };
            data = JSON.stringify(payload);
            fetch(process.env.REACT_APP_API_URL + '/api/admin/signin', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: data
            }).then(res => {
                if (res.status === 200) {
                    res.json().then(result => {
                        localStorage.setItem('token', result.token)
                        history.push('/home');
                        setState({
                            open: true,
                            vertical: 'top',
                            horizontal: 'center',
                            message: 'Signedin successfully',
                            type: "success",
                            autoHide: 300
                        });
                    })
                }
                else {
                    setLoading(false);
                    setState({
                        open: true,
                        vertical: 'top',
                        horizontal: 'center',
                        message: "invalid credentials",
                        type: "error", autoHide: 6000
                    })
                }
            })
        }
        catch (error) {
            console.log(error);
            setLoading(false);
            setState({
                open: true,
                vertical: 'top',
                horizontal: 'center',
                message: error.message,
                type: "error",
                autoHide: 3000
            })
        }
    }



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={autoHide}
                onClose={handleClose}
                key={vertical + horizontal}>
                <Alert onClose={handleClose} severity={type}>{message}</Alert>
            </Snackbar>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon color="primary" />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleSignin} >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="User Name"
                        name="username"
                        autoComplete="off"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress color="primary" size={24} /> : "Sign In"}
                    </Button>

                </form>
            </div>
        </Container>
    );
}