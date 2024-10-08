/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/M8QsLGUvD3T
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Rubik } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
"use client"

import React, { useLayoutEffect, useState, ChangeEvent, FormEvent } from "react"
import Link from "next/link"
import Navigation from "../components/navigation"
import AuthNavigation from "../components/auth-navigation"
import appwriteService from "@/appwrite/config"
import useAuth from "@/context/useAuth"
import { useRouter } from "next/navigation";
import { Triangle } from 'react-loader-spinner'
import './styles.css'
import { Result } from "postcss"

export default function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFilename] = useState("")
  const [usageCount, setUsageCount] = useState(0)
  const [username, setUsername] = useState("Some Name User")
  const [loading, setLoading] = useState(false)
  const [notebook, setNotebook] = useState("")

  const {authStatus, setAuthStatus} = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter()

  useLayoutEffect(() => {
      appwriteService.isLoggedIn().then((status) => {
          // TO BE FIXED, SET THE STATE OF STATUS]
          if (typeof status === "boolean") {
              setAuthStatus(true)
              setIsLoggedIn(true)
          } else {
              setAuthStatus(false)
              setIsLoggedIn(false)
              console.log("User is not logged in")
              router.push("/")
          }
      })
    }, [])

  const fetchWithTimeout = async (
    url: string,
    options: RequestInit,
    timeout: number = 8000
  ): Promise<Response> => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchOptions = { ...options, signal, keepalive: true };
  
    const fetchTimeout = setTimeout(() => {
      controller.abort();
    }, timeout);
  
    try {
      const response = await fetch(url, fetchOptions);
      clearTimeout(fetchTimeout);
      return response;
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        throw new Error('Request timed out');
      }
      throw error;
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setFilename(event.target.files[0].name)
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    // Show loading animation
    setLoading(true);
    setNotebook("");
    try {
      const response = await fetchWithTimeout(
        '/api/upload/claude', {
          method: 'POST',
          body: formData,
        },
        90000
      );

      if (!response.ok) {
        throw new Error('Error fetching assistant response!');
      }

      const result = await response.json();
      console.log('File name:', result.filename);
      console.log('Notebook', result.nb_resp);
      console.log('Initial result.response:', result.nb_resp);
      console.log('Keys in result.response:', Object.keys(result.nb_resp));
      setLoading(false);
        // Additional logging to verify the structure of result.response
      setNotebook(result.nb_resp)
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  const downloadNotebook = () => {
    console.log("Downloading notebook!!!")
    console.log(notebook)
    const blob = new Blob([notebook], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const newFileName = filename.split('.').slice(0, -1).join('.') + '-assistant.ipynb';
    link.download = newFileName; // Name of the file to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  function DownloadAssistantNotebook() {
    return (
      <button
        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 cursor-pointer"
        onClick={downloadNotebook}
      >
        Download Assistant Notebook
      </button>
    )
  };

  return (
    isLoggedIn && (
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link href="/" className="flex items-center justify-center" prefetch={false}>
            <NotebookIcon className="h-6 w-6" />
            <span className="sr-only">AI Notebook Assistant</span>
          </Link>
          <AuthNavigation />
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Welcome, {username}!
                    </h1>
                    <div className="h-4" />
                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                      Here you can upload your Jupyter or Databricks notebooks for
                      our assistant to process and enhance.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 min-[400px]:flex-row">
                    <label
                      htmlFor="upload-notebook"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 cursor-pointer"
                    >
                      Select Notebook
                    </label>
                    <form onSubmit = {handleSubmit}>
                      <input
                        id="upload-notebook"
                        type="file"
                        // accept=".ipynb"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <button type="submit" className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 cursor-pointer"
                      >
                        Upload Notebook
                      </button>
                    </form>
                  </div>
                  <div>
                    {filename && (
                      <p className="text-gray-500">Selected file: {filename}</p>
                    )}
                  </div>
                  <div className="flex justify-center">
                    {loading && <LoadingAnimation />}
                  </div>
                  <div>
                    {notebook && <DownloadAssistantNotebook />}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
            </div>
          </section>
        </main>
      </div>
    )
  )
}

function NotebookIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </svg>
  )
}

function LoadingAnimation() {
  return (<Triangle
    visible={true}
    height="80"
    width="80"
    color="#4a4a4a"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />)
}
