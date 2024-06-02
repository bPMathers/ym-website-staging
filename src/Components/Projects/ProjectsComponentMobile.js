import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectComponentMobile from './ProjectComponentMobile';
import { Button } from '@material-ui/core';
import ProjectDetailComponentMobile from './ProjectDetailComponentMobile';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        color: theme.palette.secondary.main,
    },
    projectsListContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    projectsList: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '40px',
    },
    projectContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    projectTitle: {
        fontSize: 14,
        fontWeight: 400,
        marginTop: 5,
        marginBottom: 30,
    },
    moreButton: {
        color: 'white',
        border: '1px solid white',
        marginBottom: 40,
    },
}));

const ProjectsComponentMobile = ({ projectsData }) => {
    // TODO: fix copying this array to have a separate instance
    // const projectsData = {}...props?.projectsData];

    const classes = useStyles();

    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(undefined);

    const handleOnDetailClose = () => {
        setDetailOpen(false);
    };

    const handleProjectClick = (projectId) => () => {
        const project = projectsData.find(
            (project) => project.id === projectId
        );
        setDetailOpen(true);
        setSelectedProject(project);
    };

    const handleNavigate = (direction) => {
        const currentProjectIndex = projectsData.findIndex(
            (project) => project.id === selectedProject.id
        );
        if (direction === 'left') {
            setDetailOpen(true);
            if (currentProjectIndex === 0) {
                setSelectedProject(projectsData[projectsData.length - 1]);
            } else {
                setSelectedProject(projectsData[currentProjectIndex - 1]);
            }
        } else if (direction === 'right') {
            if (currentProjectIndex === projectsData.length - 1) {
                setSelectedProject(projectsData[0]);
            } else {
                setSelectedProject(projectsData[currentProjectIndex + 1]);
            }
        }
    };

    const handleSelectItemFromList = (index) => {
        setSelectedProject(projectsData[index]);
    };

    return (
        <>
            <ProjectDetailComponentMobile
                onClose={handleOnDetailClose}
                open={detailOpen}
                project={selectedProject}
                onNavigate={handleNavigate}
                onSelectItemFromList={handleSelectItemFromList}
                projectsData={projectsData}
            />
            <div className={classes.container} open={detailOpen}>
                <div className={classes.projectsListContainer}>
                    <div className={classes.projectsList}>
                        {projectsData
                            .sort((a, b) => a.id - b.id)
                            .map((project) => {
                                return (
                                    <div
                                        className={classes.projectContainer}
                                        onClick={handleProjectClick(project.id)}
                                        key={project.id}
                                    >
                                        <ProjectComponentMobile
                                            project={project}
                                        />
                                        {/* <Typography
                                            className={classes.projectTitle}
                                        >
                                            {project.title}
                                        </Typography> */}
                                    </div>
                                );
                            })}
                    </div>
                    <Button
                        className={classes.moreButton}
                        onClick={handleProjectClick(projectsData[0].id)}
                    >
                        SEE ALL PROJECTS
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ProjectsComponentMobile;
