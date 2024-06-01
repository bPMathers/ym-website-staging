import React, { useEffect, useState } from 'react';
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
        padding: '5px',
    },
}));

const ProjectsComponent = ({ projectsData }) => {
    const classes = useStyles();

    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(undefined);
    const [rows, setRows] = useState(2);
    const [items, setItems] = useState(9);
    const [perRow, setPerRow] = useState(5);

    useEffect(() => {
        setItems(rows * perRow);
    }, [rows, perRow]);

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

    // function concatArrayInPlace(arr, times) {
    //     if (times <= 1) {
    //         return arr; // No need to concatenate if times is 1 or less
    //     }

    //     for (let i = 1; i < times; i++) {
    //         arr = arr.concat(arr); // Concatenate the array with itself
    //     }

    //     return arr;
    // }

    // const nineFirstProj = projectsData.sort((a, b) => a.id - b.id).slice(0, 9);

    // const getProjs = () =>
    //     concatArrayInPlace(nineFirstProj, items / 9).slice(0, items);

    const getProjs = () =>
        projectsData.sort((a, b) => a.id - b.id).slice(0, 20);

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
            {/* <div
                style={{
                    paddingLeft: '20px',
                    width: '300px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100px',
                    }}
                >
                    <InputLabel htmlFor="rows-input">rangees</InputLabel>
                    <Input
                        id="rows-input"
                        onChange={(e) => setRows(e.target.value)}
                        className={classes.rowsInput}
                        value={rows}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100px',
                    }}
                >
                    <InputLabel htmlFor="per-row-input">Par rangee</InputLabel>
                    <Input
                        id="per-row-input"
                        onChange={(e) => setPerRow(e.target.value)}
                        className={classes.rowsInput}
                        value={perRow}
                    />
                </div>
            </div> */}
            <div className={classes.container} open={detailOpen}>
                <div className={classes.projectsListContainer}>
                    <div className={classes.projectsList}>
                        {getProjs().map((project) => {
                            return (
                                <div
                                    onClick={handleProjectClick(project.id)}
                                    key={project.id}
                                >
                                    <ProjectComponent
                                        project={project}
                                        projGridWidth={perRow}
                                    />
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
