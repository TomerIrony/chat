import React, { useState } from 'react';
import MUIInput from '@mui/joy/Input';
import { Button } from '@mui/joy';


export default function Input({onSend} : {onSend:  (e: string) => void}) {
     const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        if(message?.length > 0){
            onSend(message);
            setMessage('');
        }
        else{
            return
        }
    }

    return (
        <div style={{display:"flex"}}>
            <form onSubmit={handleSubmit}>
                <MUIInput value={message} onChange={(e) => setMessage(e?.target?.value)}
                 type='text' placeholder="Type in here…" />
                <Button type='submit'>
                    Send
                </Button>
            </form>

        </div>
    );
}

