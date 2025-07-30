"use client";
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ChevronLeft, KeyboardArrowUp } from '@mui/icons-material';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function TRMiller() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="pt-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <div className="mb-6">
                            <a href="/case-studies" className="text-black hover:text-black hover:opacity-80 transition-colors flex items-center gap-1 w-fit">
                                <ChevronLeft sx={{ fontSize: 16 }} />
                                All Case Studies
                            </a>
                        </div>
                        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            TR Miller Increased June HVAC Sales By $190,000
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
                                        10%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-base lg:text-lg text-black">
                                    Increase in Plumbing&rsquo;s Average Ticket
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        16%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-base lg:text-lg text-black">
                                    Increase in HVAC&rsquo;s Flip Rate
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="text-6xl font-serif font-semibold text-black">
                                        24%
                                    </div>
                                    <KeyboardArrowUp sx={{ fontSize: 72, color: '#005DC4' }} />
                                </div>
                                <p className="text-base lg:text-lg text-black">
                                    Increase in Average HVAC Sale
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TR Miller Logo */}
                <section className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                        <a href="https://www.trmillerheatingandcooling.com/" target="_blank">
                            <Image src="/case-studies/trmiller.png" alt="TR Miller Heating, Cooling & Plumbing" width={600} height={200} className="max-h-[200px] object-contain hover:opacity-80 transition-opacity cursor-pointer" />
                        </a>
                    </div>
                </section>

                {/* Case Study Content */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                                <a href="https://www.trmillerheatingandcooling.com/" target="_blank" className="text-blue font-semibold underline">
                                    TR Miller
                                </a> is one of Chicagoland&rsquo;s leading home service brands, with 40 service technicians and two dispatchers. After a rapid growth period, TR Miller has turned to operational initiatives to aid their continued expansion plans throughout the midwest.
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                The Challenge
                            </h3>
                            <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                                Being a longtime Nexstar member, TR Miller has always been about dispatching for dollars. However, the high-maintenance batting order they used didn&rsquo;t tell the full picture, especially when it came to blending their techs&rsquo; TGL sales with their more traditional average ticket numbers. <em>&ldquo;We used to set the board based on general knowledge rather than data. Seeing the exact dollar amounts really opened my eyes&rdquo;</em> — Dispatch Manager, Ryan Freeman
                            </p>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Probook Helped TR Miller Get Through Summer With Less Dispatchers
                            </h3>
                            <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                                The month of June— TR Miller&rsquo;s busiest season— saw them down to just <strong>&ldquo;two dispatchers&rdquo;</strong>. How did only two dispatchers manage 40 technicians so efficiently?
                            </p>
                            <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                                With Autopilot turned on, TR Miller saw its dispatch board build itself without having to lift a finger.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-extra-light-grey">
                                <p className="text-base lg:text-lg italic text-dark-grey">
                                    &ldquo;When one of our dispatchers left and two went on maternity leave, we were stuck and planning on hiring just to get through the Summer. This couldn&rsquo;t have came at better timing with Probook&rsquo;s new AutoPilot product, which allowed us to get through without any additional hires&rdquo;
                                </p>
                                <p className="text-base text-black mt-2">
                                    — General Manager, Jim Sloan
                                </p>
                            </blockquote>

                            <h3 className="text-2xl font-serif font-semibold text-black mt-12 mb-4">
                                Probook Increased Average Tickets, Flip Rates and Billable Hour Efficiency Company Wide
                            </h3>
                            <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                                Probook manages TR Miller&rsquo;s service and sales teams, so flip rate, average ticket, and total sales per job were the natural metrics to measure. June was an unusually strong month for HVAC, with 54% of TR&rsquo;s calls being demand, so we compared it to July and August 2023, which saw a similar, combined 53% demand rate. This revealed a <strong>9.4% increase in total HVAC sales per job</strong>, a <strong>12.1% lift in flip rate,</strong> and a <strong>50.1% uptick in billable hour efficiency</strong>. Plumbing saw similarly strong results over June 2023, with a <strong>10.7% increase in average ticket</strong> and <strong>44.5% lift in billable hour efficiency</strong>.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-extra-light-grey">
                                <p className="text-base lg:text-lg italic text-dark-grey">
                                    &ldquo;Probook made us an extra $190,000 this June by increasing our average HVAC sale.&rdquo;
                                </p>
                                <p className="text-base text-black mt-2">
                                    — President, Brian Sloan
                                </p>
                            </blockquote>

                            <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                                TR Miller attributes this growth to getting their technicians to the right calls more precisely. Particularly, funneling more jobs to top performers. Probook reduced TR Miller&rsquo;s HVAC average drive time per job by 22.3%, allowing the top half of their HVAC batting order to run 61.8% more jobs per day, while the bottom half of their batting order remained constant at 3.2 jobs per day compared to last June. Technicians certainly noticed. <em>&ldquo;The service team is performing better, handling more calls with the same staff, and getting home at the same time&rdquo;</em> said Marty Schulz, Operations Manager.
                            </p>

                            <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                                TR Miller has even leveraged Probook to hire more A players. TR Miller&rsquo;s field supervisor, and technician of over 10 years, Ryan Laske, can be heard saying <em>&ldquo;When Aaron and I tell new prospective hires we&rsquo;re dispatching based on objective metrics, we see that those who react positively end up being true A players&rdquo;</em>.
                            </p>

                            <p className="text-base lg:text-lg text-black leading-relaxed mb-6">
                                Ultimately, Probook brought significant benefits to TR Miller&rsquo;s top line, dispatchers, technicians, and customers.
                            </p>

                            <blockquote className="border-l-4 border-blue pl-6 py-4 my-8 bg-extra-light-grey">
                                <p className="text-base lg:text-lg italic text-dark-grey">
                                    &ldquo;Probook gave us a triple win: more revenue, happier dispatchers, and satisfied customers&rdquo;
                                </p>
                                <p className="text-base text-black mt-2">
                                    — General Manager, Jim Sloan
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full">
                    <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row gap-8 bg-dark-blue items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-3xl md:text-4xl font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                                Bigger Tickets. More Flips.
                            </h1>
                            <p className="text-white text-base lg:text-lg">
                                Dispatch like the best in the industry. Schedule a demo to learn how Probook can help your business capture more revenue today.
                            </p>
                        </div>
                        <a href="https://calendly.com/george-eliadis/probook-demo" target="_blank" className="text-black px-6 py-3 text-base lg:text-lg cursor-pointer flex items-center justify-center gap-1 bg-white transition-200 transition-all hover:bg-light-grey hover:shadow-lg h-fit w-full md:w-fit whitespace-nowrap">
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
