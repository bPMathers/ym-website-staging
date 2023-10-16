import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  serviceDetailContainer: {
    // width: '100%',
    height: '600px',
    animation: `$fade 2000ms ease-out`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    // padding: '0px 80px',
    position: 'relative',

    '&::after': {
      content: '""',
      opacity: 0.2,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      zIndex: 2,
      // background: `url(${serviceEventBg})`,
      background: (props) => `url(${props.service.bgImg})`,
      backgroundSize: (props) => 'cover',
    },
  },
  '@keyframes fade': {
    '0%': {
      opacity: 0,
      // transform: 'translateX(-50%) translateY(-50%)',
    },
    '100%': {
      opacity: 1,
      // transform: 'translateX(0) translateY(0)',
    },
  },
  serviceTitle: {
    marginBottom: '20px',
  },
  serviceListItem: {
    letterSpacing: '8px',
    // marginBottom: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
    maxWidth: '700px',
    fontWeight: '300',
  },
}));

const ServiceDetailComponent = (props) => {
  const classes = useStyles(props);
  const { service } = props;

  return (
    <>
      <div className={classes.serviceDetailContainer}>
        <div className={classes.serviceTitle}>
          {/* <Typography variant={'h3'}>{service.title}</Typography> */}
        </div>
        {/* <div>{service.description}</div> */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '100%',
            padding: '80px 0px',
          }}
        >
          {service.serviceList.map((serviceItem, index) => {
            return (
              <div key={index}>
                <Typography className={classes.serviceListItem} variant={'h5'}>
                  {serviceItem}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceDetailComponent;
