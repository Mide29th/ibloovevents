import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import EventFeed from '../components/EventFeed';
import OrganizerSection from '../components/OrganizerSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <EventFeed />
            <OrganizerSection />
            <Footer />
        </main>
    );
}
