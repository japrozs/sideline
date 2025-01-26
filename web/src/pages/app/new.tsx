import { Navbar } from "@/components/custom/navbar";
import React, { useState } from "react";
// import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";
import TextareaAutosize from "react-textarea-autosize";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BiStats } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { IoIosMore, IoMdExit } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { TbArticle, TbCopy, TbSettings } from "react-icons/tb";
import { TiStarOutline } from "react-icons/ti";
import { HiOutlineTrash } from "react-icons/hi";
import { LuArrowUpToLine, LuCopy, LuLink, LuUndo2 } from "react-icons/lu";

interface NewArticlePageProps {}

const NewArticlePage: React.FC<NewArticlePageProps> = ({}) => {
    const [title, setTitle] = useState("Untitled");
    const editor = useCreateBlockNote();
    return (
        <div>
            <Navbar monogram />
            <div className="mt-2.5 flex items-center justify-end max-w-[76rem] mx-auto gap-x-4">
                <p className="text-sm text-gray-700 font-medium">
                    Edited 10m ago
                </p>
                <div className="text-gray-500 hover:text-gray-900 transition duration-75 hover:bg-gray-100 px-0.5 rounded-md cursor-pointer">
                    <TiStarOutline className="text-xl " />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-gray-500 hover:text-gray-900 focus:ring-0 focus:outline-none transition duration-75 hover:bg-gray-100 px-0.5 rounded-md cursor-pointer">
                        <IoIosMore className="text-xl " />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-1 mx-1 w-48">
                        {/* <a href="/">
                                    <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                                        <FiHome className="text-gray-400 mr-1.5" />
                                        Home
                                    </DropdownMenuItem>
                                </a> */}
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
                        <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                            <LuUndo2 className="text-gray-400 mr-1.5" />
                            Undo
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                            <LuLink className="text-gray-400 mr-1.5" />
                            Copy link
                        </DropdownMenuItem>
                        <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                            <TbCopy className="text-gray-400 mr-1.5" />
                            Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="font-medium text-gray-800 hover:text-black text-sm cursor-pointer">
                            <LuArrowUpToLine className="text-gray-400 mr-1.5" />
                            Export
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="font-medium text-red-400 focus:text-red-500 focus:bg-red-50 text-sm cursor-pointer">
                            <HiOutlineTrash className="text-red-400 mr-1.5" />
                            Delete article
                        </DropdownMenuItem>
                        <div className="px-2 py-1.5">
                            <p className="text-xs text-gray-400">
                                Word count – 530 words
                            </p>
                            <p className="text-xs text-gray-400">
                                Last edited today at 1:37 AM
                            </p>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="mt-10 mx-auto max-w-4xl">
                <TextareaAutosize
                    onKeyDown={(
                        e: React.KeyboardEvent<HTMLTextAreaElement>
                    ) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                        }
                    }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="pl-14 py-1 w-full text-5xl bg-transparent font-bold break-words outline-none resize-none"
                />
                <BlockNoteView
                    className={"mt-5 "}
                    editor={editor}
                    theme={"light"}
                    data-editor
                />
            </div>
        </div>
    );
};

export default NewArticlePage;
