import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles((theme) => ({
    menuList: {
        width: '105vw',
        height: '105vh',
        // backgroundColor: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: '-45px',
        top: '-10px',
    },
    menuItem: {
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
    },
    menuItemLabel: {
        fontSize: '2rem',
    },
    menuButton: {
        color: theme.palette.secondary.main,
        position: 'fixed',
        right: '10px',
        top: '10px',
        // zIndex: '999',
    },
    closeButton: {
        color: theme.palette.secondary.main,
        position: 'absolute',
        right: '0px',
        top: '10px',
    },
}));

// TODO: RANDOMIZE COLOR INSTEAD OF MAKING IT DEPENEDENT ON location.pathname since is onepager ?
export default function MenuComponentMobile(props) {
    // let location = useLocation();

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    React.useEffect(() => {
        function preventScroll(e) {
            e.preventDefault();
            e.stopPropagation();

            return false;
        }
        if (open) {
            document
                .querySelector('#scrollable')
                ?.addEventListener('wheel', preventScroll, { passive: false });
        } else {
            document
                .querySelector('#scrollable')
                ?.removeEventListener('wheel', preventScroll, {
                    passive: false,
                });
        }
    }, [open]);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div
            style={{
                position: 'relative',
                zIndex: 100,
                touchAction: 'none',
                // overflowX: 'hidden',
                // overflowY: 'hidden',
            }}
        >
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.menuButton}
            >
                <MenuIcon style={{ fontSize: '3em' }} />
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
                placement={'top'}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        timeout={700}
                        style={{
                            transformOrigin: placement === 'center',
                        }}
                    >
                        <Paper id={'scrollable'}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                    className={classes.menuList}
                                    style={{
                                        backgroundColor: '#484A47',
                                    }}
                                >
                                    <MenuItem
                                        onClick={handleClose}
                                        className={classes.closeButton}
                                    >
                                        <CloseIcon
                                            style={{ fontSize: '3em' }}
                                        />
                                    </MenuItem>
                                    <HashLink
                                        to="/#top"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <MenuItem
                                            onClick={handleClose}
                                            className={classes.menuItem}
                                        >
                                            <Typography
                                                variant={'h6'}
                                                className={
                                                    classes.menuItemLabel
                                                }
                                            >
                                                Home
                                            </Typography>
                                        </MenuItem>
                                    </HashLink>
                                    <HashLink
                                        to="/#teamSection"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <MenuItem
                                            onClick={handleClose}
                                            className={classes.menuItem}
                                        >
                                            <Typography
                                                variant={'h6'}
                                                className={
                                                    classes.menuItemLabel
                                                }
                                            >
                                                Team
                                            </Typography>
                                        </MenuItem>
                                    </HashLink>
                                    <HashLink
                                        to="/#projectsSection"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <MenuItem
                                            onClick={handleClose}
                                            className={classes.menuItem}
                                        >
                                            <Typography
                                                variant={'h6'}
                                                className={
                                                    classes.menuItemLabel
                                                }
                                            >
                                                Projects
                                            </Typography>
                                        </MenuItem>
                                    </HashLink>
                                    <Link
                                        to="/cc"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <MenuItem
                                            onClick={handleClose}
                                            className={classes.menuItem}
                                        >
                                            <Typography
                                                variant={'h6'}
                                                className={
                                                    classes.menuItemLabel
                                                }
                                            >
                                                Creative Collaborators
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                    <Link
                                        to="/contact"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <MenuItem
                                            onClick={handleClose}
                                            className={classes.menuItem}
                                        >
                                            <Typography
                                                variant={'h6'}
                                                className={
                                                    classes.menuItemLabel
                                                }
                                            >
                                                Contact
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
