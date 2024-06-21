/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/QUA8lQfzIwg
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
import { JSX, SVGProps, useState } from "react"
import conf from "@/conf/config"
import { Client, Account, ID, Models } from "appwrite"
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
}

export function Login() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {email, password} = event.target as typeof event.target & FormData;
    // TODO: only login if session is already not active?? or maybe they cant even go to login page?
    if (email && password) {
      const session = await loginUser(email, password);
      if (session) {
        console.log("Logged in")
      }
    }
  }
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Sign in with your email and password</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <div>
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" required minLength={8} />
              <div>
                <Button variant="ghost" type="button" size="sm" onClick={toggleShowPassword}>
                  <EyeIcon className="h-4 w-4" />
                  <span className="sr-only">Show password</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Login
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

async function loginUser(email: string, password: string): Promise<Models.Session> {
  console.log("HI")
  const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
      .setProject(conf.APPWRITE_PROJECT_ID); // Your project ID

  const account = new Account(client);

  const session = await account.createEmailPasswordSession(
      email, // email
      password // password
  );
  console.log(session);
  return session
  // if(session) {
  //   router.push('/')
  // }
  
}
