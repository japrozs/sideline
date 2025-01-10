import { Navbar } from "@/components/custom/navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
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
            <p className="futura text-green-500 text-3xl">DASHBOARD</p>
        </div>
    );
}
