import YouTube from "react-youtube";

const opts = {
    height: "420",
    width: "100%",
    playerVars: {
        autoplay: 1
    }
};

const YoutubeVideo = (props) => {

    const {videoId} = props;

    const _onReady = (event) => {
        event.target.pauseVideo();
    };

    return (
        <div className='video-container'>
            <YouTube videoId={videoId} opts={opts} onReady={_onReady}/>
        </div>
    );
};

export default YoutubeVideo;