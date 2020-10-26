import React from 'react';
// import { cleanup } from '@testing-library/react';

//Materail imports
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
// import AuthContext from '../AuthContext';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(0.5),
    },
}));

function AboutEventPanel(props) {
    const classes = useStyles();
    const token = localStorage.getItem('token');
    const [collegeName,setCollegeName] = React.useState(null);
    const [city,setCity] = React.useState(null);
    const [pin,setPin] = React.useState(null);
    const [state,setState] = React.useState(null);
    const [type,setType] = React.useState(null);
    const [colleges,setColleges] = React.useState([]);

    React.useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/api/admin/get_all_colleges', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: 'GET',
          }).then(response => {
            response.json().then(value => {
                setColleges(value);
            })
          })
    },[token])

    const handleAddButton = () =>{
        var data = new FormData();
        const payload = {
            name: collegeName,
            college_type: type,
            city: city,
            state: state,
            pin_code: pin,
        }
        data = JSON.stringify(payload);
        fetch(process.env.REACT_APP_API_URL+'/api/admin/add_college', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: data
        }).then(response => {
            if (response.status === 200) {
                // setTitle(null);
                setType(null);
                response.json().then(value => {
                    setColleges(value);
                })
            }
            else if (response.status === 401) {
                localStorage.removeItem('token');
            }
        })
    }

    const handleDelete = (keyword) => () =>{
        var data = new FormData();
        const payload = {
            id: keyword._id,
        }
        data = JSON.stringify(payload);
        fetch(process.env.REACT_APP_API_URL+'/api/admin/delete_college', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: data
        }).then(response => {
            if (response.status === 200) {

                response.json().then(value => {
                    setColleges(value);
                    
                })
            }
            else if (response.status === 401) {
                localStorage.removeItem('token');
            }
        })
    }

    return (
        <div>
            <form>
                <TextField autoComplete="off" required value={collegeName || ""} label="College Name" onChange={(event)=>setCollegeName(event.target.value)} fullWidth name="College Name" variant="outlined" style={{ marginBottom: "6px" }} />
                <TextField autoComplete="off" value={city || ""} label="City" onChange={(event)=>setCity(event.target.value)} fullWidth name="City" variant="outlined" style={{ marginBottom: "6px" }} />
                <TextField autoComplete="off" value={state || ""} label="State" onChange={(event)=>setState(event.target.value)} fullWidth name="College Name" variant="outlined" style={{ marginBottom: "6px" }} />
                <TextField autoComplete="off" value={pin || ""} label="Pincode" onChange={(event)=>setPin(event.target.value)} fullWidth name="College Name" variant="outlined" style={{ marginBottom: "6px" }} />
                <FormControl variant="outlined" fullWidth required>
                    <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
                    <Select
                        fullWidth
                        native
                        onChange={(event)=>setType(event.target.value)}
                        label="Type"
                        value={type || ""}
                        inputProps={{
                            name: 'type',
                            id: 'type',
                        }}>
                        <option aria-label="None" value="" />
                        <option value="State University">State University</option>
                        <option value="Deemed to be University">Deemed to be University</option>
                        <option value="Central University">Central University</option>
                        <option value="Private University">Private University</option>
                    </Select>
                </FormControl>
                <Button className={classes.button} onClick={handleAddButton} size="large" variant="contained">Add</Button>
            </form>
            <Typography style={{margin:"10px"}}>All Colleges</Typography>
            {
                colleges.map((college,index)=>{
                    return  <Chip color="secondary" label={college.name} onDelete={handleDelete(college)}/>
                })
            }
            
        </div>
    );
}

export default AboutEventPanel;