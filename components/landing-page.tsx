/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/OIwsZbnnK4T
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
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <NotebookIcon className="h-6 w-6" />
          <span className="sr-only">AI Notebook Assistant</span>
        </Link>
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
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Supercharge Your Jupyter and Databricks Notebooks
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our AI-powered assistant helps you add documentation, split your notebook into logical sections,
                    restructure your code, and add assertions and unit tests - all with a few clicks.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <form className="flex gap-2 min-[400px]:flex-row">
                    <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                    <Button type="submit">Start a Free Trial Today</Button>
                  </form>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Notebook Workflow</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered assistant helps you focus on the core of your work, automating tedious tasks and
                  enhancing your productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Automated Documentation</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our AI assistant can generate comprehensive documentation for your notebooks, making it easier
                        to understand and share your work.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Logical Notebook Structuring</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Automatically split your notebook into logical sections based on the content, making it more
                        organized and easier to navigate.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Code Restructuring and Optimization</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our tool can analyze your code and suggest restructuring and optimization opportunities to
                        improve performance and readability.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Assertions and Unit Tests</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Automatically add assertions and unit tests to your notebook, ensuring the reliability and
                        robustness of your code.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                alt="Features"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple and Flexible Pricing</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose the plan that fits your needs and budget. No hidden fees, no surprises.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col justify-between gap-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Free</h3>
                  <p className="text-gray-500 dark:text-gray-400">Get started with our free plan.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">$0</p>
                  <ul className="grid gap-1">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Basic features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Limited usage
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Community support
                    </li>
                  </ul>
                </div>
                <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  Get Started
                </Button>
              </Card>
              <Card className="flex flex-col justify-between gap-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <p className="text-gray-500 dark:text-gray-400">Unlock all features for individuals.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">$19</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  <ul className="grid gap-1">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      All features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Unlimited usage
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Priority support
                    </li>
                  </ul>
                </div>
                <Button className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                  Get Started
                </Button>
              </Card>
              <Card className="flex flex-col justify-between gap-4 p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">For teams and organizations.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="grid gap-1">
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      All features
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Unlimited usage
                    </li>
                    <li>
                      <CheckIcon className="mr-2 inline-block h-4 w-4" />
                      Dedicated support
                    </li>
                  </ul>
                </div>
                <Button
                  variant="outline"
                  className="bg-gray-900 text-gray-50 hover:bg-gray-900/90 focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                >
                  Contact Sales
                </Button>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Take Your Notebooks to the Next Level
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our AI-powered assistant helps you streamline your notebook workflow, so you can focus on the core of
                your work.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Request Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400" />
      </footer>
    </div>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function NotebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
