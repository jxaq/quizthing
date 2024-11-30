'use client';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import getUserID from '../../components/ClerkUserId'
  import './globals.css'
  import React, { useEffect, useState } from 'react';

  

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [userID, setUserID] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUserID() {
            const response = await fetch('/api/getUserId');
            const data = await response.json();
            setUserID(data.userId);
        }
        fetchUserID();
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="rounded-md border-2 p-3 md:p-8 w-full md:w-4/5">
            <ClerkProvider>
             <SignedIn>
                <h2 className="text-2xl font-bold">Welcome back!</h2>
             </SignedIn>
                <p className="text-md font-bold">Powered by Clerk</p>
            <SignedOut>
                <SignInButton />
             </SignedOut>
             <SignedIn>
                <UserButton />
                <h4>Click on icon to manage account</h4>
                <p>Your user id is {userID}</p>
                </SignedIn>
            </ClerkProvider>
            </div>
         </div>
    )
  };
