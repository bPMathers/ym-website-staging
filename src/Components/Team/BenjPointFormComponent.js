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
    link: {
        color: '#F5EE9E',
        textDecoration: 'none',
        fontWeight: 700,
    },
}));

const BenjPointFormComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h2" className={classes.title}>
                MUSICAL EXPERIENCE HIGHLIGHTS
            </Typography>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Composer at YUL
                    MUSIC.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Music composer
                    within YUL MUSIC, where he composed music for the Cirque du
                    Soleil, Moment Factory, Sid Lee, Loto Québec, Bombardier
                    Aerospace, One Drop Foundation, The Los Angeles Airport
                    (LAX), the NBA, as well as commercial jingles such as SC
                    Johnson’s Glade North America television campaign.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Member of the
                    thrash/folk/roots band Canailles
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Musical director,
                    arranger, music composer and “remixer” for various
                    large-scale special events for Cirque du Soleil.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Co-composer, live
                    musician and sound engineer in the Rafales theatre piece
                    produced by Le Théâtre Incliné
                </Typography>
            </div>
        </div>
    );
};

export default BenjPointFormComponent;
