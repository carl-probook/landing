import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-white border-b border-light-grey">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <Link href="/">
                        <Image src="/probook.svg" alt="Probook" width={120} height={32} className="h-8" draggable={false} />
                    </Link>
                    <nav className="flex space-x-8">
                        <Link href="/case-studies" className="font-serif text-base lg:text-lg text-black hover:text-zinc-600 transition-colors transition-200">Case Studies</Link>
                        <Link href="/careers" className="font-serif text-base lg:text-lg text-black hover:text-zinc-600 transition-colors transition-200">Careers</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
