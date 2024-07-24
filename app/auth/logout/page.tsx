'use client';

import appwriteService from "@/appwrite/config";
import { useRouter } from "next/navigation";
import React from "react";

export default function Logout() {
    const router = useRouter()
    const logout = () => {
        appwriteService.logout()
        router.push('/')
        return true
    }

    return (
        <div>
            {logout()}
        </div>
    );
}