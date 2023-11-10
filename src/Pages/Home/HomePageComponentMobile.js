import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { projectsData } from '../../Components/Projects/ProjectsData';
import NathanComponentMobile from '../../Components/Nathan/NathanComponentMobile';
import TeamComponentMobile from '../../Components/Team/TeamComponentMobile';
import ProjectsComponentMobile from '../../Components/Projects/ProjectsComponentMobile';
import CreativeCollaboratorsComponentMobile from '../../Components/CC/CreativeCollaboratorsComponentMobile';
import ContactPageComponentMobile from '../Contact/ContactPageComponentMobile';

const useStyles = makeStyles((theme) => ({
    container: {
        // maxWidth: '370px',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // marginTop: '60px',
    },
    mobileTitleSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '20px',
        marginTop: '60px',
    },
    mobileTitle: {
        // width: '100%',
        marginLeft: '15px',
        color: theme.palette.common.gold,
        // padding: '15px',
        textAlign: 'center',
        letterSpacing: '10px',
        textShadow: '#baa11c 1px 0 10px',
        fontWeight: 400,
        fontSize: '3rem',
    },
    mobileSubtitle: {
        lineHeight: 1.25,
        // padding: '15px',
        marginLeft: '15px',
        letterSpacing: '7px',
        fontSize: '0.8rem',
        fontWeight: 300,
        textAlign: 'center',
    },
}));

const HomePageComponentMobile = () => {
    const classes = useStyles();
    // const theme = useTheme();

    // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    // console.log('isMobile ---->', isMobile);

    return (
        <div className={classes.container}>
            <div className={classes.mobileTitleSection}>
                <Typography className={classes.mobileTitle} variant={'h1'}>
                    YUL MUSIC
                </Typography>
                <Typography
                    variant={'subtitle1'}
                    className={classes.mobileSubtitle}
                >
                    HEART AND SPIRIT FROM MONTRÉAL
                </Typography>
            </div>
            <NathanComponentMobile />
            <div id="teamSection" className={classes.teamSection}>
                <TeamComponentMobile />
            </div>
            <div id="projectsSection" className={classes.projectsSection}>
                <ProjectsComponentMobile projectsData={projectsData} />
            </div>
            <div
                id="contactSection"
                className={classes.creativeCollaboratorsSection}
            >
                <ContactPageComponentMobile />
            </div>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px',
                    marginBottom: '40px',
                }}
            >
                <Typography
                    variant="h5"
                    style={{
                        color: '#666',
                        fontSize: '18px',
                        fontWeight: 400,
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
            {/* <div
                id="creativeCollaboratorsSection"
                className={classes.creativeCollaboratorsSection}
            >
                <CreativeCollaboratorsComponentMobile />
            </div> */}
        </div>
    );
};

export default HomePageComponentMobile;
