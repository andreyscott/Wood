'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Settings, Sun, Moon } from 'lucide-react';
import { SamLogo } from './SamStandardLogo';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Categories', path: '/categories' },
        { name: 'Showrooms', path: '/showrooms' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-stone-200/50 dark:border-stone-800/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <Link href="/" className="flex items-center space-x-6 group" aria-label="Home">
                        <SamLogo size={72} />
                        <div className="flex flex-col -space-y-1.5">
                            <span className="text-2xl sm:text-4xl font-black tracking-tighter text-stone-950 dark:text-stone-100 font-serif leading-none">
                                Sam Standard
                            </span>
                            <span className="text-[14px] uppercase tracking-[5px] text-orange-800 dark:text-orange-400 font-black">
                                Furniture
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex space-x-12 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-black tracking-[0.15em] uppercase transition-all duration-300 relative group py-2 ${pathname === link.path
                                    ? 'text-orange-900 dark:text-orange-400'
                                    : 'text-stone-600 dark:text-stone-400 hover:text-orange-800 dark:hover:text-orange-300'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 h-1 bg-orange-900 dark:bg-orange-400 transition-all duration-300 ${pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}></span>
                            </Link>
                        ))}

                        <div className="flex items-center space-x-6 pl-6 border-l-2 border-stone-200 dark:border-stone-800">
                            <button
                                onClick={toggleTheme}
                                className="p-3 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400 transition-all duration-300 active:rotate-90"
                                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            >
                                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                            <Link href="/admin" className="text-stone-400 hover:text-orange-800 dark:hover:text-orange-400 transition-colors" title="Admin Panel">
                                <Settings size={24} />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:hidden flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hidden">
                            {theme === 'dark' ? <Sun size={28} /> : <Moon size={28} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-stone-600 dark:text-stone-300 p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                            aria-expanded={isOpen}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={36} /> : <Menu size={36} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`lg:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[85vh] opacity-100 translate-y-0 overflow-y-auto' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
                } bg-white dark:bg-stone-950 border-t border-stone-100 dark:border-stone-900 shadow-2xl`}>
                <div className="px-8 py-8 space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-5 py-5 rounded-2xl text-xl font-black tracking-widest uppercase transition-all ${pathname === link.path
                                ? 'bg-orange-950 text-white shadow-xl shadow-orange-950/20'
                                : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-900'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
