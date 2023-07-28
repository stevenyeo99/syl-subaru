import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import './ChatButton.css';

const ChatButton = () => {

    return (
        < a className = 'chat-button btn btn-success'
        href = 'https://api.whatsapp.com/send?phone=6281275416323' >
            <FontAwesomeIcon icon={faWhatsapp} style={{ width: '24px', height: '24px' }} /> Info Promo & Konsultasi
        </a>
    );
};

export default ChatButton;