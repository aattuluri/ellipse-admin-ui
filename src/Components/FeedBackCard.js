import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function FeedBackCard(props) {
    const classes = useStyles();
    const feedback = props.feedback;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                {feedback.description}
                </Typography>
                
                <Typography variant="body2" component="p">
                    User id: {feedback.user_id}
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
    );
}