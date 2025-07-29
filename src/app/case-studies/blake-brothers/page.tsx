import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import GradientButton from '../../components/GradientButton';

export default function BlakeBrothers() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="py-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <div className="mb-6">
                            <a href="/case-studies" className="text-zinc-600 hover:text-black transition-colors">
                                ← Back to Case Studies
                            </a>
                        </div>
                        <h1 className="text-4xl md:text-6xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            Blake Brothers
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-3xl">
                            From dispatcher resistance to "If you take Probook away, I quit" - a transformation story
                        </p>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full">
                    <div className="max-w-7xl mx-auto px-8 py-12 flex gap-8 bg-dark-blue items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-3xl md:text-4xl font-serif leading-tight font-semibold" style={{letterSpacing: '-0.03em'}}>
                                Ready for Similar Results?
                            </h1>
                            <p className="text-white text-lg">
                                See how Probook can help your business achieve the same level of success as Blake Brothers.
                            </p>
                        </div>
                        <GradientButton href="https://calendly.com/george-eliadis/probook-demo" target="_blank">
                            Book a Demo
                        </GradientButton>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}