import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const isAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/is-auth`;

    try {
        // Send a request to your backend auth endpoint to check if the user is authenticated
        const res = await fetch(isAuthUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Send cookies (if any) along with the request
                credentials: "include", // Ensure cookies are sent with the request
            },
        });

        // Check if the response is successful and parse the response body
        if (res.ok) {
            const data = await res.json();
            const isAuthenticated = data.authenticated ?? false; // Check 'authenticated' field

            // If the user is not authenticated, redirect to the homepage
            if (!isAuthenticated) {
                return NextResponse.redirect(new URL("/", req.nextUrl.origin));
            }
        }
    } catch (error) {
        console.error("Error checking authentication:", error);
        // If an error occurs (e.g., network issues), treat the user as unauthenticated
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
    // Allow the request to proceed if the user is authenticated or if the route is not protected
    return NextResponse.next();
}

export const config = {
    matcher: "/app/:path*", // Apply this middleware to all paths under /app/*
};
