import { Logo } from "@/components/custom/logo";
import { Navbar } from "@/components/custom/navbar";
import { useIsAuth } from "@/utils/use-is-auth";
import React from "react";
import { GiSevenPointedStar } from "react-icons/gi";
import { FiBookmark } from "react-icons/fi";
import { LuPlus } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

interface AppIndexProps {}

const AppIndex: React.FC<AppIndexProps> = ({}) => {
    useIsAuth();
    return (
        <div>
            <Navbar monogram />
            <div className="flex justify-center">
                <div className="max-w-[76rem] w-full mx-10">
                    <div className="flex items-stretch my-5 lg:gap-x-10">
                        <div className="w-full lg:w-4/6">
                            <p className="futura text-rich-black text-3xl mb-5">
                                YOUR ARTICLES
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="transition duration-75 ease-linear h-44 flex items-center justify-center rounded-sm cursor-pointer hover:bg-white text-gray-500 hover:text-green-main hover:border-green-main bg-gray-50 border border-gray-300">
                                    <BiPlus className="text-5xl" />
                                </div>
                            </div>
                        </div>

                        <div className="hidden lg:block w-2/6 pl-5 border-l border-gray-200">
                            <div className="mt-7 flex items-start gap-x-2.5">
                                <IoPerson className="mt-[0.16rem] text-gray-400 w-5 h-auto" />
                                <div className="flex-grow">
                                    <p className="font-medium text-smol flex items-center mb-1">
                                        Profile
                                    </p>
                                    <div className="bg-gray-50/50 p-3 rounded-md border border-gray-200">
                                        <p className="text-sm text-black font-medium">
                                            This is going to be the section
                                            where the user profile is displayed.
                                        </p>
                                    </div>
                                    <p className="transition duration-75 cursor-pointer mt-2 ml-auto mr-0 text-green-main hover:bg-emerald-50 w-max text-sm py-1 px-2 font-medium rounded-md">
                                        Edit profile
                                    </p>
                                </div>
                            </div>
                            <div className="mt-7 flex items-start gap-x-2.5">
                                <GiSevenPointedStar className="mt-[0.16rem] text-gray-400 w-6 h-auto" />
                                <div className="flex-grow">
                                    <p className="font-medium text-smol flex items-center mb-2">
                                        Recommended Topics
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {[
                                            "NFL",
                                            "MLB",
                                            "MLS",
                                            "College Football",
                                            "PGA",
                                            "Baltimore Ravens",
                                            "Controversy",
                                        ].map((topic, k: number) => (
                                            <div
                                                key={k}
                                                className="no-break bg-gray-50 text-[0.8rem] font-medium py-[0.05rem] px-2 border border-gray-300 rounded-full"
                                            >
                                                <p>{topic}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="transition duration-75 cursor-pointer mt-2 ml-auto mr-0 text-green-main hover:bg-emerald-50 w-max text-sm py-1 px-2 font-medium rounded-md">
                                        See more topics
                                    </p>
                                </div>
                            </div>
                            <div className="mt-7 flex items-start gap-x-2.5">
                                <FiBookmark className="mt-[0.16rem] text-gray-400 w-8 h-auto" />
                                <div className="flex-grow">
                                    <p className="font-medium text-sm flex items-center mb-1">
                                        Reading List
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Click the bookmark icon on any story to
                                        easily add it to your reading list or a
                                        custom list that you can share.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppIndex;
