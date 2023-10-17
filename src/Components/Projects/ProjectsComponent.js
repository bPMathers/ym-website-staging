import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { projectsData } from './ProjectsData';
import ProjectDetailComponent from './ProjectDetailComponent';
import ProjectComponent from './ProjectComponent';
import { Input, InputLabel } from '@material-ui/core';

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
    },
    rowsInput: {
        backgroundColor: '#fff',
        color: 'red',
    },
}));

const ProjectsComponent = ({ projectsData }) => {
    const classes = useStyles();

    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(undefined);
    const [rows, setRows] = useState(3);

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
            <ProjectDetailComponent
                onClose={handleOnDetailClose}
                open={detailOpen}
                project={selectedProject}
                onNavigate={handleNavigate}
                onSelectItemFromList={handleSelectItemFromList}
                projectsData={projectsData}
            />
            <InputLabel htmlFor="rows-input">Rangées</InputLabel>
            <Input
                id="rows-input"
                onChange={(e) => setRows(e.target.value)}
                className={classes.rowsInput}
                value={rows}
            />
            <div className={classes.container} open={detailOpen}>
                <div className={classes.projectsListContainer}>
                    <div className={classes.projectsList}>
                        {projectsData
                            .sort((a, b) => a.id - b.id)
                            .slice(0, rows * 3)
                            .map((project) => {
                                return (
                                    <div
                                        onClick={handleProjectClick(project.id)}
                                        key={project.id}
                                    >
                                        <ProjectComponent project={project} />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsComponent;
