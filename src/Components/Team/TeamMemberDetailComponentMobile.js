import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ChrisPointFormComponent from './ChrisPointFormComponent';
import BenjPointFormComponent from './BenjPointFormComponent';
import DannyPointFormComponent from './DannyPointFormComponent';
import JoshPointFormComponent from './JoshPointFormComponent';
import SebPointFormComponent from './SebPointFormComponent';

const useStyles = makeStyles((theme) => ({
    container: {
        position: '100vw',
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
    },
    appBar: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        paddingTop: '30px',
        paddingBottom: '10px',
    },
    pointFormContainer: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    nameContainer: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        width: '100%',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: '0.8em',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function TeamMemberDetailComponentMobile(props) {
    const { open, onClose } = props;
    const classes = useStyles();

    const [teamMemberDetail, setTeamMemberDetail] = useState(undefined);

    useEffect(() => {
        setTeamMemberDetail(props.teamMemberDetail);
    }, [props.teamMemberDetail]);

    const handleClose = () => {
        onClose();
    };

    return (
        <div className={classes.container}>
            <Dialog
                fullScreen
                fullWidth={true}
                open={open}
                TransitionComponent={Transition}
                className={classes.dialog}
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                {teamMemberDetail && (
                    <div className={classes.imageContainer}>
                        <img
                            src={teamMemberDetail?.image}
                            width={'350px'}
                            alt={teamMemberDetail?.name}
                        />
                    </div>
                )}
                <div className={classes.nameContainer}>
                    {teamMemberDetail?.name.toUpperCase()} :{' '}
                    {teamMemberDetail?.role}
                </div>
                <div className={classes.pointFormContainer}>
                    {teamMemberDetail?.id === 1 && <ChrisPointFormComponent />}
                    {teamMemberDetail?.id === 2 && <BenjPointFormComponent />}
                    {teamMemberDetail?.id === 3 && <DannyPointFormComponent />}
                    {teamMemberDetail?.id === 4 && <JoshPointFormComponent />}
                    {teamMemberDetail?.id === 5 && <SebPointFormComponent />}
                </div>
            </Dialog>
        </div>
    );
}
