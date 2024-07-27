import React, { useEffect, useLayoutEffect, useState } from "react";
import Link from 'next/link';

export default function AuthNavigation() {

    return (
        // TODO: Add the correct links
        <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Contact
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Profile
            </Link>
            <Link href="/auth/logout" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                Logout
            </Link>
        </nav>
    );
}