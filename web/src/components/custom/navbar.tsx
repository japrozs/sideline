import React from "react";
import { Logo } from "./logo";
import { Button } from "./button";
import { useMeQuery } from "@/generated/graphql";
import { TbPencil } from "react-icons/tb";
import { LuBell } from "react-icons/lu";
import { BiBell } from "react-icons/bi";
import { ApolloClient, InMemoryCache } from "@apollo/client";

interface NavbarProps {
    monogram?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ monogram }) => {
    const { data, loading } = useMeQuery();
    console.log("data : ", data);
    return (
        <div className="px-4">
            <div className="flex items-center py-2 max-w-[76rem] mx-auto border-b border-gray-100">
                <a href="/">
                    <Logo
                        className="text-green-main h-8 my-0.5 w-auto"
                        monogram={monogram}
                    />
                </a>
                {!loading && data && data.me ? (
                    <div className="flex items-center gap-x-3 ml-auto mr-0">
                        <div className="w-24">
                            <a href="/app/new">
                                <Button
                                    label="Write"
                                    colored
                                    icon={TbPencil}
                                    iconAnimate={false}
                                    color="bg-white border-none hover:bg-gray-50"
                                />
                            </a>
                        </div>
                        <div className="w-10">
                            <a href="/app/notifications">
                                <Button
                                    label=""
                                    colored
                                    icon={BiBell}
                                    color="bg-white border-none hover:bg-gray-50"
                                />
                            </a>
                        </div>
                    </div>
                ) : (
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
                )}
            </div>
        </div>
    );
};
