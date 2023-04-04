import React from 'react';
import styles from '@/styles/Chat.module.css'
import { Message } from '.';


export default function Chat({messages}: {messages: Message[]}) {
    const messageRow = (message: Message, i: number) => {
        
        return (
            <div className={styles.message_row} key={i}>
                <div className={styles.message_author}>{message?.author}</div>
                <div >{message?.message}</div>
            </div>
        )
    }
    return (
        <div className={styles.main}>
           {messages?.map((item, i) => messageRow(item, i))}
        </div>
    );
}

