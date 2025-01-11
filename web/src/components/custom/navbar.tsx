import React from "react";
import { Logo } from "./logo";
import { Button } from "./button";

interface NavbarProps {
    monogram?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ monogram }) => {
    return (
        <div className="px-4">
            <div className="flex items-center py-2 max-w-[76rem] mx-auto border-b border-gray-100">
                <a href="/">
                    <Logo
                        className="text-green-main h-8 my-0.5 w-auto"
                        monogram={monogram}
                    />
                </a>
                <div className="flex items-center gap-x-3 ml-auto mr-0">
                    <div className="w-20">
                        <a href="/login">
                            <Button
                                label="Log in"
                                colored
                                color="bg-white border-none hover:bg-gray-50"
                            />
                        </a>
                    </div>
                    <div className="w-32">
                        <a href="/signup">
                            <Button label="Get Started" colored />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
