import Image from 'next/image';
import Link from 'next/link';
import GradientButton from './components/GradientButton';
import DotGrid from './components/DotGrid';
import AnimatedGradientText from './components/AnimatedGradientText';
import AnimatedBlurCircle from './components/AnimatedBlurCircle';
import CustomerCarousel from './components/CustomerCarousel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <section className="pt-28 h-screen text-left relative overflow-hidden">
                    <DotGrid />
                    <AnimatedBlurCircle />
                    <Spline
                        scene="https://prod.spline.design/hZNnfU8-cm2HAIPH/scene.splinecode"
                        style={{ 
                            position: 'absolute', 
                            top: '50%', 
                            left: '50%', 
                            transform: 'translate(-50%, -50%)', 
                            width: '1280px',
                            height: '960px',
                            zIndex: 0 
                        }}
                        className="[&>canvas]:!w-full [&>canvas]:!h-full"
                    />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            <span className="font-light">Dispatching,</span>
                            <AnimatedGradientText>AI Supercharged</AnimatedGradientText>
                        </h1>
                        <p className="text-lg text-black mb-8 max-w-3xl">
                            Send techs to the right calls and boost sales
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <GradientButton href="https://calendly.com/george-eliadis/probook-demo" target="_blank">
                                Book a Demo
                            </GradientButton>
                            <Link href="/careers" className="text-black px-6 py-3 text-lg cursor-pointer flex items-start gap-1 bg-white border border-light-grey transition-200 transition-all hover:bg-extra-light-grey hover:shadow-lg">
                                We&apos;re Hiring
                                <NorthEastIcon sx={{ fontSize: 14 }} />
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="border-t border-light-grey py-12 relative">
                    <div className="absolute font-serif text-lg border border-light-grey flex items-center justify-center px-6 py-3 width-fit height-fit left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white font-semibold text-black">
                        Official Partners
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-12">
                        <Image src="/nextstar.png" alt="Nexstar" width={160} height={48} />
                        <Image src="/servicetitan.svg" alt="ServiceTitan" width={240} height={48} />
                    </div>
                </section>
                <section className="border-t border-light-grey py-12 relative">
                    <div className="absolute font-serif text-lg border border-light-grey flex items-center justify-center px-6 py-3 width-fit height-fit left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white font-semibold text-black">
                        Trusted Nationwide
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col gap-8">
                            <CustomerCarousel index={0} />
                            <CustomerCarousel index={1} />
                        </div>
                    </div>
                </section>

                <section className="border-t border-light-grey py-36">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
                        <h1 className="text-3xl md:text-4xl text-black font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                            Customer Success Stories
                        </h1>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <Link href="/case-studies/auchinachie" className="w-full bg-white border border-light-grey p-6 flex flex-col justify-between gap-6 transition-shadow duration-200 hover:shadow-lg cursor-pointer">
                                <p className="text-lg text-black font-normal leading-normal tracking-normal">
                                    &ldquo;Since starting Probook, our technicians have increased the amount they turn over leads to our sales department by 37%&rdquo;
                                </p>
                                <div className="flex gap-2 items-center">
                                    <Image src="/testimonials/chris.avif" alt="Chris Holleran" width={40} height={40} className="w-16 h-16 rounded-full object-cover" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-black font-semibold">
                                            Chris Holleran
                                        </p>
                                        <p className="text-zinc-600 font-normal">
                                            Auchinachie Services
                                        </p>
                                        <p className="text-zinc-600 font-normal">
                                            General Manager
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/case-studies/tr-miller" className="w-full bg-white border border-light-grey p-6 flex flex-col justify-between gap-6 transition-shadow duration-200 hover:shadow-lg cursor-pointer">
                                <p className="text-lg text-black font-normal leading-normal tracking-normal">
                                    &ldquo;Probook gave us a triple win: more revenue, happier dispatchers, and satisfied customers&rdquo;
                                </p>
                                <div className="flex gap-2 items-center">
                                    <Image src="/testimonials/brian.avif" alt="Brian Sloan" width={40} height={40} className="w-16 h-16 rounded-full object-cover" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-black font-semibold">
                                            Brian Sloan
                                        </p>
                                        <p className="text-zinc-600 font-normal">
                                            TR Miller Heating, Cooling &amp; Plumbing
                                        </p>
                                        <p className="text-zinc-600 font-normal">
                                            President
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/case-studies/blake-brothers" className="w-full bg-white border border-light-grey p-6 flex flex-col justify-between gap-6 transition-shadow duration-200 hover:shadow-lg cursor-pointer">
                                <Image src="/testimonials/note.avif" alt="If you take Probook away, I quit" width={240} height={240} className="w-full h-full object-cover" />
                                <div className="flex gap-2 items-center">
                                    <Image src="/testimonials/andrea.avif" alt="Andrea Williams" width={40} height={40} className="w-16 h-16 rounded-full object-cover" />
                                    <div className="flex flex-col gap-1">
                                        <p className="text-black font-semibold">
                                            Andrea Williams
                                        </p>
                                        <p className="text-zinc-600 font-normal">
                                            Blake Brothers
                                        </p>
                                        <p className="text-zinc-600 font-normal">
                                            Lead Dispatcher
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <Link href="/case-studies" className="text-white px-6 py-3 text-lg cursor-pointer flex items-start gap-1 bg-dark-blue transition-200 transition-all hover:opacity-90 hover:shadow-lg h-fit w-fit">
                            Case Studies
                            <NorthEastIcon sx={{ fontSize: 14 }} />
                        </Link>
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

                <section className="py-36">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
                        <div className="flex-1 flex flex-col lg:flex-row gap-12 justify-center lg:justify-end">
                            <div className="flex flex-col gap-12 w-full">
                                <h1 className="text-3xl md:text-4xl text-black font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                                    About Us
                                </h1>
                                <div className="flex flex-col gap-8 flex-1">
                                    <iframe width="100%" height="324" src="https://www.youtube.com/embed/j_MQPDidq3M?si=MY_gx0gnXdqmzU94" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                    <div className="flex flex-col gap-4">
                                        <p className="text-lg text-black">
                                            Probook is the AI dispatching software for the $700B home services space (plumbers, electricians, HVAC technicians, etc).
                                        </p>
                                        <p className="text-lg text-black">
                                            Matching technicians to the right jobs can mean the difference between a $300 band-aid fix and a $20,000 system replacement yet this process is currently manual and rarely data-driven.
                                        </p>
                                        <p className="text-lg text-black">
                                            Probook automates the entire process using AI.
                                        </p>
                                        <p className="text-lg text-black">
                                            Watch the podcast episode to get acquainted with our CEO and learn more about our company and product.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Image src="/probook-tech.svg" alt="Probook Technology" width={600} height={600} className="w-full lg:w-1/2 object-contain" draggable={false} />
                        </div>
                    </div>
                </section>

                <section className="w-full">
                    <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col gap-8 bg-dark-blue">
                        <h1 className="text-white text-3xl md:text-4xl font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                            Careers
                        </h1>
                        <p className="text-white text-lg">
                            We’re a small, cracked team with focused on transforming the home services industry. If you’re ready to work hard on complex problems, join us to be part of the fastest-growing AI startup in New York.
                        </p>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-white text-lg font-semibold">
                                Sales
                            </h2>
                            <Link href="https://jobs.ashbyhq.com/probook" target="_blank" className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-light-grey hover:shadow-lg h-fit w-full">
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
                            <h2 className="text-white text-lg font-semibold">
                                Operations
                            </h2>
                            <Link href="https://jobs.ashbyhq.com/probook" target="_blank" className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-light-grey hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Founding Deployment Strategist
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
                            <h2 className="text-white text-lg font-semibold">
                                Engineering
                            </h2>
                            <Link href="https://jobs.ashbyhq.com/probook" target="_blank" className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-light-grey hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Founding Software Engineer (Backend)
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
                            <Link href="https://jobs.ashbyhq.com/probook" target="_blank" className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-light-grey hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Founding Software Engineer (Machine Learning)
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
                            <Link href="https://jobs.ashbyhq.com/probook" target="_blank" className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-light-grey hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Founding Software Engineer (Product)
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
                        <Link href="/careers" className="text-black px-6 py-3 text-lg cursor-pointer flex items-start gap-1 bg-white transition-200 transition-all hover:bg-light-grey hover:shadow-lg h-fit w-fit">
                            All Roles
                            <NorthEastIcon sx={{ fontSize: 14 }} />
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
