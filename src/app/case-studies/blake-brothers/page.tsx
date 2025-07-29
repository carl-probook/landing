"use client";
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GradientButton from '../../components/GradientButton';
import { ChevronLeft, KeyboardArrowUp, Add } from '@mui/icons-material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function BlakeBrothers() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="pt-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <div className="mb-6">
                            <a href="/case-studies" className="text-zinc-600 hover:text-black transition-colors flex items-center gap-1 w-fit">
                                <ChevronLeft sx={{ fontSize: 16 }} />
                                All Case Studies
                            </a>
                        </div>
                        <h1 className="text-4xl md:text-6xl mb-6 text-black font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            Blake Brothers: "If You Take Probook Away, I Quit"
                        </h1>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        15%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-zinc-600">
                                    Increase in Conversion Rate
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        57%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-zinc-600">
                                    Increase in Flip Rate
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        13%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-zinc-600">
                                    Increase in Total Job Average
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blake Brothers Logo */}
                <section className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                        <a href="https://blakebrothers.com/" target="_blank">
                            <Image src="/case-studies/blake.avif" alt="Blake Brothers" width={600} height={200} className="max-h-[200px] object-contain hover:opacity-80 transition-opacity cursor-pointer" />
                        </a>
                    </div>
                </section>

                {/* Case Study Content */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                <a href="https://blakebrothers.com/" target="_blank" className="text-blue font-semibold underline">
                                    Blake Brothers
                                </a>, Alabama's oldest plumbing company, has served the Huntsville area since 1884. Originally known as H.C. Blake, they have been Northern Alabama's trusted choice for plumbing, heating, cooling, and electrical expertise for more than 140 years.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Taking Subjectivity Out of Dispatching
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                When we first met General Manager, Jake Stadler, his goal was clear: get rid of gut feeling in the dispatch room. "Before using Probook, a new dispatcher needed around 2 months to start assigning jobs independently. After ProBook, our new hires can confidently dispatch using Probook's decisions after about 2-3 weeks of training," said Lead Dispatcher, Andrea Williams.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Higher Flip Rates, Higher Conversion Rates and Higher Total Job Averages
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Probook delivered measurable success across all three of Blake's trade lines: HVAC, Plumbing and Electrical service. When compared to June and July of 2023, two months of comparable demand call rates, the Blake team experienced the following.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-zinc-50">
                                <p className="text-lg font-semibold text-zinc-700 font-serif mb-2">
                                    Conversion Rate: Increased 14.9%
                                </p>
                                <p className="text-lg font-semibold text-zinc-700 font-serif mb-2">
                                    Flip Rate: Increased 56.6%
                                </p>
                                <p className="text-lg font-semibold text-zinc-700 font-serif">
                                    Total Job Average: Increased 13.05%
                                </p>
                            </blockquote>

                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Flip rate was especially higher over the same period last year, which is a by product of how Probook tracks sales all the way through the install, accurately crediting techs who flip.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-zinc-50">
                                <p className="text-lg italic text-zinc-700 font-serif">
                                    "Probook literally shows you the right answer every time."
                                </p>
                                <p className="text-base text-zinc-600 mt-2">
                                    — Lead Dispatcher, Andrea Williams
                                </p>
                            </blockquote>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                "If You Take Probook Away, I Quit"
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Probook has also streamlined the Blake Brothers dispatch teams' role. Take it from lead dispatcher, Andrea Williams, who was seen writing this note.
                            </p>

                            <div className="my-8">
                                <div className="border border-zinc-200 p-4 w-fit">
                                    <Image 
                                        src="/testimonials/note.avif" 
                                        alt="Note from Andrea Williams: If you take Probook away, I quit" 
                                        width={400} 
                                        height={300} 
                                        className="max-w-full h-auto"
                                    />
                                </div>
                            </div>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-zinc-50">
                                <p className="text-lg italic text-zinc-700 font-serif">
                                    "The Probook team has been with us every step of the way, from in-person training during onboarding to weekly check-in meetings, they have been supportive and helpful."
                                </p>
                                <p className="text-base text-zinc-600 mt-2">
                                    — Lead Dispatcher, Andrea Williams
                                </p>
                            </blockquote>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Conclusion
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Andrea said it best. Probook's impact on Blake Brothers, a proud Nexstar member that had already been dispatching for profit, serves as a compelling case for other companies who are looking to standardize their dispatching operation.
                            </p>
                        </div>
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
