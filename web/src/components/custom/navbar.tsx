import React from "react";
import { Logo } from "./logo";
import { Button } from "./button";
import { useMeQuery } from "@/generated/graphql";
import { TbArticle, TbPencil, TbSettings } from "react-icons/tb";
import { LuBell } from "react-icons/lu";
import { BiBell, BiStats } from "react-icons/bi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoExitOutline, IoPersonOutline, IoStatsChart } from "react-icons/io5";
import { FiBookmark } from "react-icons/fi";
import { IoMdExit } from "react-icons/io";

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
                        <DropdownMenu>
                            <DropdownMenuTrigger className="focus:ring-0 focus:outline-none">
                                <img
                                    src="https://i.redd.it/80hxyr8x3h6z.jpg"
                                    className="w-7 h-7 rounded-full"
                                />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="mt-1 mx-1 w-48">
                                <a href="/app">
                                    <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                                        <IoPersonOutline className="text-gray-400 mr-1.5" />
                                        Profile
                                    </DropdownMenuItem>
                                </a>
                                <a href="/app">
                                    <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                                        <TbArticle className="text-gray-400 mr-1.5" />
                                        Articles
                                    </DropdownMenuItem>
                                </a>
                                <a href="/app">
                                    <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                                        <FiBookmark className="text-gray-400 mr-1.5" />
                                        Library
                                    </DropdownMenuItem>
                                </a>
                                <a href="/app">
                                    <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                                        <BiStats className="text-gray-400 mr-1.5" />
                                        Stats
                                    </DropdownMenuItem>
                                </a>
                                <DropdownMenuSeparator />
                                <a href="/app">
                                    <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                                        <TbSettings className="text-gray-400 mr-1.5" />
                                        Settings
                                    </DropdownMenuItem>
                                </a>
                                <DropdownMenuSeparator />
                                <a href="/app">
                                    <DropdownMenuItem className="font-medium text-red-400 focus:text-red-500 focus:bg-red-50 text-sm cursor-pointer">
                                        <IoMdExit className="text-red-400 mr-1.5" />
                                        Sign out
                                    </DropdownMenuItem>
                                </a>
                            </DropdownMenuContent>
                        </DropdownMenu>
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
