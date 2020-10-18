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
    const [title,setTitle] = React.useState(null);
    const [type,setType] = React.useState(null);
    const [eventTags,setEventTags] = React.useState([]);
    const [eventRequirements,setEventRequirements] = React.useState([]);
    const [eventTypes,setEventTypes] = React.useState([]);

    React.useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/api/admin/event/get_event_keywords', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: 'GET',
          }).then(response => {
            response.json().then(value => {
                value.forEach((v) => {
                    if(v.type === "EventTags"){
                      setEventTags((eventTags)=> [...eventTags,v]);
                    }
                    else if(v.type === "EventRequirements"){
                      setEventRequirements((r)=>[...r,v]);
                    }
                    else if(v.type === "EventTypes"){
                        setEventTypes((t)=>[...t,v]);
                    }
                  })
            })
          })
    },[token])

    const handleAddButton = () =>{
        var data = new FormData();
        const payload = {
            title: title,
            type: type
        }
        data = JSON.stringify(payload);
        fetch(process.env.REACT_APP_API_URL+'/api/admin/add_event_tags', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: data
        }).then(response => {
            if (response.status === 200) {
                setTitle(null);
                setType(null);
                setEventTags([]);
                setEventTypes([]);
                setEventRequirements([]);
                response.json().then(value => {
                    value.forEach((v) => {
                        if(v.type === "EventTags"){
                          setEventTags((eventTags)=> [...eventTags,v]);
                        }
                        else if(v.type === "EventRequirements"){
                          setEventRequirements((r)=>[...r,v]);
                        }
                        else if(v.type === "EventTypes"){
                            setEventTypes((t)=>[...t,v]);
                        }
                      })
                    
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
        fetch(process.env.REACT_APP_API_URL+'/api/admin/delete_event_keywords', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: data
        }).then(response => {
            if (response.status === 200) {
                setEventTags([]);
                setEventTypes([]);
                setEventRequirements([]);
                response.json().then(value => {
                    value.forEach((v) => {
                        if(v.type === "EventTags"){
                          setEventTags((eventTags)=> [...eventTags,v]);
                        }
                        else if(v.type === "EventRequirements"){
                          setEventRequirements((r)=>[...r,v]);
                        }
                        else if(v.type === "EventTypes"){
                            setEventTypes((t)=>[...t,v]);
                        }
                      })
                    
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
                <TextField value={title || ""} label="Name" onChange={(event)=>setTitle(event.target.value)} fullWidth name="title" variant="outlined" style={{ marginBottom: "6px" }} />
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
                            id: 'outlined-age-native-simple',
                        }}>
                        <option aria-label="None" value="" />
                        <option value="EventTypes">Event Types</option>
                        <option value="EventTags">Event Tags</option>
                        <option value="EventRequirements">Requirements</option>
                    </Select>
                </FormControl>
                <Button className={classes.button} onClick={handleAddButton} size="large" variant="contained">Add</Button>
            </form>
            <Typography style={{margin:"10px"}}>Event Types</Typography>
            {
                eventTypes.map((type,index)=>{
                    return  <Chip color="secondary" label={type.title} onDelete={handleDelete(type)}/>
                })
            }
            <Typography style={{margin:"10px"}}>Event Tags</Typography>
            {
                eventTags.map((tag,index)=>{
                    return <Chip color="secondary" label={tag.title} onDelete={handleDelete(tag)}/>
                })
            }

            <Typography style={{margin:"10px"}}>Event Requirements</Typography>
            {
                eventRequirements.map((r,index)=>{
                    return <Chip color="secondary" label={r.title} onDelete={handleDelete(r)}/>
                })
            }
            
        </div>
    );
}

export default AboutEventPanel;