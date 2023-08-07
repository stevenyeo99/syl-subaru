import Link from "next/link";

import Pagination from "../Pagination/Pagination";

const NewsList = (props) => {
    const {listType, items} = props;

    console.log('test: ' + listType);

    return (
        <section className='container'>
            <h1 className='text-primary'>{listType ? listType : 'Info Terkini'}</h1>
            <hr />
            { !items.length && <h2 className='text-secondary'>Info tidak ditemukan.</h2>}
            {
                items && (
                    <Pagination
                        isDisplay={items.length ? true : false} 
                        data={
                            items.map(item => {
                                let paragraph = item.paragraphs.find(paragraph => {
                                    return paragraph.format === 'text';
                                });
                                paragraph = (paragraph ? paragraph.values : '');
                                paragraph = (paragraph ? paragraph.substring(0, 100).trim() + '...': '');

                                return (
                                    <div key={item.id} className='row mb-5 bg-light p-2 rounded border'>
                                        <div className='col-lg-4 col-md-12 col-sm-12'>
                                            <img src={item.imageUrl} alt={item.title} style={{width: '100%'}} className='rounded border' />
                                        </div>

                                        <div className='col-lg-8 col-md-12 col-sm-12'>
                                            <div className='h-100 align-items-center row'>
                                                <h2 className='text-dark h5 mb-0'>{item.title}</h2>
                                                <div>
                                                    <span className='h6'>
                                                        {item.date.toLocaleString('en-US', {
                                                            month: 'long',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                    <span>&nbsp;&nbsp;<b>|</b>&nbsp;&nbsp;</span>
                                                    <span className='text-secondary'>{item.type.join(', ')}</span>
                                                </div>

                                                {
                                                    paragraph && (
                                                        <div className='mt-2'>
                                                            <p>
                                                                {
                                                                    paragraph
                                                                }
                                                            </p>
                                                        </div>
                                                    )
                                                }
                                                
                                                <div>
                                                    <Link href={`/news/${item.id}`} className='btn btn-primary'>
                                                        Baca
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    />
                )
            }
        </section>
    );
};

export default NewsList;