export default function Navbar() {
    return (
        <header className="bg-white border-b border-zinc-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">
                    <a href="/">
                        <img src="/probook.svg" alt="Probook" className="h-8" draggable="false" />
                    </a>
                    <nav className="flex space-x-8">
                        <a href="/case-studies" className="text-lg text-black hover:text-zinc-600 transition-colors transition-200">Case Studies</a>
                        <a href="/careers" className="text-lg text-black hover:text-zinc-600 transition-colors transition-200">Careers</a>
                    </nav>
                </div>
            </div>
        </header>
    );
}