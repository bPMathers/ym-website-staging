import nathan5 from '../../assets/Nathan/viz_05.mp4';

const NathanIndividualVideo = (props) => {
    return (
        <video
            src={nathan5}
            width={props.width}
            autoPlay={true}
            loop={true}
            muted
            style={{
                filter: `hue-rotate(${props.hue}deg)`,
                marginRight: props.marginRight,
            }}
        />
    );
};

export default NathanIndividualVideo;
