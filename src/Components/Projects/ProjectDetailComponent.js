import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// import ArrowRight from '@material-ui/icons/ArrowRight';
// import ArrowLeft from '@material-ui/icons/ArrowLeft';
import Slide from '@material-ui/core/Slide';
import { DialogContent } from '@material-ui/core';
import { List } from 'react-virtualized';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    dialog: {
        backgroundColor: theme.palette.primary.main,
    },
    dialogContent: {
        backgroundColor: theme.palette.primary.main,
        padding: '0px 0px 100px 0px',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    dialogContentRoot: {
        '&:first-child': {
            paddingTop: '0px',
        },
    },
    projectDetailContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
        width: '100%',
        animation: `$fade 1500ms ease-out`, // Need assigned key on component to work
    },
    appBar: {
        position: 'relative',
    },
    containerToBeRenamed: {
        marginLeft: '40px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%',
    },
    listContainer: {
        minWidth: '300px', //this is temp
        paddingTop: '20px',
    },
    list: {
        padding: '15px',
        // backgroundColor: '#1d1d1d',
        boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    // TODO: maybe need to pass with style prop to prevent flick
    listItem: {
        fontFamily: 'Roboto',
        fontSize: '1rem',
        fontWeight: 400,
        textTransform: 'none',
        color: 'white',
        maxHeight: '100px',
        '&:hover': {
            fontWeight: 700,
            cursor: 'pointer',
            // fontSize: '1.1rem',
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    listItemSelected: {
        borderBottom: `1px solid ${theme.palette.common.gold}`,
    },
    selectedServiceTab: {
        borderLeft: `2px solid ${theme.palette.common.gold}`,
        paddingLeft: '10px',
        // borderBottom: `1px solid ${theme.palette.common.gold}`,
        // paddingBottom: '3px',
        height: '25px',
        minWidth: '8px',
        animation: `$fade 1500ms ease-out`,
        color: theme.palette.common.gold,
        filter: 'brightness(150%)',
        fontWeight: 700,
        textShadow: '#6e5e08 1px 0 10px',
    },
    selectedServiceItemTitle: {
        color: theme.palette.common.gold,
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
    title: {
        fontSize: '2em',
        textAlign: 'center',
        marginBottom: '3px',
        fontWeight: 500,
    },
    year: {
        fontSize: '1rem',
        fontWeight: '300',
    },
    subtitle: {
        padding: '0px 2em',
        fontSize: '1.2em',
        textAlign: 'center',
        width: '70%',
        marginBottom: '10px',
        fontWeight: 400,
    },
    categoriesText: {
        padding: '0px 2em',
        fontSize: '1.0em',
        marginBottom: '20px',
        width: '80%',
        textAlign: 'center',
    },
    separator: {
        backgroundColor: theme.palette.common.gold,
        height: '3px',
        width: '30px',
        margin: '10px 0',
    },
    separator2: {
        backgroundColor: theme.palette.secondary.main,
        height: '0.5px',
        width: '60%',
        marginBottom: '10px',
    },
    detailMediaContainer: {
        width: '721px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    detailMediaItem: {
        width: '100%',
        marginBottom: '10px',
        borderRadius: '5px',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProjectDetailComponent(props) {
    const {
        open,
        onClose,
        // onNavigate,
        projectsData,
        onSelectItemFromList,
        project,
    } = props;
    const classes = useStyles();

    const [projectDetail, setProjectDetail] = useState(undefined);
    const [projectVideos, setProjectVideos] = useState([]);

    useEffect(() => {
        setProjectDetail(project);
        if (project?.extraMedia) {
            setProjectVideos(
                project.extraMedia?.filter((em) => em.type === 'video')
            );
        } else {
            setProjectVideos([]);
        }
    }, [project]);

    const handleClose = () => {
        onClose();
    };

    // const handleNavigate = (direction) => () => {
    //     onNavigate(direction);
    // };

    const renderRow = ({ index, style, key }) => {
        return (
            <div onClick={() => onSelectItemFromList(index)}>
                {/* TODO: Add styling to the selected list item as was done in the services page, with the slide animation */}
                {/* <div
                    className={
                        service.id === selectedService.id
                            ? classes.selectedServiceTab
                            : ''
                    }
                ></div> */}
                {/* <div
                    className={
                        projectsData[index].id === project.id
                            ? classes.selectedServiceTab
                            : ''
                    }
                ></div> */}
                <Typography
                    key={key}
                    style={style}
                    className={clsx(
                        classes.listItem,
                        projectsData[index].id === project.id
                            ? classes.selectedServiceItemTitle
                            : ''
                    )}
                >
                    <div
                        className={
                            projectsData[index].id === project.id
                                ? classes.selectedServiceTab
                                : undefined
                        }
                    >
                        {projectsData[index].altTitle ??
                            projectsData[index].title}
                    </div>
                </Typography>
            </div>
        );
    };

    const getRowHeight = ({ index }) => {
        return 30;
        // const titleLength = projectsData[index]?.title?.length;

        // if (titleLength < 36) return 35;

        // return 65;
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
                <DialogContent
                    className={classes.dialogContent}
                    classes={{ root: classes.dialogContentRoot }}
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
                            {/* <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleNavigate('left')}
                                aria-label="Navigate Left"
                            >
                                <ArrowLeft />
                            </IconButton>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleNavigate('right')}
                                aria-label="Navigate Right"
                            >
                                <ArrowRight />
                            </IconButton> */}
                        </Toolbar>
                    </AppBar>
                    <div className={classes.containerToBeRenamed}>
                        <div className={classes.listContainer}>
                            <List
                                className={classes.list}
                                height={600}
                                rowCount={projectsData.length}
                                rowRenderer={renderRow}
                                width={300}
                                rowHeight={getRowHeight}
                            ></List>
                        </div>

                        {projectDetail && (
                            <div
                                className={classes.projectDetailContent}
                                key={Math.random().toString()}
                            >
                                <Typography
                                    className={classes.title}
                                    variant={'h2'}
                                >
                                    {projectDetail.title}
                                </Typography>
                                <Typography
                                    className={classes.year}
                                    variant={'h6'}
                                >
                                    ({projectDetail.year})
                                </Typography>
                                <div className={classes.separator}></div>
                                <Typography
                                    className={classes.subtitle}
                                    variant={'subtitle2'}
                                >
                                    {projectDetail.detailedSubtitle ??
                                        projectDetail.subtitle}
                                </Typography>
                                <div className={classes.separator2}></div>
                                <Typography
                                    className={classes.categoriesText}
                                    variant={'subtitle2'}
                                >
                                    {projectDetail.categoriesText}
                                </Typography>
                                <div className={classes.detailMediaContainer}>
                                    {projectVideos.length > 0 &&
                                        projectVideos.map((video) => {
                                            return (
                                                <>
                                                    <iframe
                                                        className={
                                                            classes.detailMediaItem
                                                        }
                                                        src={video.data.src}
                                                        width={
                                                            video.data.width ??
                                                            721
                                                        }
                                                        height={
                                                            video.data.height ??
                                                            405
                                                        }
                                                        frameborder="0"
                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                        allowFullScreen
                                                        title={
                                                            projectDetail.title
                                                        }
                                                    ></iframe>
                                                </>
                                            );
                                        })}
                                    {projectDetail.bgImg &&
                                        !projectDetail.hideLogo && (
                                            <img
                                                src={projectDetail.bgImg}
                                                className={
                                                    classes.detailMediaItem
                                                }
                                                alt="Project"
                                            />
                                        )}
                                    {projectDetail.extraMedia &&
                                        projectDetail.extraMedia.map(
                                            (media, index) => {
                                                if (media.type === 'img') {
                                                    return (
                                                        <img
                                                            src={media.data}
                                                            className={
                                                                classes.detailMediaItem
                                                            }
                                                            alt="media item"
                                                            key={index}
                                                        />
                                                    );
                                                } else return <></>;
                                            }
                                        )}
                                </div>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
