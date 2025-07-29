"use client";
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GradientButton from '../../components/GradientButton';
import { ChevronLeft, KeyboardArrowUp, Add } from '@mui/icons-material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function AuchinachieServices() {
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
                            Auchinachie Sees 37% YOY Lift in Flip Rate
                        </h1>
                        
                        {/* Video Section */}
                        <div className="mt-12">
                            <div className="bg-white border border-zinc-200 p-6">
                                <iframe 
                                    width="100%" 
                                    height="750" 
                                    src="https://www.youtube.com/embed/4NDbm_CwUjc?si=f7TNMeN6T9RuVOju" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        45%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-zinc-600">
                                    YOY Increase in HVAC Flip Rate
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        50%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-zinc-600">
                                    MOM Increase in Plumbing Flip Rate
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        90%
                                    </div>
                                    <Add sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-zinc-600">
                                    Overall Dispatcher Utilization
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Auchinachie Logo */}
                <section className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                        <a href="https://www.auchinachie.com/" target="_blank">
                            <Image src="/case-studies/auchinachie.jpeg" alt="Auchinachie Services" width={600} height={200} className="max-h-[200px] object-contain hover:opacity-80 transition-opacity cursor-pointer" />
                        </a>
                    </div>
                </section>

                {/* Case Study Content */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                <a href="https://www.auchinachie.com/" target="_blank" className="text-blue font-semibold underline">
                                    Auchinachie
                                </a> has been providing HVAC and Plumbing services to upstate New York since 1906. They joined Nexstar as a founding member in the 1990s, and are at the forefront of dispatching technology, having tried everything.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Auchinachie Struggled Trading Off Right Tech Right Call With a Large Service Area
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                To call Auchinachie's service area wide is an understatement. Their technicians travel far and wide, from the baseball fields of Cooperstown to the Finger Lakes region, some 140 miles away. Basing their dispatch decisions on precise historical data had always been one of their rocks, but when you introduce the distance their team covers on a daily basis, the calculus becomes even more daunting. <em>"Before Probook, we would keep techs in specific areas and have them run all the calls in that area no matter what that call was. It was just impossible to know when to send a tech on a long drive for a better call,"</em> said Dani Dascher, Dispatcher.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Auchinachie was making dispatching decisions based on general knowledge of their technicians rather than hard facts. <em>"We were kind of using our gut feeling before. After seeing Probook's revenue heatmap, we realized some techs we thought were B players were actually A players, and some we thought were A players were actually B players,"</em> said Brandy Heesh, Operations Manager.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Probook Empowered Auchinachie with Data-Backed Decisions
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                After years of messing with dispatch automation unsuccessfully, they found an easy-to-implement solution in Probook.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Probook's assessment of opportunity cost made dispatching for dollars across a service area as wide as Auchinachie's easily manageable. While Probook maximizes for revenue, it's implicitly minimizing driving time, where it can. Probook isn't thinking that an extra 40 minute drive is 2 gallons of gas at $3.83. It's figuring that extra 40 minute drive as 0.7 of a call that a tech can't get to. That opportunity cost is key for profitably trading off driving time with expected sales performance — something human dispatchers consistently struggle with. For Auchinachie, the impact is amplified by how wide their zone is.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                The effects hit dispatchers the strongest. Mike Sullivan, a 20 year plumbing veteran turned Auchinachie's lead dispatcher, explained, <em>"Probook has allowed me to go on vacation and not get 20 phone calls from the newer dispatchers asking what to do"</em>. This observation is especially powerful out of Mike, who, like most old school plumbers, is skeptical of new software, especially AI-driven tools. Mike furthered <em>"I would always just try to clear the board. Now, were really maximizing the board"</em>.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-zinc-50">
                                <p className="text-lg italic text-zinc-700 font-serif">
                                    "Probook has literally split the amount of work I do per day in half."
                                </p>
                                <p className="text-base text-zinc-600 mt-2">
                                    — Dani Dascher, Dispatcher
                                </p>
                            </blockquote>

                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                The calmness that comes with knowing their decisions are data-backed led to Auchinachie trusting Probook to make over 90% of their dispatching decisions in June, resulting in a massive ROI.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Auchinachie Leadership Agrees, Probook Drives Significant Growth
                            </h3>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Auchinachie's use of Probook through June 2024 resulted in a <strong>44.9% increase in HVAC flip rate</strong>, when compared to June 2023 to account for seasonality, as well as a <strong>50.2% increase in plumbing flip rate</strong> when compared to the month prior to launching Probook, ending on their launch day, May 13th.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                They attribute this growth to Probook because the precise historical data and drive time calculations allowed Probook to make the perfect choices between sending techs on longer drives or less optimal calls. These smart dispatching decisions <strong>increased their net billable hour efficiency by 8.3%</strong>. <em>"Probook takes out the guesswork and the emotions of the dispatcher. It allows us to know the absolute best technician for each call, and that's huge."</em> said Chris Holleran, Vice President.
                            </p>
                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                Probook didn't just improve how Auchinachie dispatched, but also improved how techs performed at the job.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-zinc-50">
                                <p className="text-lg italic text-zinc-700 font-serif">
                                    "The techs are realizing that the better they do on a call, the better calls they're going to get in the future. They're looking for more ways to benefit the customer and it's improving their customer service."
                                </p>
                                <p className="text-base text-zinc-600 mt-2">
                                    — Brandy Heesh, Operations Manager
                                </p>
                            </blockquote>

                            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                                When you do the math on average ticket and flip rate increase that Auchinachie leadership attributes to Probook, the ROI is more than 10x.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-zinc-50">
                                <p className="text-lg italic text-zinc-700 font-serif">
                                    "Our technicians have increased the amount they convert leads to our sales department by 37%"
                                </p>
                                <p className="text-base text-zinc-600 mt-2">
                                    — Chris Holleran, Vice President
                                </p>
                            </blockquote>
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
