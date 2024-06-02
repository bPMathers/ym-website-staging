import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { teamMemberData } from './TeamMemberData';
import TeamMemberDetailComponentMobile from './TeamMemberDetailComponentMobile';
import TeamMemberComponentMobile from './TeamMemberComponentMobile';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        minHeight: '80vh',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    photosContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
    },
    photosRow: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
    },
}));

const TeamComponentMobile = () => {
    const classes = useStyles();

    const [teamMemberDetail, setTeamMemberDetail] = useState(undefined);
    const [detailOpen, setDetailOpen] = useState(false);

    const handleTeamMemberClick = (index) => () => {
        setTeamMemberDetail(teamMemberData[index]);
        setDetailOpen(true);
    };

    const handleOnClose = () => {
        setDetailOpen(false);
    };

    return (
        <>
            <div className={classes.container}>
                <div className={classes.photosContainer}>
                    <div className={classes.photosRow}>
                        <div onClick={handleTeamMemberClick(0)}>
                            <TeamMemberComponentMobile
                                teamMember={teamMemberData[0]}
                            />
                        </div>
                        <div onClick={handleTeamMemberClick(1)}>
                            <TeamMemberComponentMobile
                                teamMember={teamMemberData[1]}
                            />
                        </div>
                    </div>
                    <div className={classes.photosRow}>
                        <div onClick={handleTeamMemberClick(4)}>
                            <TeamMemberComponentMobile
                                teamMember={teamMemberData[4]}
                            />
                        </div>
                        <div onClick={handleTeamMemberClick(2)}>
                            <TeamMemberComponentMobile
                                teamMember={teamMemberData[2]}
                            />
                        </div>
                    </div>
                    <div className={classes.photosRow}>
                        <div onClick={handleTeamMemberClick(3)}>
                            <TeamMemberComponentMobile
                                teamMember={teamMemberData[3]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <TeamMemberDetailComponentMobile
                open={detailOpen}
                teamMemberDetail={teamMemberDetail}
                onClose={handleOnClose}
            />
        </>
    );
};

export default TeamComponentMobile;
