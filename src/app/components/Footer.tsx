'use client';

import Image from 'next/image';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <footer className="bg-white text-white pt-12 pb-24 border-t border-light-grey mt-18">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 justify-between">
                <div className="flex flex-col items-start gap-4">
                    <Image src="/probook.svg" alt="Probook" width={120} height={32} className="h-8" draggable={false} />
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/people/Probook-HVAC-Dispatch/61551190884466/" target="_blank" className="hover:text-zinc-600 text-black transition-colors">
                            <FacebookIcon />
                        </a>
                        <a href="https://x.com/probookcto" target="_blank" className="hover:text-zinc-600 text-black transition-colors">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.youtube.com/@ProbookAI" target="_blank" className="hover:text-zinc-600 text-black transition-colors">
                            <YouTubeIcon />
                        </a>
                        <a href="https://www.linkedin.com/company/probook-solutions-inc/" target="_blank" className="hover:text-zinc-600 text-black transition-colors">
                            <LinkedInIcon />
                        </a>
                    </div>
                    <p className="text-black">
                        &copy; 2025 Probook. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-16">
                    <div className="flex flex-col gap-4">
                        <p className="text-black font-semibold">
                            Product
                        </p>
                        <a href="https://calendly.com/george-eliadis/probook-demo" target="_blank" className="text-zinc-600 hover:text-black transition-colors">
                            Book Demo
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-black font-semibold">
                            Success Stories
                        </p>
                        <a href="/case-studies/auchinachie" className="text-zinc-600 hover:text-black transition-colors">
                            Auchinachie
                        </a>
                        <a href="/case-studies/tr-miller" className="text-zinc-600 hover:text-black transition-colors">
                            TR Miller
                        </a>
                        <a href="/case-studies/blake-brothers" className="text-zinc-600 hover:text-black transition-colors">
                            Blake Brothers
                        </a>
                        <a href="/case-studies/lion" className="text-zinc-600 hover:text-black transition-colors">
                            Lion
                        </a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-black font-semibold">
                            Company
                        </p>
                        <Link href="/careers" className="text-zinc-600 hover:text-black transition-colors">
                            Open Roles
                        </Link>
                        <a href="https://docs.google.com/document/d/1tD35YeRkVDLoZLiBcobujPc1AQzJLnP8K1Il-mzrPVU/" target="_blank" className="text-zinc-600 hover:text-black transition-colors">
                            Privacy Policy
                        </a>
                        <a href="https://calendly.com/george-eliadis/probook-demo" target="_blank" className="text-zinc-600 hover:text-black transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}