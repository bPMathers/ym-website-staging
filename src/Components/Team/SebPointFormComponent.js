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

const SebPointFormComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h2" className={classes.title}>
                PROFESSIONAL HIGHLIGHTS
            </Typography>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Composer - Musical
                    Director at YUL MUSIC.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Founder of Mamūt
                    Entertainments Ltd. A record label and media creation
                    company based in Las Vegas.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Cofounder or Trigger
                    Records, a Canadian record label. Under licence with Warner
                    Music Canada.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Composer , music
                    director and musician for Cirque du Soleil for over 20
                    years.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Musical director at
                    Ulalena in Hawaii.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Musician and
                    producer for EMI, Warner Music Canada and Donald K Donald.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Music editor for
                    « Sagwa the Chinese Siamese Cat » tv series produced by
                    Sesame Workshop and Cinegroup.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Composer and
                    producer for various Advertising campaign, jingles and TV
                    show themes.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Music producer and
                    executive producer for various albums.
                </Typography>
            </div>
        </div>
    );
};

export default SebPointFormComponent;
