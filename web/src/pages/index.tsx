import { Logo } from "@/components/custom/logo";
import React from "react";

export default function Home() {
    return (
        <div className="p-2">
            <Logo className="text-green-main h-10 w-auto mb-1.5" />
            <a
                href="/login"
                className="text-green-main font-medium menlo hover:underline"
            >
                login
            </a>
            <br />
            <a
                href="/signup"
                className="text-green-main font-medium menlo hover:underline"
            >
                signup
            </a>
        </div>
    );
}
