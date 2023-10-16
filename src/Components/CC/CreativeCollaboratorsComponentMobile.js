import { makeStyles } from '@material-ui/core';
import React from 'react';
import { logosData } from './logosData';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.primary.main,
        width: '100vw',
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

const CreativeCollaboratorsComponentMobile = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
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

export default CreativeCollaboratorsComponentMobile;
