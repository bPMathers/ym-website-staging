import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Fade } from '@material-ui/core';

const projectWidth = window.innerWidth * 0.88;
const projectHeight = projectWidth / 1.53;
// const projectHeight = "58";

const useStyles = makeStyles((theme) => ({
    container: {
        // width: 'calc(100vw / 3 - 10px)',
        // height: 'calc((100vw / 3) / 1.53)',
        minWidth: projectWidth,
        minHeight: projectHeight,
        backgroundColor: theme.palette.primary.main,
        background: (props) => `url(${props?.project?.bgImg})`,
        backgroundSize: (props) => 'cover',
        margin: '2px',
        display: 'flex',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    hoverContainer: {
        minWidth: projectWidth,
        minHeight: projectHeight,
        backgroundColor: 'rgba(13, 13, 13, 0.85)',
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc((100vw / 3) / 1.53)',
        width: 'calc(100vw / 3 - 10px)',
        textDecoration: 'none',
    },
    background: {
        minWidth: projectWidth,
        minHeight: projectHeight,
        width: 'calc(100vw / 3 - 10px)',
        height: 'calc((100vw / 3) / 1.53)',

        backgroundColor: theme.palette.primary.main,
        background: (props) => `url(${props?.project?.bgImg})`,

        backgroundSize: (props) => 'cover',
    },
    separator: {
        backgroundColor: theme.palette.common.gold,
        height: '3px',
        width: '30px',
        margin: '10px 0',
    },
    opacity: {
        opacity: 0.2,
    },
    title: {
        fontSize: '2em',
        textAlign: 'center',
        marginBottom: '5px',
        fontWeight: 500,
    },
    subtitle: {
        padding: '0px 2em',
        fontSize: '1.2em',
        textAlign: 'center',
    },
}));

const ProjectComponentMobile = (props) => {
    const { project } = props;
    const classes = useStyles(props);

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
            <div
                className={classes.container}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ position: 'relative' }}
            >
                <div className={classes.background}></div>
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
                            <Typography
                                className={classes.title}
                                variant={'h2'}
                            >
                                {/* {project.altTitle ?? project.title} */}
                                {project.title}
                            </Typography>
                            <div className={classes.separator}></div>
                            <Typography
                                className={classes.subtitle}
                                variant={'subtitle2'}
                            >
                                {project.subtitle}
                            </Typography>
                        </div>
                    </Fade>
                )}
            </div>
        </>
    );
};

export default ProjectComponentMobile;
