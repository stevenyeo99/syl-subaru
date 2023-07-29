import { Fragment } from "react";
import 'typeface-roboto';

import Navbar from './components/Navbar/Navbar.component';
import Footer from './components/Footer/Footer.component';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.component';
import ChatButton from './components/ChatButton/ChatButton.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

const App = ({children}) => {
    return (
        <Fragment>
            <Navbar />
            <main className='container mt-5 mb-5'>
                {children}
            </main>
            <Footer />
            {/** Sticky Button */}
            <ChatButton />
            <ScrollToTop />
        </Fragment>
    );
};

export default App;