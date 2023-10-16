import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ServiceDetailComponent from './ServiceDetailComponent';
import clsx from 'clsx';

import serviceEventBg from '../../assets/Services/eventsBg-1200px-40p.jpg';
import serviceStudioBg from '../../assets/Services/studioBg-1200px-40p.jpg';
import serviceMusicBg from '../../assets/Services/musicBg-1200px-40p.jpg';
import serviceTalentBg from '../../assets/Services/talentBg-1200px-40p.jpg';
import serviceSoundDesignBg from '../../assets/Services/soundDesignBg-1200px-40p.jpg';
import serviceManagementBg from '../../assets/Services/managementBg-1200px-40p.jpg';

const lorem =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.';

const services = [
  {
    id: '1',
    title: 'Music',
    description: lorem,
    serviceList: [
      'Composition',
      'Production',
      'Audio Branding / Signature',
      'Music Supervision',
      'Musical Arrangements',
      'Interactive Music and Implementation',
      'Remixes',
      'Orchestration',
      'MIDI Orchestration',
    ],
    bgImg: serviceMusicBg,
  },
  {
    id: '2',
    title: 'Studio',
    description: lorem,
    serviceList: [
      'Preproduction',
      'Postproduction',
      'Audio Restoration',
      'Voice Over',
      'Mix',
      'Mastering',
    ],
    bgImg: serviceStudioBg,
  },
  {
    id: '3',
    title: 'Sound Design',
    description: lorem,
    serviceList: [
      'Sonic Branding',
      'Sound Design & Implementation',
      'Sound Editing',
    ],
    bgImg: serviceSoundDesignBg,
  },
  {
    id: '4',
    title: 'Talent Services',
    description: lorem,
    serviceList: [
      'Voice Casting',
      'Voice Direction',
      'Musician Casting',
      'Musician Direction',
    ],
    bgImg: serviceTalentBg,
  },
  {
    id: '5',
    title: 'Events',
    description: lorem,
    serviceList: [
      'Worldwide Production Coordination',
      'On Set Supervision',
      'Band Leading',
      'Charting',
      'Ableton Live, QLab and Reaper playback session design and operation',
    ],
    bgImg: serviceEventBg,
  },
  {
    id: '6',
    title: 'Management',
    description: lorem,
    serviceList: [
      'Music Licensing',
      'Publishing',
      'Artist Liaison',
      'Talent Contract Management',
    ],
    bgImg: serviceManagementBg,
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    // width: '100vw',
    // minWidth: '1200px',
    // minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.secondary.main,
  },
  sectionTitle: {
    textAlign: 'center',
    padding: '20px 0',
    marginBottom: '25px',
    color: theme.palette.accent.main,
  },
  columns: {
    display: 'flex',
  },
  leftColumn: {
    // borderRight: `1px solid ${theme.palette.secondary.main}`,
    width: '20%',
    minWidth: '300px',
  },
  rightColumn: {
    // border: `1px solid ${theme.palette.secondary.main}`,
    width: '80%',
    minWidth: '600px',
  },
  servicesList: {
    padding: '0 20px',
  },
  serviceItemTitle: {
    padding: '10px 20px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: 'max-content',
    // borderLeft: '1px solid white',
  },
  selectedServiceTab: {
    borderLeft: `2px solid ${theme.palette.accent.main}`,
    height: '20px',
    minWidth: '8px',
    animation: `$fade 1500ms ease-out`,
  },
  selectedserviceItemTitle: {
    color: theme.palette.accent.main,
    animation: `$slide 1000ms `,
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

  '@keyframes slide': {
    '0%': {
      // opacity: 0,
      transform: 'translateX(-5%) translateY(0%)',
    },
    '100%': {
      // opacity: 1,
      transform: 'translateX(0) translateY(0)',
    },
  },
}));

const ServicesComponent = () => {
  const classes = useStyles();
  const [selectedService, setselectedService] = useState(services[0]);

  const handleServiceSelection = (index) => () => {
    setselectedService(services[index]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.sectionTitle}>
        <Typography variant={'h1'}>SERVICES</Typography>
      </div>
      <div className={classes.columns}>
        <div className={classes.leftColumn}>
          <div className={classes.servicesList}>
            {services.map((service, index) => (
              <div
                style={{ display: 'flex', alignItems: 'center' }}
                key={index}
                onClick={handleServiceSelection(index)}
              >
                <div
                  className={
                    service.id === selectedService.id
                      ? classes.selectedServiceTab
                      : ''
                  }
                ></div>
                <Typography
                  className={clsx(
                    classes.serviceItemTitle,
                    service.id === selectedService.id
                      ? classes.selectedserviceItemTitle
                      : ''
                  )}
                  variant={'h6'}
                >
                  {service.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.rightColumn}>
          <ServiceDetailComponent
            key={selectedService.title}
            service={selectedService}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
