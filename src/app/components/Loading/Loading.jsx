import { CirclesWithBar } from "react-loader-spinner";

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
            <CirclesWithBar
                height="100"
                width="100"
                color="#1d74bb"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
                />
        </div>
    );
};

export default Loading;