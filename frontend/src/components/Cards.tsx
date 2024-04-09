import React from 'react';

interface CardProps {
    title: string;
    buttonText: string;
}

const Card: React.FC<CardProps> = ({ title, buttonText }) => {
    return (
        <div className="card">
            <div className="card-header">
            <h2>{title}</h2>
            </div>
            <div className="card-body">
                <button>{buttonText}</button>
            </div>
        </div>
    );
}

export default Card;
