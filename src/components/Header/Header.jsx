import React from 'react';
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();
    }

    return (
        <div className="header">
            <span>{tg.initDataUnsafe?.user?.username} id:{tg.initDataUnsafe?.user?.id}</span>
            <Button className="button" onClick={onClose}>Закрыть</Button>
        </div>
    );
};

export default Header;