'use client';
import { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Apply() {
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        phone: '',
        email: '',
        linkedin: '',
        reason: ''
    });

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const roles = [
        'Founding Account Executive',
        'Deployment Strategist',
        'Software Engineer (Backend)',
        'Software Engineer (Machine Learning)',
        'Software Engineer (Product)',
        'Other'
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRoleSelect = (role: string) => {
        setFormData(prev => ({ ...prev, role }));
        setIsDropdownOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main>
                <section className="py-28 text-left relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl text-black mb-6 font-serif leading-tight tracking-tight" style={{letterSpacing: '-0.03em'}}>
                            Apply to Probook
                        </h1>
                        <p className="text-lg text-zinc-600">
                            Join our team and help transform the home services industry.
                        </p>
                    </div>
                </section>

                <section className="pb-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 px-8 py-12 space-y-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-lg font-semibold text-black mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-zinc-200 focus:border-dark-blue focus:outline-none text-lg"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Role Selection */}
                            <div className="relative">
                                <label className="block text-lg font-semibold text-black mb-2">
                                    Role of Interest
                                </label>
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full px-4 py-3 border border-zinc-200 focus:border-dark-blue focus:outline-none text-lg bg-white text-left flex items-center justify-between"
                                    >
                                        <span className={formData.role ? 'text-black' : 'text-zinc-500'}>
                                            {formData.role || 'Select a role...'}
                                        </span>
                                        <KeyboardArrowDownIcon 
                                            sx={{ fontSize: 20 }} 
                                            className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 right-0 z-10 bg-white border border-zinc-200 border-t-0 max-h-60 overflow-y-auto">
                                            {roles.map((role) => (
                                                <button
                                                    key={role}
                                                    type="button"
                                                    onClick={() => handleRoleSelect(role)}
                                                    className="w-full px-4 py-3 text-left text-lg text-black hover:bg-zinc-100 transition-colors"
                                                >
                                                    {role}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {/* Hidden input for form validation */}
                                <input
                                    type="hidden"
                                    name="role"
                                    value={formData.role}
                                    required
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-lg font-semibold text-black mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-zinc-200 focus:border-dark-blue focus:outline-none text-lg"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-lg font-semibold text-black mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-zinc-200 focus:border-dark-blue focus:outline-none text-lg"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* LinkedIn */}
                            <div>
                                <label htmlFor="linkedin" className="block text-lg font-semibold text-black mb-2">
                                    LinkedIn Profile
                                </label>
                                <input
                                    type="url"
                                    id="linkedin"
                                    name="linkedin"
                                    value={formData.linkedin}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-zinc-200 focus:border-dark-blue focus:outline-none text-lg"
                                    placeholder="https://linkedin.com/in/yourprofile"
                                />
                            </div>

                            {/* Reason for Wanting to Work */}
                            <div>
                                <label htmlFor="reason" className="block text-lg font-semibold text-black mb-2">
                                    Why do you want to work at Probook?
                                </label>
                                <textarea
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-zinc-200 focus:border-dark-blue focus:outline-none text-lg resize-none"
                                    placeholder="Tell us why you're excited about joining Probook and how you can contribute to our mission..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full bg-dark-blue text-white px-6 py-4 text-lg font-semibold transition-all hover:opacity-90 hover:shadow-lg"
                                >
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
