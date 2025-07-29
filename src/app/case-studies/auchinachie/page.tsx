"use client";
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GradientButton from '../../components/GradientButton';
import { ChevronLeft } from '@mui/icons-material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function AuchinachieServices() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="py-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <div className="mb-6">
                            <a href="/case-studies" className="text-zinc-600 hover:text-black transition-colors flex items-center gap-1 w-fit">
                                <ChevronLeft sx={{ fontSize: 16 }} />
                                All Case Studies
                            </a>
                        </div>
                        <h1 className="text-4xl md:text-6xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            Auchinachie Services
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-3xl">
                            How a 37% increase in flip rate transformed their sales process
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full">
                    <div className="max-w-7xl mx-auto px-8 py-12 flex gap-8 bg-dark-blue items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-3xl md:text-4xl font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                                Bigger Tickets. More Flips.
                            </h1>
                            <p className="text-white text-lg">
                                Dispatch like the best in the industry. Schedule a demo to learn how Probook can help your business capture more revenue today.
                            </p>
                        </div>
                        <a href="https://calendly.com/george-eliadis/probook-demo" target="_blank" className="text-black px-6 py-3 text-lg cursor-pointer flex items-start gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-fit">
                            Book a Demo
                            <NorthEastIcon sx={{ fontSize: 14 }} />
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
