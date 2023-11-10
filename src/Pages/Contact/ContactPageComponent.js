import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.main,
    },
    title: {
        color: theme.palette.secondary.main,
    },
    contactItemGroup: {
        // margin: '20px 100px',
    },
    contactItem: {
        fontSize: '16px',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: '10px',
        fontWeight: 100,
    },
    contactItemBtn: {
        display: 'flex',
        padding: '0px',
    },
    separator: {
        backgroundColor: theme.palette.common.gold,
        height: '3px',
        width: '30px',
        margin: '30px 0',
    },
}));

const ContactPageComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.contactItemGroup}>
                <Typography
                    className={classes.contactItem}
                    variant="h2"
                    style={{ fontWeight: 300 }}
                >
                    MONTRÉAL
                </Typography>
                <Typography
                    className={classes.contactItem}
                    variant="h2"
                    style={{ fontWeight: 700 }}
                >
                    CHRISTIAN LAGUEUX
                </Typography>
                <Button
                    target="_top"
                    rel="noopener noreferrer"
                    href={`mailto:christian@yulmusic.com`}
                    className={classes.contactItemBtn}
                >
                    <Typography className={classes.contactItem} variant="h2">
                        christian@yulmusic.com
                    </Typography>
                </Button>
            </div>
            <div className={classes.separator}></div>
            <div className={classes.contactItemGroup}>
                <Typography
                    className={classes.contactItem}
                    variant="h2"
                    style={{ fontWeight: 300 }}
                >
                    LOS ANGELES
                </Typography>
                <Typography
                    className={classes.contactItem}
                    variant="h2"
                    style={{ fontWeight: 700 }}
                >
                    DANIEL DE LOS REYES
                </Typography>
                <Button
                    target="_top"
                    rel="noopener noreferrer"
                    href={`mailto:daniel@yulmusic.com`}
                    className={classes.contactItemBtn}
                >
                    <Typography className={classes.contactItem} variant="h2">
                        daniel@yulmusic.com
                    </Typography>
                </Button>
            </div>
        </div>
    );
};

export default ContactPageComponent;
