import React, { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis"
import Message from './Message';
import SendMessage from './SendMessage';

const MINS_DURATION = 15;
export default function Messages() {
    const { user } = useMoralis();
    const endOfMessages = useRef(null);
    const { data } = useMoralisQuery('Messages', query => query.ascending('createdAt')
            .greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * MINS_DURATION)), [], { live: true });
    return (
        <div className="pb-56">
            <div className="my-5">
                <ByMoralis
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    variant="dark"
                />
            </div>
            
            <div className="spacing-y-10 p-4">
                {data.map(message => <Message key={message.id} message={message} />)}
            </div>

            <div className="flex justify-center">
                <SendMessage endOfMessages={endOfMessages} />
            </div>

            <div ref={endOfMessages} className="text-center text-gray-400 mt-5">
                <p>You&apos;re up to date {user.getUsername()} 🎉</p>
            </div>
        </div>
    )
}
