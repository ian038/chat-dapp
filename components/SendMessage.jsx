import React, { useState } from 'react';
import { useMoralis } from "react-moralis"

export default function SendMessage({ endOfMessages }) {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState('');

    const sendMessage = async e => {
        e.preventDefault();
        if (!message) return;
        const Messages = Moralis.Object.extend('Messages');
        const messages = new Messages();
        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then((message) => {
            console.log(message)
        }, (err) => console.log(err.message))

        endOfMessages.current.scrollIntoView({ behaviour: 'smooth' })
        setMessage('');
    }
    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl w-11/12 rounded-full border-4 border-blue-400">
            <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
                placeholder={`Enter a Message ${user.getUsername()}...`}
            />
            <button type="submit" onClick={sendMessage} className="font-bold text-pink-500">Send</button>
        </form>
    )
}
