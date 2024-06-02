import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NathanIndividualVideo from './NathanIndividualVideo';

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
    },
    videoRow: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
}));

const NathanComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.videoRow}>
                    <NathanIndividualVideo
                        width={'200px'}
                        hue={22}
                        marginRight={'20px'}
                    />
                    <NathanIndividualVideo
                        width={'200px'}
                        hue={122}
                        marginRight={'20px'}
                    />
                    <NathanIndividualVideo
                        width={'200px'}
                        hue={222}
                        marginRight={'0px'}
                    />
                </div>
            </div>
        </div>
    );
};

export default NathanComponent;
