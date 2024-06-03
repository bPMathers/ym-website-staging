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

const JoshPointFormComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h2" className={classes.title}>
                PROFESSIONAL HIGHLIGHTS
            </Typography>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    Joshua Seth Eagan is a Studio Musician in Los Angeles and
                    has been part of The Steakhouse Studio in North Hollywood
                    for over 24 years now. His{' '}
                    <a
                        className={classes.gold}
                        href="https://www.facebook.com/pages/Studio-C-Joshua-Seth-Eagan-Productions/231120580322761"
                        target="_blank"
                        rel="noreferrer"
                    >
                        “Studio C”
                    </a>{' '}
                    musical facility is located on the top floor of The
                    Steakhouse. “Studio C” is where Joshua now produces many new
                    artists and worked on Grammy Award winning records. Over the
                    years Joshua has recorded / performed on sessions with Pink,{' '}
                    Candyman, Tim Armstrong, Sky Sweetnam, David Paich, Bernard
                    Fowler, Daniel de los Reyes, Walfredo Reyes Jr, Jimmy
                    Haslip, Alphonso Johnson, Neil Stubenhaus, Michael Landau,{' '}
                    Bobby Watson, Sal Marquez, Kristine W, Bobby Kimball,{' '}
                    Jean-Michel Byron, Masami Okui, Steve Lukather, Billy
                    Sheehan, James Baker &amp; Lonnie Jordan of WAR, Andy Vargas
                    of Santana, Michael Sanders &amp; One Tribe Nation and Jeff
                    Millar-Sax. Additionally, Joshua has performed on various
                    soundtracks, movies and television shows.
                </Typography>
            </div>
        </div>
    );
};

export default JoshPointFormComponent;
