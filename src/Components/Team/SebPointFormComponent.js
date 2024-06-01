import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '90%',
        maxWidth: '800px',
    },
    title: {
        color: theme.palette.common.gold,
        fontSize: '1.5em',
        letterSpacing: 3,
        marginBottom: '10px',
        marginTop: '30px',
    },
    pointRow: {
        marginBottom: '15px',
    },
    pointRowText: {
        fontSize: '0.95em',
    },
    point: {
        color: theme.palette.common.gold,
        marginRight: '8px',
    },
    gold: {
        color: theme.palette.common.gold,
    },
}));

const SebPointFormComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    Sébastien Laurendeau - Bio update coming soon!
                </Typography>
            </div>
        </div>
    );
};

export default SebPointFormComponent;
