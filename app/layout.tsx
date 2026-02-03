import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Artisan Woodworks',
    description: 'Handcrafted Excellence in Pakistan',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} min-h-screen flex flex-col transition-colors duration-500`}>
                <Navbar />
                <main className="flex-grow pt-24">
                    {children}
                </main>
                <Footer />

                {/* Premium Floating WhatsApp Button */}
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-10 right-10 bg-green-600 text-white p-6 rounded-full shadow-2xl hover:bg-green-700 transition-all hover:scale-110 active:scale-95 z-50 flex items-center justify-center hover:rotate-6 shadow-green-950/40"
                    title="Direct Workshop Inquiry"
                    aria-label="Contact on WhatsApp"
                >
                    <MessageCircle size={40} />
                </a>
            </body>
        </html>
    );
}
