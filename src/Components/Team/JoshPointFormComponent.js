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
    red: {
        color: theme.palette.common.gold,
    },
}));

const JoshPointFormComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    Joshua Seth Eagan is a Studio Musician in Los Angeles and
                    has been part of The Steakhouse Studio in North Hollywood
                    for over 24 years now. His{' '}
                    <span className={classes.red}>
                        <a
                            className={classes.red}
                            href="https://www.facebook.com/pages/Studio-C-Joshua-Seth-Eagan-Productions/231120580322761"
                            target="_blank"
                            rel="noreferrer"
                        >
                            “Studio C”
                        </a>
                    </span>{' '}
                    musical facility is located on the top floor of The
                    Steakhouse. <span className={classes.red}>“Studio C”</span>{' '}
                    is where Joshua now produces many new artists and worked on
                    Grammy Award winning records. Over the years Joshua has
                    recorded / performed on sessions with{' '}
                    <span className={classes.red}>Pink</span>,{' '}
                    <span className={classes.red}>Candyman</span>,{' '}
                    <span className={classes.red}>Tim Armstrong</span>,{' '}
                    <span className={classes.red}>Sky Sweetnam</span>,{' '}
                    <span className={classes.red}>David Paich</span>,{' '}
                    <span className={classes.red}>Bernard Fowler</span>,{' '}
                    <span className={classes.red}>Daniel de los Reyes</span>,{' '}
                    <span className={classes.red}>Walfredo Reyes Jr</span>,{' '}
                    <span className={classes.red}>Jimmy Haslip</span>,{' '}
                    <span className={classes.red}>Alphonso Johnson</span>,{' '}
                    <span className={classes.red}>Neil Stubenhaus</span>,{' '}
                    <span className={classes.red}>Michael Landau</span>,{' '}
                    <span className={classes.red}>Bobby Watson</span>,{' '}
                    <span className={classes.red}>Sal Marquez</span>,{' '}
                    <span className={classes.red}>Kristine W</span>,{' '}
                    <span className={classes.red}>Bobby Kimball</span>,{' '}
                    <span className={classes.red}>Jean-Michel Byron</span>,
                    <span className={classes.red}> Masami Okui</span>,
                    <span className={classes.red}> Steve Lukather</span>,{' '}
                    <span className={classes.red}>Billy Sheehan</span>,{' '}
                    <span className={classes.red}>
                        James Baker &amp; Lonnie Jordan
                    </span>{' '}
                    of <span className={classes.red}>WAR</span>,{' '}
                    <span className={classes.red}>Andy Vargas</span> of{' '}
                    <span className={classes.red}>Santana</span>,{' '}
                    <span className={classes.red}>
                        Michael Sanders &amp; One Tribe Nation{' '}
                    </span>
                    and
                    <span className={classes.red}> Jeff Millar-Sax</span>.
                    Additionally, Joshua has performed on various soundtracks,
                    movies and television shows.
                </Typography>
            </div>
        </div>
    );
};

export default JoshPointFormComponent;
