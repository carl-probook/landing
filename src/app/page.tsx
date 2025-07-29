import GradientButton from './components/GradientButton';
import DotGrid from './components/DotGrid';
import AnimatedGradientText from './components/AnimatedGradientText';
import AnimatedBlurCircle from './components/AnimatedBlurCircle';
import { colors } from './lib/colors';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img src="/probook.svg" alt="Probook" className="h-8" draggable="false" />
            </div>
            <nav className="flex space-x-8">
              <a href="#case-studies" className="text-lg text-black hover:text-gray-600 transition-colors">Case Studies</a>
              <a href="#careers" className="text-lg text-black hover:text-gray-600 transition-colors">Careers</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-20 h-[calc(100vh-12rem)] pb-96 text-left relative">
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
              zIndex: 1 
            }}
            className="[&>canvas]:!w-full [&>canvas]:!h-full"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <h2 className="text-4xl md:text-6xl text-gray-900 mb-6 font-serif leading-tight" style={{letterSpacing: '-0.04em'}}>
              <div className="font-normal">Dispatching,</div>
              <AnimatedGradientText>AI Supercharged</AnimatedGradientText>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Send techs to the right calls and boost sales
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton>
                Book a Demo
              </GradientButton>
              <button className="text-gray-700 px-6 py-3 text-lg font-normal cursor-pointer flex items-start gap-1">
                We're Hiring
                <NorthEastIcon sx={{ fontSize: 14 }} />
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to succeed, all in one place
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">Lightning Fast</h3>
                <p className="text-gray-600">Built for speed and performance with cutting-edge technology.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">Reliable</h3>
                <p className="text-gray-600">99.9% uptime guarantee with enterprise-grade infrastructure.</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">Easy to Use</h3>
                <p className="text-gray-600">Intuitive interface designed for users of all skill levels.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the plan that works best for your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-gray-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">$9</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li>Up to 1,000 users</li>
                  <li>Basic features</li>
                  <li>Email support</li>
                </ul>
                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="border-2 border-blue-600 rounded-lg p-8 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li>Up to 10,000 users</li>
                  <li>All features</li>
                  <li>Priority support</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="text-gray-600 mb-8 space-y-2">
                  <li>Unlimited users</li>
                  <li>Custom features</li>
                  <li>24/7 support</li>
                </ul>
                <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of satisfied customers today
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/probook.svg" alt="Probook" className="h-6 mb-4" draggable="false" />
              <p className="text-gray-400">
                Building the future, one innovation at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-serif">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-serif">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-serif">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YourStartup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
