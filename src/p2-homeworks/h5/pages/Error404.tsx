import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Navigate } from 'react-router-dom'
import { PATH } from '../OurOwnRoutes'
import { PreJunior } from './PreJunior'
import styles from './Error404.module.css'

function Error404() {
    const navigate = useNavigate();
    const onClickHeandler = () => {
        return setTimeout(() => navigate('/pre-junior'), 500);
    }
    return (
        <div className={styles.main}>
            <div className={styles.message}>
                <div className={styles.error}>Ошибка 404</div>
                <div className={styles.errorMessage}>Кажется что-то пошло не так! Запрашиваемая страница
                была удалена либо вовсе не существовала...</div>
                <button className={styles.button} onClick={onClickHeandler}>Перейти на главную!</button>
            </div>
        </div>
    )
}

export default Error404
