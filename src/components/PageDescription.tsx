import React from 'react';
import styles from '../styles/PageDescription.module.css';

interface PageDescriptionProps {
    title: string;
    description: string;
}

const PageDescription: React.FC<PageDescriptionProps> = ({ title, description }) => {
    return (
        <div className={styles.pageDescription}>
            <h1>{title}</h1>
            <div className={styles.divider}></div>
            <span>{description}</span>
        </div>
    );
};

export default PageDescription;
