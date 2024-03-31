import { GeistMono } from 'geist/font/mono';
import Image from 'next/image';

export function SiteFooter() {
    return (
        <footer className="bottom-0 text-center mt-3 mb-5">
            <div className="flex flex-row justify-center mx-5 my-3 space-x-4 ">
                <a href="https://www.linkedin.com/in/ayaan-shaik/" target="_blank" className=""><Image src="/linkedin-logo.png" width="30" height="30" alt="Linkedin Logo" /></a>
                <a href="https://github.com/ayaanmayooq" target="_blank" className="dark:invert"><Image src="/github-logo.png" width="30" height="30" alt="GitHub Logo" /></a>
            </div>
            <a className="" href="https://github.com/ayaanmayooq/dummyecomm" target="_blank">
                <span className={`${GeistMono.className} block px-3`}>
                    Engineered by Ayaan<br />using Next.js and Tailwind CSS
                </span>
            </a>
        </footer>
    )
}