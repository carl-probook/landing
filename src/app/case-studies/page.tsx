"use client";
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { ChevronRight } from '@mui/icons-material';

export default function CaseStudies() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <section className="py-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            Case Studies
                        </h1>
                        <p className="text-lg text-zinc-600">
                            How Probook is helping industry-leading home service providers dispatch more efficiently
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <a href="/case-studies/auchinachie" className="bg-white border border-zinc-200 p-8 hover:shadow-md transition-shadow flex flex-col gap-8 justify-between">
                                <Image src="/case-studies/auchinachie.jpeg" alt="Auchinachie Services" width={400} height={100} className="max-h-[100px] object-contain object-left w-full" />
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl tracking-tight font-semibold font-serif">
                                        Auchinachie Sees 37% YOY Lift in Flip Rate
                                    </h3>
                                    <p className="text-zinc-600">
                                        &ldquo;Our technicians have increased the amount they turn over leads to our sales department by 37%&rdquo; — Chris Holleran, General Manager
                                    </p>
                                    <div className="flex gap-1 items-center">
                                        <p>Read More</p>
                                        <ChevronRight sx={{ fontSize: 16 }} />
                                    </div>
                                </div>
                            </a>

                            <a href="/case-studies/tr-miller" className="bg-white border border-zinc-200 p-8 hover:shadow-md transition-shadow flex flex-col gap-8 justify-between">
                                <Image src="/case-studies/trmiller.png" alt="TR Miller Heating, Cooling & Plumbing" width={400} height={100} className="max-h-[100px] object-contain object-left w-full" />
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl tracking-tight font-semibold font-serif">
                                        TR Miller Increased June HVAC Sales By $190,000
                                    </h3>
                                    <p className="text-zinc-600">
                                        “Probook gave us a triple win: more revenue, happier dispatchers, and satisfied customers” — General Manager, Jim Sloan
                                    </p>
                                    <div className="flex gap-1 items-center">
                                        <p>Read More</p>
                                        <ChevronRight sx={{ fontSize: 16 }} />
                                    </div>
                                </div>
                            </a>

                            <a href="/case-studies/blake-brothers" className="bg-white border border-zinc-200 p-8 hover:shadow-md transition-shadow flex flex-col gap-8 justify-between">
                                <Image src="/case-studies/blake.avif" alt="Blake Brothers" width={400} height={100} className="max-h-[100px] object-contain object-left w-full" />
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl tracking-tight font-semibold font-serif">
                                        Blake Brothers: “If You Take Probook Away, I Quit”
                                    </h3>
                                    <p className="text-zinc-600">
                                        Andrea said it best. Probook’s impact on Blake Brothers serves as a compelling case for others looking to standardize their dispatching operation.
                                    </p>
                                    <div className="flex gap-1 items-center">
                                        <p>Read More</p>
                                        <ChevronRight sx={{ fontSize: 16 }} />
                                    </div>
                                </div>
                            </a>

                            <a href="/case-studies/lion" className="bg-white border border-zinc-200 p-8 hover:shadow-md transition-shadow flex flex-col gap-8 justify-between">
                                <Image src="/case-studies/lion.png" alt="Lion Home Service" height={100} width={400} className="max-h-[100px] object-contain object-left w-full" />
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-2xl tracking-tight font-semibold font-serif">
                                        Lion Home Service Increases Average Sale 18% YOY
                                    </h3>
                                    <p className="text-zinc-600">
                                        &ldquo;Since integrating Probook into our operations, we&rsquo;ve seen our average ticket value soar by an impressive 18%&rdquo; — Alyssa Porta, Operations Director
                                    </p>
                                    <div className="flex gap-1 items-center">
                                        <p>Read More</p>
                                        <ChevronRight sx={{ fontSize: 16 }} />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <section className="w-full">
                    <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-8 bg-dark-blue items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-3xl md:text-4xl font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                                Bigger Tickets. More Flips.
                            </h1>
                            <p className="text-white text-lg">
                                Dispatch like the best in the industry. Schedule a demo to learn how Probook can help your business capture more revenue today.
                            </p>
                        </div>
                        <a href="https://calendly.com/george-eliadis/probook-demo" target="_blank" className="text-black px-6 py-3 text-lg cursor-pointer flex items-center justify-center gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-full md:w-fit whitespace-nowrap">
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
