import React from "react";
import Link from 'next/link';
import useAuth from "@/context/useAuth";

export default function Navigation() {
    const {authStatus} = useAuth(); 

    const logAuth = () => {
        console.log(authStatus);
        return "hi"
    }
    return (
        <nav className="ml-auto flex gap-4 sm:gap-6">
            { logAuth() }
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
            <Link href={authStatus ? "/auth/logout": "/auth/login"} className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                {authStatus ? "Logout" : "Login"}
            </Link>
        </nav>
    );
}