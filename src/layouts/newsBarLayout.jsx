const NewsBarLayout = ({children}) => {
    return (
        <div className='row'>
            <div className='col-sm-12 col-md-9 col-lg-9'>
                {children}
            </div>

            {/** Info & News Related Side bar */}
            <div className='col-sm-12 col-md-3 col-lg-3'>

            </div>
        </div>
    );
};

export default NewsBarLayout;