import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
const memberPhotoRatio = 1.5;

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        display: 'flex',
        margin: '10px',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    opacity: {
        opacity: 0.2,
    },
    name: {
        fontSize: '2em',
        textAlign: 'center',
        marginBottom: '5px',
        fontWeight: 500,
    },
    role: {
        fontSize: '0.8em',
        textAlign: 'center',
    },
    separator: {
        backgroundColor: theme.palette.common.gold,
        height: '3px',
        width: '30px',
        marginTop: '3px',
        marginBottom: '10px',
        opacity: 0.8,
    },
}));

const TeamMemberComponentMobile = (props) => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [memberPhotoDimensions, setMemberPhotoDimensions] = useState({
        width: (dimensions.width - 80) / 2,
        height: ((dimensions.width - 80) / 2) * memberPhotoRatio,
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize, false);
    }, []);

    useEffect(() => {
        if (dimensions.width < dimensions.height) {
            setMemberPhotoDimensions({
                memberPhotoWidth: (dimensions.width - 80) / 2,
                memberPhotoHeight:
                    ((dimensions.width - 80) / 2) * memberPhotoRatio,
            });
        } else {
            const newHeight = dimensions.height - 80;
            setMemberPhotoDimensions({
                memberPhotoWidth: newHeight / memberPhotoRatio,
                memberPhotoHeight: newHeight,
            });
        }
    }, [dimensions]);

    const { teamMember } = props;
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div style={{ position: 'relative' }}>
                <div>
                    <img
                        src={teamMember.image}
                        alt="1"
                        height={memberPhotoDimensions.memberPhotoHeight}
                    />
                </div>
            </div>
        </div>
    );
};

export default TeamMemberComponentMobile;
