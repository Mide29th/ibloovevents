'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import EventFeed from '../components/EventFeed';
import OrganizerSection from '../components/OrganizerSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="layout-root">
            <Navbar />
            <div className="page-content">
                <Hero />
                <Features />
                <EventFeed />
                <OrganizerSection />
            </div>
            <Footer />

            <style jsx>{`
                .layout-root {
                    background: var(--background);
                }
                .page-content {
                    padding-top: 72px; /* Navbar height */
                }
            `}</style>
        </main>
    );
}
