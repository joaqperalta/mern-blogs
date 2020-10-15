import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PasswordField from 'material-ui-password-field';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const Login = () => {
    const history = useHistory();
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div style={styles.container}>
            <div>
                <img
                    src={require('../assets/images/blog2.jpg')}
                    alt="cover"
                    style={styles.image}
                />
            </div>
            <div style={styles.rightDiv}>
                <div style={styles.formField}>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Email"
                        multiline
                        value={email}
                        className={classes.textField}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div style={styles.formField}>
                    <PasswordField
                        floatingLabelText="Enter your password"
                        errorText="Your password is too short"
                        className={classes.textField}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                <div style={styles.btnDiv}>
                    <Button
                        style={styles.btn}
                        onClick={() => history.push('/posts')}
                    >
                        SIGN IN
                    </Button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#ffffff',
    },
    image: {
        width: '60vw',
        height: '100vh',
    },
    rightDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        marginLeft: '8%',
    },
    btnDiv: {
        marginBottom: 50,
    },
    btn: {
        width: 200,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#3f51b5',
        color: '#ffffff',
    },
    formField: {
        marginBottom: '40px',
    },
};

const useStyles = makeStyles(() => ({
    textField: {
        width: 300,
        height: 40,
    },
}));

export default Login;