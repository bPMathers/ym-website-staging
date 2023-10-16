import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    color: theme.palette.secondary.main,
  },
}));

const ProjectsPageComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>Projects Page is here baby!</div>
    </div>
  );
};

export default ProjectsPageComponent;
