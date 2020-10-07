import React from 'react';


import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';


import EventShareDialog from './EventShareDialog';
import AboutEventPanel from '../Components/AboutEventPanel';
import EventsTimeLinePanel from '../Components/EventTimelinePanel';
// import EvenstAnnouncementsPanel from '../Components/EventsAnnouncementsPanel';
// import ChatPanel from '../Components/EventsChatPanel';
// import { Typography } from '@material-ui/core';



function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({

    icons: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        // color: theme.palette.grey[500],

    },
    root: {

    },
    bottomTags: {
        position: 'absolute',
        left: theme.spacing(1),
        bottom: theme.spacing(1),
    },
    dialog: {
        // height: '800px',
        minHeight: '90vh',
        maxHeight: '90vh',
    },
    root2: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: theme.palette.secondary.main,
        // marginBottom: theme.spacing(2),
        padding: theme.spacing(1)

    },
    bottomBar: {
        display: 'flex',
        width: '90%',
        backgroundColor: theme.palette.secondary.main
    },
    field: {
        width: '100%'
    },
    action: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // minHeight: '50px'
    },
    dialogContent: {
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(1)
        },

    }
}));

function EventsDialog(props) {
    const event = props.event;
    // const t = localStorage.getItem('theme');
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const theme = useTheme();
    const token = localStorage.getItem('token');
    const [shareDialogOpen, setShareDialogOpen] = React.useState(false);



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleClose() {
        props.handleClose();

    }

    // function handleRegClick() {
    //     props.handleReg(event);
    // }

    function handleShareClick() {
        setShareDialogOpen(true);
    }

    function handleShareClose() {
        setShareDialogOpen(false);
    }

    function handleAcceptClick(){
        var data = new FormData();
        const payload = {
            eventId: event._id,
            status: "active"
        }
        data = JSON.stringify(payload);
        fetch(process.env.REACT_APP_API_URL+'/api/admin/update_event_status', {
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
                    console.log(value);
                })
            }
            else if (response.status === 401) {
                localStorage.removeItem('token');
            }
        })
    }

    return (
        <Dialog
            open={props.open}
            onClose={handleClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            fullWidth={true}
            maxWidth="md"
            PaperProps={{
                style: {
                    backgroundColor: theme.palette.secondary.main,
                    boxShadow: 'none',
                },
            }}
            classes={{ paper: classes.dialog }}
        >
            <DialogTitle id="scroll-dialog-title">
                {event.name}
                <div className={classes.icons}>
                    {/* <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <MailIcon></MailIcon>
                    </IconButton> */}
                    <IconButton aria-label="share" onClick={handleShareClick}>
                        <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </div>
                <div className={classes.root}>
                    <Paper className={classes.root2}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="on"
                        >
                            <Tab label="About" {...a11yProps(0)} />
                            <Tab label="Schedule" {...a11yProps(1)} />
                            {/* <Tab label="Announcements" {...a11yProps(2)} />
                            <Tab label="Chat" {...a11yProps(3)} /> */}

                        </Tabs>
                    </Paper>
                </div>
            </DialogTitle>
            <DialogContent className={classes.dialogContent} dividers={true} >
                <EventShareDialog
                    event={event}
                    open={shareDialogOpen}
                    handleClose={handleShareClose}></EventShareDialog>
                <AboutEventPanel
                    value={value}
                    index={0}
                    event={props.event}></AboutEventPanel>
                <EventsTimeLinePanel value={value} index={1} event={props.event}></EventsTimeLinePanel>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleAcceptClick}>Accept</Button>
                <Button variant="contained" style={{ marginLeft: "5px" }}>Send Email</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EventsDialog;