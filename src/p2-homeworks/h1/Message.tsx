import React from 'react'
import {inspect} from "util";
import styles from "./Message.module.css"

export type MessageType = {
    avatar: any,
    name: string,
    message: string,
    time: string

}

export function Message(props: MessageType) {
    return (
        <div className={styles.HW1}>
            <img src={props.avatar}/>
            <div>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.message}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
