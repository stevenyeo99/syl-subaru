"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(scrollY > 200);
    }

    const scrollToTop = () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        addEventListener('scroll', handleScroll);

        return () => {
            removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div>
            {
                isVisible && (
                    <button onClick={scrollToTop} className='btn btn-secondary btn-floating btn-lg' style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px' 
                    }}>
                        <FontAwesomeIcon icon={faArrowUp} style={{ 
                            width: '24px', 
                            height: '24px'
                        }} />
                    </button>
                )
            }
        </div>
    )
};

export default ScrollToTop;