import Image from 'next/image';
import GradientButton from './components/GradientButton';
import DotGrid from './components/DotGrid';
import AnimatedGradientText from './components/AnimatedGradientText';
import AnimatedBlurCircle from './components/AnimatedBlurCircle';
import CustomerCarousel from './components/CustomerCarousel';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <header className="bg-white border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <img src="/probook.svg" alt="Probook" className="h-8" draggable="false" />
                        <nav className="flex space-x-8">
                            <a href="#case-studies" className="text-lg text-black hover:text-zinc-600 transition-colors transition-200">Case Studies</a>
                            <a href="#careers" className="text-lg text-black hover:text-zinc-600 transition-colors transition-200">Careers</a>
                        </nav>
                    </div>
                </div>
            </header>

            <main>
                <section className="pt-20 h-[calc(100vh-12rem)] pb-96 text-left relative overflow-hidden">
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
                        <h2 className="text-4xl md:text-6xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            <div>Dispatching,</div>
                            <AnimatedGradientText>AI Supercharged</AnimatedGradientText>
                        </h2>
                        <p className="text-xl text-black mb-8 max-w-3xl">
                            Send techs to the right calls and boost sales
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <GradientButton>
                                Book a Demo
                            </GradientButton>
                            <button className="text-black px-6 py-3 text-lg cursor-pointer flex items-start gap-1 bg-white border border-zinc-200 transition-200 transition-all hover:bg-zinc-100 hover:shadow-lg">
                                We're Hiring
                                <NorthEastIcon sx={{ fontSize: 14 }} />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="border-t border-zinc-200 py-12 relative">
                    <div className="absolute font-serif text-lg border border-zinc-200 flex items-center justify-center px-6 py-3 width-fit height-fit left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white font-semibold text-black">
                        Official Partners
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-12">
                        <Image src="/nextstar.png" alt="Nexstar" width={160} height={48} />
                        <Image src="/servicetitan.svg" alt="ServiceTitan" width={240} height={48} />
                    </div>
                </section>
                <section className="border-t border-zinc-200 py-12 relative">
                    <div className="absolute font-serif text-lg border border-zinc-200 flex items-center justify-center px-6 py-3 width-fit height-fit left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white font-semibold text-black">
                        Trusted Nationwide
                    </div>
                    <div className="flex flex-col gap-8">
                        <CustomerCarousel index={0} />
                        <CustomerCarousel index={1} />
                    </div>
                </section>

                <section className="border-t border-zinc-200 py-36">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
                        <h1 className="text-3xl md:text-4xl text-black font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                            Customer Success Stories
                        </h1>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="w-full bg-white border border-zinc-200 p-6 flex flex-col justify-between gap-6 transition-colors duration-100 hover:bg-zinc-100 cursor-pointer">
                                <p className="text-lg text-black font-normal leading-normal tracking-normal font-serif">
                                    “Since starting Probook, our technicians have increased the amount they turn over leads to our sales department by 37%”
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
                            </div>
                            <div className="w-full bg-white border border-zinc-200 p-6 flex flex-col justify-between gap-6 transition-colors duration-100 hover:bg-zinc-100 cursor-pointer">
                                <p className="text-lg text-black font-normal leading-normal tracking-normal font-serif">
                                    “Probook gave us a triple win: more revenue, happier dispatchers, and satisfied customers”
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
                            </div>
                            <div className="w-full bg-white border border-zinc-200 p-6 flex flex-col justify-between gap-6 transition-colors duration-100 hover:bg-zinc-100 cursor-pointer">
                                <div className="border border-zinc-200 p-3">
                                <Image src="/testimonials/note.avif" alt="If you take Probook away, I quit" width={240} height={240} className="w-full h-full object-cover" />
                                    </div>
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
                            </div>
                        </div>
                        <button className="text-white px-6 py-3 text-lg cursor-pointer flex items-start gap-1 bg-dark-blue transition-200 transition-all hover:opacity-90 hover:shadow-lg h-fit w-fit">
                            Case Studies
                            <NorthEastIcon sx={{ fontSize: 14 }} />
                        </button>
                    </div>    
                </section>

                <section className="w-full">
                    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex gap-8 bg-dark-blue items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-3xl md:text-4xl font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                                Bigger Tickets. More Flips.
                            </h1>
                            <p className="text-white text-lg">
                                Dispatch like the best in the industry. Schedule a demo to learn how Probook can help your business capture more revenue today.
                            </p>
                        </div>
                        <button className="text-black px-6 py-3 text-lg cursor-pointer flex items-start gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-fit">
                            Book a Demo
                            <NorthEastIcon sx={{ fontSize: 14 }} />
                        </button>
                    </div>
                </section>

                <section className="py-36">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
                        <h1 className="text-3xl md:text-4xl text-black font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                            About Us
                        </h1>
                        <div className="flex gap-8">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg text-black max-w-3xl">
                                        Product
                                    </p>
                                    <p className="text-lg text-zinc-600 max-w-3xl">
                                        We help home service dispatchers make better decisions from the comfort of their CRM.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg text-black max-w-3xl">
                                        Mission
                                    </p>
                                    <p className="text-lg text-zinc-600 max-w-3xl">
                                        Our goal is to transform the $2T home services industry from the bottom-up.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg text-black max-w-3xl">
                                        Team
                                    </p>
                                    <p className="text-lg text-zinc-600 max-w-3xl">
                                        We are a lean team with alumni from Stanford, Harvard, Meta, ICPC, Y Combinator, and more.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white border border-zinc-200 p-6">
                                <iframe width="640" height="360" src="https://www.youtube.com/embed/j_MQPDidq3M?si=MY_gx0gnXdqmzU94" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full">
                    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8 bg-dark-blue">
                        <h1 className="text-white text-3xl md:text-4xl font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                            Careers
                        </h1>
                        <p className="text-white text-lg">
                            We’re a small, cracked team with focused on transforming the home services industry. If you’re ready to work hard on complex problems, join us to be part of the fastest-growing AI startup in New York.
                        </p>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-white text-lg font-semibold">
                                Operations
                            </h2>
                            <button className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-full">
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
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-white text-lg font-semibold">
                                Sales
                            </h2>
                            <button className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-full">
                                <h2 className="text-black text-lg font-semibold">
                                    Account Executive
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
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-white text-lg font-semibold">
                                Engineering
                            </h2>
                            <button className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-full">
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
                            </button>
                            <button className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-full">
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
                            </button>
                            <button className="text-black px-6 py-3 text-lg cursor-pointer flex justify-between items-center gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-full">
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
                            </button>
                        </div>
                        <button className="text-black px-6 py-3 text-lg cursor-pointer flex items-start gap-1 bg-white transition-200 transition-all hover:bg-zinc-200 hover:shadow-lg h-fit w-fit">
                            All Roles
                            <NorthEastIcon sx={{ fontSize: 14 }} />
                        </button>
                    </div>
                </section>
            </main>

            <footer className="bg-white text-white pt-12 pb-24 border-t border-zinc-200 mt-18">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 justify-between">
                <div className="flex flex-col items-start gap-4">
                    <img src="/probook.svg" alt="Probook" className="h-8" draggable="false" />
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-zinc-600 text-black transition-colors">
                            <FacebookIcon />
                        </a>
                        <a href="#" className="hover:text-zinc-600 text-black transition-colors">
                            <InstagramIcon />
                        </a>
                        <a href="#" className="hover:text-zinc-600 text-black transition-colors">
                            <YouTubeIcon />
                        </a>
                        <a href="#" className="hover:text-zinc-600 text-black transition-colors">
                            <TwitterIcon />
                        </a>
                    </div>
                    <p className="text-black">
                        &copy; 2023 Probook. All rights reserved.
                    </p>
                    </div>
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-4">
                            <p className="text-black font-semibold">
                                Product
                            </p>
                            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                                Book Demo
                            </a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-black font-semibold">
                                Success Stories
                            </p>
                            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                                Auchinachie
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                                TR Miller
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                                Blake Brothers
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                                Lion
                            </a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <p className="text-black font-semibold">
                                Company
                            </p>
                            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                                Open Roles
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-zinc-600 hover:text-black transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
