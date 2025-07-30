"use client";
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronLeft, KeyboardArrowUp, Add } from '@mui/icons-material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function LionHomeService() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <section className="pt-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <div className="mb-6">
                            <a href="/case-studies" className="text-black hover:text-black hover:opacity-80 transition-colors flex items-center gap-1 w-fit">
                                <ChevronLeft sx={{ fontSize: 16 }} />
                                All Case Studies
                            </a>
                        </div>
                        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            Lion Home Service Increases Average Sale 18% YOY Using Probook
                        </h1>
                        
                        <div className="my-12">
                            <div className="bg-white border border-light-grey p-6">
                                <iframe 
                                    width="100%" 
                                    height="750" 
                                    src="https://www.youtube.com/embed/pNHCZZwf4kg?si=GFpKPXSQLhnpiEvH" 
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


                <section className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        49%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-black">
                                    YOY Increase in HVAC Flip Rate
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        18%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-black">
                                    YOY Increase in Average Sale
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        91%
                                    </div>
                                    <Add sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-lg text-black">
                                    Overall Dispatcher Utilization
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                        <a href="https://lionhomeservice.com/" target="_blank">
                            <Image src="/case-studies/lion.png" alt="Lion Home Service" width={600} height={200} className="max-h-[200px] object-contain hover:opacity-80 transition-opacity cursor-pointer" />
                        </a>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-black leading-relaxed mb-6">
                                <a href="https://lionhomeservice.com/" target="_blank" className="text-blue font-semibold underline">
                                    Lion Home Service
                                </a> is Northern Colorado&rsquo;s premiere HVAC, plumbing, sewer, and electrical company. Based out of Fort Collins, their technicians serve the Interstate 25 corridor all the way up through southern Wyoming.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Lion is a Metrics-Driven Organization
                            </h3>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                &ldquo;We&rsquo;re a metric-driven organization and have always run a tight ship,&rdquo; said Operations Director Alyssa Porta. Alyssa regularly posts technician performance metrics, updated daily, for the entire dispatch team to see. When the Probook team first came onsite on May 28th, Alyssa fell in love with the insights that instantly became available to her team. But she was even more excited about the lift in performance she had heard so many others experience.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Probook Increased Average Sale 18% YOY
                            </h3>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                &ldquo;Since integrating Probook into our operations, we&rsquo;ve seen our average ticket value soar by an impressive 18%&rdquo; said Alyssa.
                            </p>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                Flip rate was especially higher over the same period last year, which is a by product of how Probook tracks sales all the way through the install, accurately crediting techs who flip.
                            </p>
                            
                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-extra-light-grey">
                                <p className="text-lg italic text-dark-grey">
                                    &ldquo;Probook has made our dispatching more efficient, allowing us to handle more calls without increasing staff. The results speak for themselves.&rdquo;
                                </p>
                                <p className="text-base text-black mt-2">
                                    — General Manager, Bart Palmer
                                </p>
                            </blockquote>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Dispatchers Love Probook&rsquo;s Structure
                            </h3>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                Dispatcher Krystin Hines enjoys how structured Probook makes assigning the board.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-extra-light-grey">
                                <p className="text-lg italic text-dark-grey">
                                    &ldquo;Probook has halved the amount of work we do daily.&rdquo;
                                </p>
                                <p className="text-base text-black mt-2">
                                    — Lead Dispatcher, Krystin Hines
                                </p>
                            </blockquote>

                            <p className="text-lg text-black leading-relaxed mb-6">
                                Monica Ramos, another member of Lion&rsquo;s dispatch team, explained that she&rsquo;s noticed an increase in 5-star Google reviews now that they have more time to spend on the phone with customers, answering their questions and giving them more accurate arrival windows. &ldquo;The positive feedback from customers has been amazing,&rdquo; said Monica.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Putting It All Together: The ROI
                            </h3>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                Probook delivered measurable success across all service lines when compared to June 2023, as well as January 2024&rsquo;s Arctic Freeze, which brought similar demand volumes as this June.
                            </p>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                Since launching Probook, HVAC flip rate is up 49.7% over the same period last year, while overall sales per job is up 19.7%. Lion employs a selling tech model, which means Probook funnels their top technicians a combination of estimates and their best service calls.
                            </p>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                Probook also made a heavy dent in Lion&rsquo;s driving time. Before Probook, Lion&rsquo;s average route was 27 minutes. Since launching Probook, their average drive is now less than 21 minutes.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-extra-light-grey">
                                <p className="text-lg italic text-dark-grey">
                                    &ldquo;All the dispatchers are trusting Probook. They quickly learned how to make it work, and it&rsquo;s been driving our dispatching decisions since our first day with them.&rdquo;
                                </p>
                                <p className="text-base text-black mt-2">
                                    — General Manager, Bart Palmer
                                </p>
                            </blockquote>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Conclusion
                            </h3>
                            <p className="text-lg text-black leading-relaxed mb-6">
                                Alyssa explains, &ldquo;Their exceptional customer service has been a game-changer, consistently exceeding our expectations. Our dispatch team is now more efficient and evolving as a department, thanks to the positive impact Probook has made&rdquo;.
                            </p>
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
                        <a href="https://calendly.com/george-eliadis/probook-demo" target="_blank" className="text-black px-6 py-3 text-lg cursor-pointer flex items-center justify-center gap-1 bg-white transition-200 transition-all hover:bg-light-grey hover:shadow-lg h-fit w-full md:w-fit whitespace-nowrap">
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
