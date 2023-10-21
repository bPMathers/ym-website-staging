import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TeamComponent from '../../Components/Team/TeamComponent';
import { Typography } from '@material-ui/core';
import ProjectsComponent from '../../Components/Projects/ProjectsComponent';
import NathanComponent from '../../Components/Nathan/NathanComponent';
import CreativeCollaboratorsComponent from '../../Components/CC/CreativeCollaboratorsComponent';
import { projectsData } from '../../Components/Projects/ProjectsData';

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
    creativeCollaboratorsSection: {
        marginTop: '70px',
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
            <div
                id="creativeCollaboratorsSection"
                className={classes.creativeCollaboratorsSection}
            >
                <CreativeCollaboratorsComponent />
            </div>
            <div style={{ height: '100px' }}></div>
        </div>
    );
};

export default HomePageComponent;
