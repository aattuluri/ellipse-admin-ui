import React from 'react';
import { Redirect } from 'react-router';

//material imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

//custom components
import EventCard from './EventCard';
import EventsDialog from '../Components/EventDialog';
import UsersDataCard from '../Components/UsersDataCard';
import ReportCard from '../Components/ReportCard';
import FeedBack from '../Components/FeedBackCard';
import AddKeywordsPanel from '../Components/AddKeywordsPanel';


//material styling for components
const useStyles = makeStyles((theme) => ({
    root: {
        // height: '300px'
    },
    icons: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        // color: theme.palette.grey[500],

    },
    root2: {
        marginTop: theme.spacing(3),
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.light,
        marginBottom: theme.spacing(2),
        padding: theme.spacing(1)
    },
    content: {
        marginTop: theme.spacing(3)
    },
    fixedHeightPaper: {
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(3),
        height: 140,
    },
}));

function ExplorePanel(props) {
    const token = localStorage.getItem('token');
    const classes = useStyles();

    //state fo dialog open
    const [open, setOpen] = React.useState(false);

    //state for selected event to send to other components like dialog and sharing
    const [selectedEvent, setSelectedEvent] = React.useState([]);
    const [allEvents, setAllEvents] = React.useState([]);

    //state for pending events
    const [pendingEvents, setPendingEvents] = React.useState([]);
    const [activeEvents, setActiveEvents] = React.useState([]);
    const [users,setUsers] = React.useState([]);
    const [reports,setReports] = React.useState([]);
    const [feedBack,setFeedBack] = React.useState([]);
    //state for topbar
    const [value, setValue] = React.useState(0);


    //fetching the events from sever
    React.useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/api/admin/get_all_events', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                response.json().then(value => {
                    // console.log(value);
                    value.sort((a, b) => {
                        return new Date(a.posted_on) - new Date(b.posted_on);
                    })
                    setAllEvents(value);
                    setPendingEvents(value.filter(e => {
                        return e.status === "pending"
                    }));
                    setActiveEvents(value.filter(e => {
                        return e.status === "active"
                    }))
                })
            }
            else if (response.status === 401) {
                //if there is no token or token is wrong then it automatically moves to signin page
                localStorage.removeItem('token');
            }
        })
        fetch(process.env.REACT_APP_API_URL + '/api/admin/get_all_users', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                response.json().then(value => {
                    setUsers(value);
                })
            }
            else if (response.status === 401) {
                //if there is no token or token is wrong then it automatically moves to signin page
                localStorage.removeItem('token');
            }
        })
        fetch(process.env.REACT_APP_API_URL + '/api/admin/reports', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                response.json().then(value => {
                    setReports(value);
                })
            }
            else if (response.status === 401) {
                //if there is no token or token is wrong then it automatically moves to signin page
                localStorage.removeItem('token');
            }
        })
        fetch(process.env.REACT_APP_API_URL + '/api/admin/feedback', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'GET'
        }).then(response => {
            if (response.status === 200) {
                response.json().then(value => {
                    setFeedBack(value);
                })
            }
            else if (response.status === 401) {
                //if there is no token or token is wrong then it automatically moves to signin page
                localStorage.removeItem('token');
            }
        })
    }, [token])

    //if no token found then it is redireted to signin page     
    if (!token) {
        return <Redirect to="/"></Redirect>
    }

    // function to change the tab selcetion in tab nav bar
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //function to lose the dialog
    const handleClose = () => {
        setOpen(false);
    };

    //funtion to open the evnt dialog when clicked
    const handleEventClick = info => () => {
        setOpen(true);
        setSelectedEvent(info);
    }

    return (
        <div>
            <div className={classes.root}>
                <Grid container component="main">
                    <Grid item xs={12} sm={12} md={4} lg={2} >
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} >
                        <Grid container component="maim" spacing={1}>
                            <Grid item xs={12} md={4} lg={3} >
                                <Paper className={classes.fixedHeightPaper}>
                                    <Typography>Total Events</Typography>
                                    <Typography component="p" variant="h4">
                                        {allEvents.length}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3} >
                                <Paper className={classes.fixedHeightPaper}>
                                    <Typography>Total Active Events</Typography>
                                    <Typography component="p" variant="h4">
                                        {activeEvents.length}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={4} lg={3} >
                                <Paper className={classes.fixedHeightPaper}>
                                    <Typography>All Users</Typography>
                                    <Typography component="p" variant="h4">
                                        {users.length}
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Paper className={classes.root2}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="on">
                                <Tab label="Pending Events" />
                                <Tab label="Active Events" />
                                <Tab label="All Events" />
                                <Tab label="Users" />
                                <Tab label="Reports"></Tab>
                                <Tab label="FeedBack"></Tab>
                                <Tab label="Add Keywods"></Tab>
                            </Tabs>
                        </Paper>
                        <div className={classes.content}>
                            {value === 0 && <Grid container component="main" alignItems="center" spacing={1}>
                                {pendingEvents.map((event, index) => {
                                    return (<Grid item xs={12} sm={12} md={4} key={index}>
                                        <EventCard event={event} handleViewClick={handleEventClick(event)} name={event.name} ></EventCard>
                                    </Grid>)
                                })}

                            </Grid>}

                            {value === 1 && <Grid container component="main" alignItems="center" spacing={1}>
                                {activeEvents.map((event, index) => {
                                    return (<Grid item xs={12} sm={12} md={4} key={index}>
                                        <EventCard event={event} handleViewClick={handleEventClick(event)} name={event.name} ></EventCard>
                                    </Grid>)
                                })}

                            </Grid>}

                            {value === 2 && <Grid container component="main" alignItems="center" spacing={1}>
                                {allEvents.map((event, index) => {
                                    return (<Grid item xs={12} sm={12} md={4} key={index}>
                                        <EventCard event={event} handleViewClick={handleEventClick(event)} name={event.name} ></EventCard>
                                    </Grid>)
                                })}

                            </Grid>}
                            {
                                value === 3 && <UsersDataCard users={users}></UsersDataCard>
                            }
                            {value === 4 && <Grid container component="main" alignItems="center" spacing={1}>
                                {reports.map((report, index) => {
                                    return (<Grid item xs={12} sm={12} md={4} key={index}>
                                        <ReportCard report={report}></ReportCard>
                                    </Grid>)
                                })}

                            </Grid>}
                            {value === 5 && <Grid container component="main" alignItems="center" spacing={1}>
                                {feedBack.map((feedback, index) => {
                                    return (<Grid item xs={12} sm={12} md={4} key={index}>
                                        <FeedBack feedback={feedback}></FeedBack>
                                    </Grid>)
                                })}

                            </Grid>}
                           {
                               value === 6 && <AddKeywordsPanel></AddKeywordsPanel>
                           } 

                        </div>
                    </Grid>
                </Grid>
                <div>
                    <EventsDialog
                        open={open}
                        event={selectedEvent}
                        handleClose={handleClose}
                        name={selectedEvent.name}
                        startTime={selectedEvent.start_time}
                        endTime={selectedEvent.finish_time}
                        regEndTime={selectedEvent.registrationEndTime}
                        type={selectedEvent.eventType}
                        tags={selectedEvent.tags}
                        mode={selectedEvent.eventMode}
                        feeType={selectedEvent.feesType}
                    ></EventsDialog>
                </div>
            </div>
        </div>
    );
}

export default ExplorePanel;
