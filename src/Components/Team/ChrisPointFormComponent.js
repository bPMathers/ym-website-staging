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

const ChrisPointFormComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h2" className={classes.title}>
                PROFESSIONAL EXPERIENCE ON THE INTERNATIONAL MUSIC SCENE
            </Typography>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Founder and business
                    developer of YUL MUSIC, a Montreal and Los Angeles-based
                    company, dedicated to music creation and audio content
                    production.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Music composer
                    within YUL MUSIC, where he composed, arranged and recorded
                    music for the Cirque du Soleil, Moment Factory, The Montreal
                    Canadiens, The Los Angeles Airport (LAX), The NBA, The Dubai
                    Mall, Infinity, Google, Bulgari, as well as commercial
                    jingles such as SC Johnson’s Glade North America television
                    campaign and soundtracks for various shows, and more
                    recently the opening soundtrack for the new Zac Brown Band’s
                    Great American Road Trip Tour and Micheal Easton’s new short
                    film, First Strike Butcher Knife.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Since 2000, Guy
                    Laliberté’s musician for private and special events around
                    the world.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Danny Elfman
                    assistant with Thierry Angers in
                    <em>Iris, </em>a Cirque du Soleil show in Los Angeles.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Musical director,
                    arranger, music composer and “remixer” for various
                    large-scale special events for <i>Cirque du Soleil.</i>
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Responsible for the
                    recording studio located at Cirque du Soleil headquarters
                    during the summer seasons.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Permanent member of
                    Drum Jungle, based in Los Angeles, with some of the best
                    musicians in the industry from Los Angeles and New York,
                    like Daniel de los Reyes (Sting), Horacio Hernandez
                    (Santana), Luisito Quintero (Richard Bona), Ron Powell
                    (Madonna) and Bashiri Johnson (Michael Jackson).
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Accompanied numerous
                    international artists such as Mc Solaar, Francis Cabrel,
                    Ricky Martin, Lionel Richie, Bono.{' '}
                    <a
                        href="https://vimeo.com/channels/1050317/videos/sort:preset/format:detail"
                        target="_blank"
                        rel="noreferrer"
                        className={classes.link}
                    >
                        <em>Vimeo Link</em>
                    </a>
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Several performances
                    at the NAMM Show in Los Angeles for sponsors such as DW
                    Drums, Latin Percussion, Sabian Cymbals, Regal Tip Sticks,
                    and for the launch of ProTools, the famous professional DAW
                    (Digital Audio Workstation).
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Musician for
                    numerous world-renowned DJ’s: Louie Vega, Erik Morillo,
                    Behrouz, Roger Sanchez, David Morales.
                </Typography>
            </div>
            <Typography variant="h2" className={classes.title}>
                PROFESSIONAL EXPERIENCE ON THE LOCAL MUSIC SCENE
            </Typography>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Accompanist or
                    stand-in musician for TV stations house bands: Télé-Québec,
                    Radio-Canada and TVA.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Accompanist for
                    numerous artists on the Québec/France scene, such as
                    Notre-Dame de Paris, Ariane Moffatt,&nbsp;Daniel Bélanger
                    and Gilles Vigneault, with whom he worked for 12 years.
                </Typography>
            </div>
        </div>
    );
};

export default ChrisPointFormComponent;
