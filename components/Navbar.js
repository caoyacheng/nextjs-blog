"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { ModeToggle } from './theme-btn';



const Navbar = () => {

    const [progress, setProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        setProgress(20)

        setTimeout(() => {
            setProgress(40)
        }, 100);

        setTimeout(() => {
            setProgress(100)
        }, 400);

    }, [pathname])



    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, 50);
    }, [])


    return (
        <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
            <LoadingBar
                color='#933ce6'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}><div className="text-lg font-bold">
                    <span className="font-serif">小曹学AI</span>
                </div></Link>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        <span className="font-serif">首页</span>
                    </Link>
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        <span className="font-serif">学习</span>
                    </Link>
                    <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">
                        <span className="font-serif">联系</span>
                    </Link>
                    <div className='flex items-center'>
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden">
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <Sheet>
                        <SheetTrigger>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4">
                                    <span className="font-serif">小曹学AI</span>
                                </SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/">
                                            <span className="font-serif">首页</span>
                                        </Link>
                                        <Link href="/blog">
                                            <span className="font-serif">学习</span>
                                        </Link>
                                        <Link href="/about">
                                            <span className="font-serif">联系</span>
                                        </Link>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>


            </div>



        </nav>
    );
};

export default Navbar