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
    red: {
        color: theme.palette.common.gold,
    },
    link: {
        color: '#F5EE9E',
        textDecoration: 'none',
        fontWeight: 700,
    },
}));

const DannyPointFormComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span>Creative Development
                    at YUL MUSIC
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span> Whether touring the
                    world as band member with the three-time GRAMMY Award –
                    winning Zac Brown Band, embracing ingenuity with bold new
                    ideas, or inspiring the masses with musical performances,
                    there is little that remains a constant in the tremendous
                    life of this musical behemoth.
                </Typography>
            </div>
            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span> The scion in a
                    lineage of musicians, Daniel has the musical history and
                    chops, but it’s the rare mix of talent, visions, gumption
                    and connections upon which sets himself apart from his
                    peers.
                </Typography>
            </div>

            <div className={classes.pointRow}>
                <Typography variant="body2" className={classes.pointRowText}>
                    <span className={classes.point}>•</span> His resume is
                    chock-full of performing and recording credits that run the
                    gamut of those who respect and value the tremendous talent
                    that is Daniel including: Sting, David Foster, James Taylor,{' '}
                    Don Henley, Peter Frampton, Chicago, Withney Houston, Earth
                    Wind and Fire, Lionel Richie, Diana Ross, Donna Summer,{' '}
                    Faith Hill, The Killers, Sheryl Crow, Michael Franti,{' '}
                    Jennifer Lopez, Ricky Martin, Pitbull, and the list goes on.
                </Typography>
            </div>
        </div>
    );
};

export default DannyPointFormComponent;
