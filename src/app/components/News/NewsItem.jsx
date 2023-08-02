import YoutubeVideo from "../Youtube/YoutubeVideo";

const NewsItem = (props) => {

    const { item: itemData } = props;
    const {
        id,
        title,
        date,
        type,
        imageUrl,
        paragraphs
    } = itemData;

    return (
        <section className='container'>
            <h1 className='text-primary'>{title}</h1>
            <div>
                <span className='text-dark h6'>{date.toLocaleString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </span>
                <b>&nbsp;&nbsp;|&nbsp;&nbsp;</b>
                <span className='text-secondary'>{type.join(', ')}</span>
            </div>
            <hr />

            <img src={imageUrl} alt={title} style={{width: '100%'}} />

            <div className='mt-3'>
                {
                    paragraphs.map(content => {

                        const {format, values} = content;
                        let contentDisp;
                        if (format === 'text') {
                            contentDisp = <p className='text-dark'>{values}</p>
                        } else if (format === 'unit') {
                            contentDisp = (
                                <ul>
                                    {
                                        values.map(value => {
                                            return <li key={value}>{value}</li>
                                        })
                                    }
                                </ul>
                            )
                        } else if (format === 'onit') {
                            contentDisp = (
                                <ol>
                                    {
                                        values.map(value => {
                                            return <li key={value}>{value}</li>
                                        })
                                    }
                                </ol>
                            )
                        } else if (format === 'image') {
                            contentDisp = (
                                <img src={values} alt={title} style={{width: '100%'}} />
                            )
                        } else if (format === 'image-unit') {
                            contentDisp = (
                                <div className='container'>
                                    <div className='row'>
                                        {
                                            values.map(value => {
                                                return <div key={value} className='col-lg-4 col-md-2 col-sm-12'>
                                                    <img src={value} alt={title} style={{width: '100%'}} />
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        } else if (format === 'video') {
                            contentDisp = (
                                <YoutubeVideo videoId={values}/>
                            )
                        }

                        return contentDisp;
                    })
                }
            </div>
        </section>
    );
};

export default NewsItem;