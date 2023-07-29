import Link from 'next/link';
import { Fragment } from 'react'

import styles from './page.module.css'

import Slideshow from './components/Slideshow/Slideshow.component';
import CardList from './components/CardList/CardList.component';

import { HeadLineModel } from './data/HeadLineModel';
import { latestNews } from './data/LatestNews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faTag } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <Fragment>
      <Slideshow />

      <section id="headlineModel" className='row mt-5'>
        <h2 className='text-center text-secondary'>HEADLINE MODEL</h2>
        <hr />
        <CardList items={HeadLineModel} childStyles={{lg: 3, md: 6, sm: 12}} />
      </section>

      <section id='anotherAction' className='row mt-5'>
        <div className='col-sm-12 col-md-12 col-lg-6'>
          <Link href='/model/all' className='text-decoration-none'>
            <div className={`border border-light border-secondary rounded p-3 shadow-sm ${styles.anotherActionLink}`}>
              <div className='container'>
                <div className='row'>
                  <div className='col-12 p-0'>
                    <h4 className='text-info'>Lihat Semua Model</h4>
                  </div>
                </div>
                
                <div className='row'>
                  <div className='col-xs-2 col-1 text-info text-center rounded d-flex align-items-center'>
                    <FontAwesomeIcon icon={faCar} style={{width: '24px', height: '24px'}} />
                  </div>

                  <div className='col-xs-10 col-11 col-sm-11 text-secondary'>
                      Filosofi produksi mobil Subaru mengutamakan keselamatan manusia dan gaya manusia.
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className='col-sm-12 col-md-12 col-lg-6'>
          <Link href='/pricelist' className='text-decoration-none anotherActionLink'>
            <div div className={`border border-light border-secondary rounded p-3 shadow-sm ${styles.anotherActionLink}`}>
              <div className='container'>
                <div className='row'>
                  <div className='col-12 p-0'>
                    <h4 className='text-info'>Pricelist Terbaru</h4>
                  </div>
                </div>
                
                <div className='row'>
                  <div className='col-xs-2 col-1 text-info text-center rounded d-flex align-items-center'>
                    <FontAwesomeIcon icon={faTag} style={{width: '24px', height: '24px'}} />
                  </div>

                  <div className='col-xs-10 col-11 col-sm-11 text-secondary'>
                      Dapatkan diskon terbaik bulan ini, jangan ragu untuk menghubungi dealer Subaru Batam.
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section id="latestNews" className='row mt-5'>
        <h2 className='text-center text-secondary'>PROMO & ARTIKEL TERBARU</h2>
        <hr />
        <CardList items={latestNews} childStyles={{lg: 4, md: 6, sm: 12}} />
      </section>
    </Fragment>
  )
}
