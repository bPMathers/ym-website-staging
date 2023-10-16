import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '300px',
        height: '450px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        display: 'flex',
        margin: '30px',
        '&:hover': {
            cursor: 'pointer',
        },
    },

    hoverContainer: {
        position: 'absolute',
        bottom: '20%',
        right: 0,
        opacity: '0.3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '450px',
        width: '100%',
        textDecoration: 'none',
    },
    opacity: {
        opacity: 0.2,
    },
    name: {
        fontSize: '2em',
        textAlign: 'center',
        marginBottom: '5px',
        fontWeight: 500,
    },
    role: {
        fontSize: '0.8em',
        textAlign: 'center',
    },
    separator: {
        backgroundColor: theme.palette.common.gold,
        height: '3px',
        width: '30px',
        marginTop: '3px',
        marginBottom: '10px',
        opacity: 0.8,
    },
}));

const TeamMemberComponent = (props) => {
    const { teamMember } = props;
    const classes = useStyles();

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className={classes.container}>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}
            >
                <div>
                    <img
                        className={isHovering ? classes.opacity : undefined}
                        src={teamMember.image}
                        alt="1"
                        height="450px"
                    />
                </div>
                {isHovering && (
                    <Fade
                        in={isHovering}
                        style={{ transitionTimingFunction: 'ease-in' }}
                    >
                        <div
                            className={classes.hoverContainer}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Typography className={classes.name} variant={'h2'}>
                                {teamMember.name}
                            </Typography>
                            <div className={classes.separator}></div>
                            <Typography
                                className={classes.role}
                                variant={'subtitle1'}
                            >
                                {teamMember.role}
                            </Typography>
                        </div>
                    </Fade>
                )}
            </div>
        </div>
    );
};

export default TeamMemberComponent;
