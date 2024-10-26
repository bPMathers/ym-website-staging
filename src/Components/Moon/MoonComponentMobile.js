import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({}));

const MoonComponentMobile = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <iframe
                title="Moon-Blend"
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                src="https://sketchfab.com/models/e706ce13b917471797479ef1f6dccc0c/embed"
            >
                {' '}
            </iframe>
        </div>
    );
};

export default MoonComponentMobile;
