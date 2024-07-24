import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from 'next/link';
import useAuth from "@/context/useAuth";
import appwriteService from "@/appwrite/config";

export default function Navigation() {
    const {authStatus, setAuthStatus} = useAuth();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useLayoutEffect(() => {
        appwriteService.isLoggedIn().then((status) => {
            // TO BE FIXED, SET THE STATE OF STATUS]
            if (typeof status === "boolean") {
              setAuthStatus(true)
              setIsLoggedIn(true)
            }
        })
      }, [])

    return (
        <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
            </Link>
            <Link href={isLoggedIn ? "/auth/logout": "/auth/login"} className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                {isLoggedIn ? "Logout" : "Login"}
            </Link>
        </nav>
    );
}