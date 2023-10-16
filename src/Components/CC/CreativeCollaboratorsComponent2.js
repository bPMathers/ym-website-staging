import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { logosData } from './logosData';
import Marquee from 'react-fast-marquee';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  container: {
    // height: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    width: '100vw',
  },
  logosContainer: {
    // height: '200px',

    width: '80%',
    // width: '200px',
    display: 'flex',
    //  flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',

    // animation: 'marquee 3.5s infinite linear',
  },
  // marquee: {
  //   // padding: 24px 0;
  //   // color: #fff;
  //   // white-space: nowrap;
  //   // '&:after': {
  //   // }
  // },
  // '@keyframes marquee': {
  //   '0%': {
  //     transform: 'translateX(0)',
  //   },
  //   '100%': {
  //     transform: 'translateX(-50%)',
  //   },
  // },
  logo: {
    margin: '4px 50px',
    filter: 'contrast(0) grayscale(100%)',
    // filter: 'grayscale(100%)',
  },
  invert: {
    // margin: '4px 20px',
    filter: 'invert(1)',
  },
}));

const CreativeCollaboratorsComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <div className={classes.title}>
        <Typography variant="h4">Creative Collaborators</Typography>
      </div> */}
      {/* <div className={classes.logosContainer}> */}
      <Marquee gradient={false} speed={80}>
        {logosData.map((logo, index) => {
          return (
            <div
              key={index}
              className={clsx(
                classes.logo,
                logo.invert ? classes.invert : undefined
              )}
            >
              <img src={logo.img} alt={'logo'} height={'125px'} />
            </div>
          );
        })}
      </Marquee>
    </div>
    // </div>
  );
};

export default CreativeCollaboratorsComponent;
