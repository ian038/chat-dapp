import React from 'react';
import Image from "next/image";
import { useMoralis } from "react-moralis"

export default function Header() {
    const { user } = useMoralis();

    return (
        <div className="sticky top-0  z-50 pb-4 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        className="rounded-full"
                        src="https://cdn2.iconfinder.com/data/icons/teen-people-face-avatar-6/500/teen_109-512.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="text-left lg:text-center col-span-4">
                    <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
                        {/* <Avatar logoutOnPress /> */}
                    </div>
                    <h1 className="text-3xl">Welcomet to THE Metaverse</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
                    {/* <ChangeUsername /> */}
                </div>
            </div>
        </div>
    )
}
