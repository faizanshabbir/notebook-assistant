'use client';

import appwriteService from "@/appwrite/config";
import { useRouter } from "next/navigation";
import React, { useLayoutEffect } from "react";
import useAuth from "@/context/useAuth";

export default function Logout() {
    const router = useRouter()
    const {setAuthStatus} = useAuth()
    const logout = () => {
        appwriteService.logout()
        setAuthStatus(false)
        router.push('/')
        return true
    }
    useLayoutEffect(() => {
        logout()
      }, [])

    return (
        <div>
            Logging out
        </div>
    );
}