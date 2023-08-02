import Link from "next/link";
import { ButtonGroup } from "reactstrap";

import { ListOfNews } from "@/app/data/news/ListOfNews";

import './newsBarLayout.css';
import { Fragment } from "react";
import SearchBox from "@/app/components/SearchBox/SearchBox";

const NewsBarLayout = ({children, type, activeClass}) => {

    const latestTenNews = ListOfNews.sort((a, b) => b.date - a.date).slice(0, 10);

    return (
        <div className='row'>
            <div className='col-sm-12 col-md-9 col-lg-9'>
                {children}
            </div>

            {/** Info & News Related Side bar */}
            <aside className='col-sm-12 col-md-3 col-lg-3'>
                {
                    type === 'model' && (
                        <section className='container w-100 mb-5'>
                            <strong className='h5 text-uppercase'>Pilih Model</strong>
                            <hr/>
                            <ButtonGroup vertical className='w-100'>
                                <Link href='/model/BRZ' className={`text-uppercase btn btn-secondary ${activeClass === 'brz' ? 'active' : ''}`}>
                                    Brz
                                </Link>

                                <Link href='/model/CROSSTREK' className={`text-uppercase btn btn-secondary ${activeClass === 'crosstrek' ? 'active' : ''}`}>
                                    Crosstrek
                                </Link>

                                <Link href='/model/FORESTER' className={`text-uppercase btn btn-secondary ${activeClass === 'forester' ? 'active' : ''}`}>
                                    Forester
                                </Link>

                                <Link href='/model/WRX' className={`text-uppercase btn btn-secondary ${activeClass === 'wrx' ? 'active' : ''}`}>
                                    Wrx
                                </Link>

                                <Link href='/model/WRX_WAGON' className={`text-uppercase btn btn-secondary ${activeClass === 'wrx_wagon' ? 'active' : ''}`}>
                                    Wrx Wagon
                                </Link>
                            </ButtonGroup>
                        </section>
                    )
                }

                {
                    type === 'news' && (
                        <Fragment>
                            <section className='container w-100 mb-5'>
                                <SearchBox type='text' placeholder='Pencarian..' />
                            </section>

                            <section className='container w-100 mb-5'>
                                <strong className='h5 text-uppercase'>Kategori</strong>
                                <hr />
                                
                                <ButtonGroup vertical className='w-100'>
                                    <Link href='/news/artikel' className={`text-uppercase btn btn-secondary ${activeClass === 'brz' ? 'active' : ''}`}>
                                        Artikel
                                    </Link>

                                    <Link href='/news/berita' className={`text-uppercase btn btn-secondary ${activeClass === 'crosstrek' ? 'active' : ''}`}>
                                        Berita
                                    </Link>

                                    <Link href='/news/liputan_media' className={`text-uppercase btn btn-secondary ${activeClass === 'forester' ? 'active' : ''}`}>
                                        Liputan Media
                                    </Link>

                                    <Link href='/news/promo' className={`text-uppercase btn btn-secondary ${activeClass === 'wrx' ? 'active' : ''}`}>
                                        Promo
                                    </Link>

                                    <Link href='/news/tips' className={`text-uppercase btn btn-secondary ${activeClass === 'wrx_wagon' ? 'active' : ''}`}>
                                        Tips
                                    </Link>
                                </ButtonGroup>
                            </section>
                        </Fragment>
                    )
                }

                <section className='container w-100'>
                    <strong className='h5 text-upper-case'>Promo & Artikel Terbaru</strong>
                    <hr />
                    <ButtonGroup vertical className='w-100'>
                        {
                            latestTenNews.map(data => {
                                return (<Link key={data.id} href={`/news/${data.id}`} className={`text-uppercase btn btn-outline-secondary`}>
                                    { data.title }
                                </Link>)
                            })
                        }
                    </ButtonGroup>
                </section>
            </aside>
        </div>
    );
};

export default NewsBarLayout;