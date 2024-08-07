/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/PzMJsv2cYe9
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import './authstyles.css'
import React, { JSX, SVGProps } from "react"
import conf from '@/conf/config'
import { Client, Account, ID } from "appwrite";
import { useState } from "react";
import { setDefaultResultOrder } from "dns";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

export default function Registration() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const {setAuthStatus} = useAuth()

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  
  const createUserSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log("calling createUserSubmit")
    event.preventDefault();
    try {
      const {email, password} = event.target as typeof event.target & FormData;
      console.log(email)
      console.log(password)
      console.log(formData.email)
      console.log(formData.password)
      const userData = await appwriteService.createUserAccount(formData);
      console.log(userData);
      if (userData) {
        setAuthStatus(true)
        router.push('/dashboard')
      }
    } catch (error: any) {
      console.log("HIT ERROR")
      setError(error.message)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>Sign up with your email and password</CardDescription>
      </CardHeader>
      <form onSubmit={createUserSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" onChange={(e) => setFormData((prev) => ({...prev, email: e.target.value}))} required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div>
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="" onChange={(e) => setFormData((prev) => ({...prev, password: e.target.value}))} required minLength={8} />
              <div>
                <Button variant="ghost" type="button" size="sm" onClick={toggleShowPassword}>
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">Show password</span>
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">Password must be at least 8 characters long.</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

function EyeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
