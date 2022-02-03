import React from 'react';
import { useMoralis } from "react-moralis"

export default function ChangeUsername() {
    const { setUserData, isUserUpdating, user } = useMoralis();

    const setUsername = () => {
        const username = prompt(`Enter your new Username (current :${user.getUsername()})`);
        if (username) {
            setUserData({
                username
            })
        }
    }

    return (
        <div className="text-sm absolute top-5 right-5">
            <button disabled={isUserUpdating} onClick={setUsername} className="hover:text-pink-700">
                Change your Username
            </button>
        </div>
    )
}
