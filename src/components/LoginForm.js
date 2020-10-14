import React , { useState }from 'react'
import { Box, Button, Checkbox, FilledInput, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, makeStyles, TextField } from '@material-ui/core'
import { ArrowForward, ArrowForwardIos, Visibility, VisibilityOff } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    input: {
        width: '80vw',
        maxWidth: '20em'
    },
    label: {
        fontSize: '9pt', fontWeight: 700, textTransform: 'uppercase',
    },
    button:{
        borderRadius:'15pt',
        width:'4.5em',
        height:'4.5em'
    },
    icon: {
        width: '45px',
        height: '45px',
        marginLeft: '6px'
    },
    center: {
        display:'flex',
        justifyContent:'center',
    }
}));
const labelstyle = { fontSize: '9pt', fontWeight: 700, textTransform: 'uppercase' }


const LoginForm = () => {

    const classes = useStyles();

    const [hidePasword, setHidePassword] = useState(true) //false


    return (
        <form>
            <Box m={3}>
                <FormControl className={classes.input}>
                    <TextField type="email" label="username" variant="filled" InputLabelProps={{ style: labelstyle }} />
                </FormControl>
            </Box>

            <Box m={3}>
                <FormControl className={classes.input} variant="filled">
                    <InputLabel className={classes.label}>Password</InputLabel>
                    <FilledInput type={hidePasword ? "password":"text"}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton onClick={()=>{setHidePassword(!hidePasword)}}>
                                   {hidePasword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>

            <Box m={3}>
                <FormControlLabel
                    control={<Checkbox/>}
                    label={<span className={classes.label}>Stay signed in</span>}
                />
            </Box>

            <Box m={6} className={classes.center}>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="secondary"
                    startIcon={<ArrowForward className={classes.icon}/>}
                />
            </Box>


        </form>
    )
}

export default LoginForm
