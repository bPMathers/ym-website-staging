import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import nathan4 from '../../assets/Nathan/viz_04.mp4';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // marginLeft: '10px',
        // width: '80%',
        // filter: 'invert(1)',
    },
    contactsContainer: {
        margin: '0px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contactItemGroup: {
        margin: '20px 100px',
    },
    contactItem: {
        fontSize: '24px',
        textTransform: 'uppercase',
        // textAlign: 'center',
    },
}));

const ContactComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            {/* <video src={nathan4} width={'250px'} autoPlay={true} loop={true} muted /> */}
            <div className={classes.contactsContainer}>
                <div className={classes.contactItemGroup}>
                    <Typography className={classes.contactItem} variant="h2">
                        christian@yulmusic.com
                    </Typography>
                    <Typography className={classes.contactItem} variant="h2">
                        514.808.2868
                    </Typography>
                </div>
                <div className={classes.contactItemGroup}>
                    <Typography className={classes.contactItem} variant="h2">
                        daniel@yulmusic.com
                    </Typography>
                    <Typography className={classes.contactItem} variant="h2">
                        818.795.6043
                    </Typography>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
