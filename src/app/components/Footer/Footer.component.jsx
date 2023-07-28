import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

import './Footer.css';

const Footer = () => {
    return (
        <footer className='p-5 pb-3'>
            <div className='container'>
                <div className="row">
                    <div className='col-lg-4 col-12' id='profile-pic'>
                        <Image src='/sylvester.jpeg' alt='Sylvester' width={200} height={200} className="rounded" />
                    </div>

                    <div className='col-lg-4 col-12'>
                        <aside id="text-6" className="widget widget_text">
                            <h3 className='text-white'>HUBUNGI KAMI</h3>
                            <hr />			
                            <div>
                                <strong className='text-white'>Sylvester</strong>
                                <br />
                                <strong className='text-white'>
                                    <FontAwesomeIcon icon={faPhoneSquare} style={{ width: '24px', height: '24px' }} />
                                    &nbsp;&nbsp;&nbsp;0812 7541 6323
                                </strong>
                                <br />
                                <strong className='text-white'>
                                    <FontAwesomeIcon icon={faWhatsapp} style={{ width: '24px', height: '24px' }} />
                                    &nbsp;&nbsp;&nbsp;0812 7541 6323
                                </strong>
                                <br />
                                <p className='text-white'>
                                    Plaza Subaru Batam
                                    Jl.Yos Sudarso Blok A No.1, Desa / Kelurahan Sungai Panas, Kota Batam, Kepulauan Riau 29444
                                </p>
                            </div>
                        </aside>
                    </div>

                    <div className='col-lg-4 col-12'>
                        <div className='text-center'>
                            <a href='https://www.instagram.com/subarudealerindonesia/' className='ms-auto me-auto w-75 border border-2 rounded p-2 text-center pointer btn btn-info border-white text-white' style={{textDecoration: 'none', cursor: 'pointer'}}>
                                <FontAwesomeIcon icon={faInstagram} style={{ width: '24px', height: '24px' }} /> Follow @subarudealerindonesia
                            </a>
                        </div>
                        <br />

                        <div className='ms-auto me-auto w-75' id='plaza-icon'>
                            <Image src='/footer-logo.png' alt='subaru plaza' width='300' height={110}/>
                        </div>
                    </div>
                </div>
            </div>
                
            <hr />

            <div className="text-center">
                {new Date().getFullYear()} - Plaza Subaru Batam
            </div>
        </footer>
    );
};

export default Footer;