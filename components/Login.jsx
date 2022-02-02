import React from 'react';
import Image from "next/image";
import { useMoralis } from 'react-moralis';

export default function Login() {
    const { authenticate } = useMoralis();

    return (
        <div className="bg-black relative text-white">
            <div className="flex flex-col absolute z-50 h-4/6 w-full justify-center space-y-4 items-center">
                <Image
                    className="object-contain rounded-full"
                    src="https://cdn2.iconfinder.com/data/icons/teen-people-face-avatar-6/500/teen_109-512.png"
                    height={200}
                    width={200}
                />

                <button onClick={authenticate} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the METAVERSE</button>
            </div>

            <div className="w-full h-screen">
                <Image className="opacity-70" src="https://links.papareact.com/55n" objectFit="cover" layout="fill" />
            </div>
        </div>
    )
}
