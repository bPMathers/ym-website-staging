import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TeamComponent from '../../Components/Team/TeamComponent';
import { Typography } from '@material-ui/core';
import ProjectsComponent from '../../Components/Projects/ProjectsComponent';
import NathanComponent from '../../Components/Nathan/NathanComponent';
import { projectsData } from '../../Components/Projects/ProjectsData';
import ContactPageComponent from '../Contact/ContactPageComponent';
import MoonComponentMobile from '../../Components/Moon/MoonComponentMobile';

const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'stretch',
        // paddingTop: '3px',
        marginBottom: '30px',
    },
    title: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        // marginLeft: '15px',
        color: theme.palette.common.gold,
    },
    subtitleContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        padding: '2px 5px',
        marginBottom: '30px',
    },
    subtitle: {
        // lineHeight: 1.25,
        // marginLeft: '15px',
        letterSpacing: '9px',
        fontSize: '2rem',
        fontWeight: 100,
        color: theme.palette.secondary,
    },
    teamSection: {
        marginBottom: '50px',
    },
    servicesSection: {
        marginBottom: '50px',
    },
    projectsSection: {
        marginBottom: '50px',
    },
    contactSection: {
        marginBottom: '50px',
    },
}));

const HomePageComponent = () => {
    const classes = useStyles();

    return (
        <div id="top">
            <div className={classes.titleContainer}>
                <MoonComponentMobile />
                <div className={classes.title}>
                    <Typography
                        variant={'h1'}
                        style={{
                            letterSpacing: '10px',
                            textShadow: '#baa11c 1px 0 10px',
                            fontWeight: 400,
                        }}
                    >
                        YUL MUSIC
                    </Typography>
                </div>
                <div className={classes.subtitleContainer}>
                    <Typography
                        // variant={'subtitle1'}
                        className={classes.subtitle}
                    >
                        HEART AND SPIRIT FROM MONTRÉAL
                    </Typography>
                </div>
                <NathanComponent />
            </div>

            <div id="teamSection" className={classes.teamSection}>
                <TeamComponent />
            </div>
            <div id="projectsSection" className={classes.projectsSection}>
                <ProjectsComponent projectsData={projectsData} />
            </div>
            <div id="contactSection" className={classes.contactSection}>
                <ContactPageComponent />
            </div>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px',
                }}
            >
                <Typography
                    variant="h5"
                    style={{
                        color: '#666',
                        fontSize: '18px',
                        fontWeight: 400,
                        // fontFamily: '',
                    }}
                >
                    Touch Designer videos by{' '}
                    <a
                        href="https://www.instagram.com/nocturne.idae/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#FFD700' }}
                    >
                        Nathan Roy
                    </a>{' '}
                </Typography>
            </div>
            <div style={{ height: '50px' }}></div>
        </div>
    );
};

export default HomePageComponent;
