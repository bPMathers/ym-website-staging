import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { logosData } from '../../Components/CC/logosData';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        width: '100vw',
        marginTop: '60px',
        // height: '100vh',
    },
    logosContainer2: {
        width: '95%',
        display: 'flex',
        flexWrap: 'wrap',
    },
    logo: {
        margin: '10px 15px',
        filter: 'contrast(0) grayscale(100%)',
    },
    invert: {
        filter: 'invert(1)  brightness(60%) grayscale(100%)',
    },
}));

const CCPageMobile = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.container}>
            <Typography
                variant={'h3'}
                style={{
                    marginBottom: '60px',
                    color: theme.palette.common.gold,
                    fontSize: '1.5rem',
                    fontWeight: 400,
                }}
            >
                Creative Collaborators
            </Typography>
            <div className={classes.logosContainer2}>
                {logosData.map((logo, index) => {
                    return (
                        <div
                            key={index}
                            className={clsx(
                                classes.logo,
                                logo.invert ? classes.invert : undefined
                            )}
                            style={{
                                scale: logo.scale ? logo.scale : undefined,
                            }}
                        >
                            <img src={logo.img} alt={'logo'} height={'40px'} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CCPageMobile;
