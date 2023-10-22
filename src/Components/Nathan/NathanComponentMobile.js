import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import nathan5 from '../../assets/Nathan/viz_05.mp4';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        // alignItems: 'center',
        // width: '100%',
    },
    videoRow: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    // .parent > *:not(:last-child) {
    //     margin-right: 20px;  /* Adjust this value as needed */
    // }

    videoItem: {
        '&:not(:last-child)': {
            marginRight: '20px', // Adjust this value as needed
        },
    },
}));

const NathanComponentMobile = () => {
    const classes = useStyles();
    const videoWidth = '150px';

    useEffect(() => {
        // document.querySelector('#nathanVideo1').playbackRate = 1;
        // document
        //     .querySelector('#nathanVideo1mobile')
        //     .addEventListener('touchstart', () => {
        //         console.log('----------fdssf------------');
        //         document.querySelector('#nathanVideo1mobile').play();
        //     });
    }, []);

    // const playVid = () => document.querySelector('#nathanVideo1').play();

    return (
        <div className={classes.container}>
            <div
                className={classes.content}
                // onClick={() => playVid()}
            >
                <div className={classes.videoRow}>
                    <video
                        className={classes.videoItem}
                        id="nathanVideo1a"
                        src={nathan5}
                        width={videoWidth}
                        autoPlay={true}
                        loop={true}
                        muted
                        style={{
                            filter: 'hue-rotate(22deg)',
                        }}
                    />
                    <video
                        className={classes.videoItem}
                        id="nathanVideo1b"
                        src={nathan5}
                        width={videoWidth}
                        autoPlay={true}
                        loop={true}
                        muted
                        style={{
                            filter: 'hue-rotate(222deg)',
                        }}
                    />
                    <video
                        className={classes.videoItem}
                        id="nathanVideo1c"
                        src={nathan5}
                        width={videoWidth}
                        autoPlay={true}
                        loop={true}
                        muted
                        style={{
                            filter: 'hue-rotate(322deg)',
                        }}
                    />
                </div>
                <Typography
                    variant="h5"
                    style={{
                        color: 'white',
                        fontSize: '12px',
                    }}
                >
                    Touch Designer: Nathan Roy
                </Typography>
            </div>
        </div>
    );
};

export default NathanComponentMobile;
