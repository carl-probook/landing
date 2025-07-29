import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Careers() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <section className="py-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            Careers
                        </h1>
                        <p className="text-lg text-zinc-600">
                            We&rsquo;re a small, cracked team with diverse professional backgrounds focused on transforming the home services industry. If you&rsquo;re ready to work hard on complex problems, join us to be part of the fastest-growing AI startup in New York.
                        </p>
                    </div>
                </section>

                <section className="mb-20">
                    <div className="max-w-7xl mx-auto px-8 flex flex-col gap-12">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-black text-3xl font-semibold font-serif">
                                Sales
                            </h2>
                            <Link href="/apply?subject=Account Executive Application" className="text-black p-4 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white border border-zinc-200 transition-200 transition-all hover:bg-zinc-50 hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Founding Account Executive
                                </h2>
                                <div className="flex gap-2 text-zinc-600 text-base">
                                    <p>
                                        Full-time
                                    </p>
                                    <p>
                                        &bull;
                                    </p>
                                    <p>
                                        New York City, NY
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-black text-3xl font-semibold font-serif">
                                Operations
                            </h2>
                            <Link href="/apply?subject=Deployment Strategist Application" className="text-black p-4 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white border border-zinc-200 transition-200 transition-all hover:bg-zinc-50 hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Deployment Strategist
                                </h2>
                                <div className="flex gap-2 text-zinc-600 text-base">
                                    <p>
                                        Full-time
                                    </p>
                                    <p>
                                        &bull;
                                    </p>
                                    <p>
                                        New York City, NY
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-black text-3xl font-semibold font-serif">
                                Engineering
                            </h2>
                            <Link href="/apply?subject=Software Engineer (Backend) Application" className="text-black p-4 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white border border-zinc-200 transition-200 transition-all hover:bg-zinc-50 hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Software Engineer (Backend)
                                </h2>
                                <div className="flex gap-2 text-zinc-600 text-base">
                                    <p>
                                        Full-time
                                    </p>
                                    <p>
                                        &bull;
                                    </p>
                                    <p>
                                        New York City, NY
                                    </p>
                                </div>
                            </Link>
                            <Link href="/apply?subject=Software Engineer (Machine Learning) Application" className="text-black p-4 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white border border-zinc-200 transition-200 transition-all hover:bg-zinc-50 hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Software Engineer (Machine Learning)
                                </h2>
                                <div className="flex gap-2 text-zinc-600 text-base">
                                    <p>
                                        Full-time
                                    </p>
                                    <p>
                                        &bull;
                                    </p>
                                    <p>
                                        New York City, NY
                                    </p>
                                </div>
                            </Link>
                            <Link href="/apply?subject=Software Engineer (Product) Application" className="text-black p-4 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white border border-zinc-200 transition-200 transition-all hover:bg-zinc-50 hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Software Engineer (Product)
                                </h2>
                                <div className="flex gap-2 text-zinc-600 text-base">
                                    <p>
                                        Full-time
                                    </p>
                                    <p>
                                        &bull;
                                    </p>
                                    <p>
                                        New York City, NY
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-black text-3xl font-semibold font-serif">
                                Other
                            </h2>
                            <Link href="/apply?subject=Deployment Strategist Application" className="text-black p-4 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white border border-zinc-200 transition-200 transition-all hover:bg-zinc-50 hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    General Application
                                </h2>
                                <div className="flex gap-2 text-zinc-600 text-base">
                                    <p>
                                        Full-time
                                    </p>
                                    <p>
                                        &bull;
                                    </p>
                                    <p>
                                        New York City, NY
                                    </p>
                                </div>
                            </Link>
                        </div>
                    <div className="flex flex-col gap-8 py-24">
                        <h2 className="text-3xl text-black font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                            Meet the Team
                        </h2>
                        <div className="flex justify-center gap-4 w-full">
                            <Image 
                                src="/team/founders.png" 
                                alt="Founders" 
                                width={300} 
                                height={256} 
                                className="w-auto object-cover mx-auto"
                                style={{ height: '256px', width: 'auto', objectFit: 'contain' }}
                                draggable={false}
                            />
                            <Image 
                                src="/team/team1.JPEG" 
                                alt="Team Photo" 
                                width={300} 
                                height={256} 
                                className="w-auto object-cover mx-auto"
                                style={{ height: '256px', width: 'auto', objectFit: 'contain' }}
                                draggable={false}
                            />
                            <Image 
                                src="/team/team2.png" 
                                alt="Team Photo" 
                                width={300} 
                                height={256} 
                                className="w-auto object-cover mx-auto"
                                style={{ height: '256px', width: 'auto', objectFit: 'contain' }}
                                draggable={false}
                            />
                            <Image 
                                src="/team/team3.png" 
                                alt="Team Photo" 
                                width={300} 
                                height={256} 
                                className="w-auto object-cover mx-auto"
                                style={{ height: '256px', width: 'auto', objectFit: 'contain' }}
                                draggable={false}
                            />
                        </div>
                    </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
