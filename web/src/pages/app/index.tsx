import { Logo } from "@/components/custom/logo";
import { useIsAuth } from "@/utils/use-is-auth";
import React from "react";

interface AppIndexProps {}

const AppIndex: React.FC<AppIndexProps> = ({}) => {
    useIsAuth();
    return (
        <div className="p-2">
            <Logo className="text-green-main h-10 w-auto mb-1.5" />
            <p className="futura text-green-500 text-3xl">DASHBOARD</p>
        </div>
    );
};

export default AppIndex;
