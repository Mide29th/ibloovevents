'use client';

import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Share2, Heart, Download } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data (replace with API call later)
const EVENTS: Record<string, any> = {
    '1': {
        id: 1,
        title: "Lagos Beach Festival 2026",
        host: "Lagos Party Crew",
        date: "Sunday, October 12, 2026",
        time: "2:00 PM - 11:00 PM",
        location: "Landmark Beach, Victoria Island, Lagos",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1000",
        description: "The biggest beach festival in Lagos is back! Join us for a day of sun, sand, music, and vibes. Featuring top artists, food vendors, and beach games.",
        price: 5000,
        categories: [
            { name: "Regular", price: 5000, perks: "Access to festival grounds" },
            { name: "VIP", price: 15000, perks: "Fast track entry, VIP lounge access, 1 free drink" },
            { name: "VVIP / Table", price: 150000, perks: "Table for 5, dedicated waiter, premium bottle service" }
        ]
    },
    '2': {
        id: 2,
        title: "Afrobeat Night Out",
        host: "Vibe Check",
        date: "Friday, November 05, 2026",
        time: "9:00 PM - 4:00 AM",
        location: "Eko Hotel, Lagos",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1000",
        description: "Experience the pulse of Lagos nightlife. Afrobeat, Amapiano, and pure energy all night long.",
        price: "Free",
        categories: [
            { name: "General Admission", price: 0, perks: "RSVP required" }
        ]
    }
};

export default function EventDetailsPage({ params }: { params: { id: string } }) {
    const event = EVENTS[params.id];
    const [showTickets, setShowTickets] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<string | null>(null);

    if (!event) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Event not found</h2>
                <Link href="/" className="button button-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Back Home</Link>
            </div>
        );
    }

    return (
        <div className="event-page">
            <div className="container">
                <Link href="/" className="back-link">
                    <ArrowLeft size={16} /> Back to Events
                </Link>

                <div className="event-grid">
                    <div className="main-content">
                        <div className="hero-image-wrapper">
                            <img src={event.image} alt={event.title} className="hero-image" />
                            <div className="share-actions">
                                <button className="icon-btn"><Share2 size={18} /></button>
                                <button className="icon-btn"><Heart size={18} /></button>
                            </div>
                        </div>

                        <div className="event-info">
                            <h1 className="event-title">{event.title}</h1>
                            <p className="host">Hosted by <strong>{event.host}</strong></p>

                            <div className="meta-grid">
                                <div className="meta-item">
                                    <div className="meta-icon"><Calendar size={20} /></div>
                                    <div>
                                        <h3>Date and Time</h3>
                                        <p>{event.date}</p>
                                        <p className="sub-text">{event.time}</p>
                                    </div>
                                </div>
                                <div className="meta-item">
                                    <div className="meta-icon"><MapPin size={20} /></div>
                                    <div>
                                        <h3>Location</h3>
                                        <p>{event.location}</p>
                                        <a href="#" className="map-link">View Map</a>
                                    </div>
                                </div>
                            </div>

                            <div className="description">
                                <h2>About this event</h2>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar">
                        <div className="ticket-card">
                            <div className="price-tag">
                                {event.price === 'Free' ? 'Free' : `From ₦${event.price.toLocaleString()}`}
                            </div>

                            {!showTickets ? (
                                <button className="button button-primary full-width" onClick={() => setShowTickets(true)}>
                                    Get Tickets
                                </button>
                            ) : (
                                <div className="ticket-selection">
                                    <h3>Select Tickets</h3>
                                    <div className="ticket-list">
                                        {event.categories.map((cat: any) => (
                                            <div
                                                key={cat.name}
                                                className={`ticket-option ${selectedTicket === cat.name ? 'selected' : ''}`}
                                                onClick={() => setSelectedTicket(cat.name)}
                                            >
                                                <div className="ticket-header">
                                                    <span className="name">{cat.name}</span>
                                                    <span className="price">{cat.price === 0 ? 'Free' : `₦${cat.price.toLocaleString()}`}</span>
                                                </div>
                                                <p className="perks">{cat.perks}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="button button-primary full-width" disabled={!selectedTicket}>
                                        Proceed to Checkout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .event-page {
          padding: 2rem 0 4rem;
          min-height: 100vh;
          background: #fff;
        }
        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--secondary);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .event-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 3rem;
        }
        .hero-image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 16/9;
          margin-bottom: 2rem;
        }
        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .share-actions {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
        }
        .icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .icon-btn:hover {
          transform: scale(1.1);
        }
        .event-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }
        .host {
          color: var(--secondary);
          margin-bottom: 2rem;
        }
        .meta-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .meta-item {
          display: flex;
          gap: 1rem;
        }
        .meta-icon {
          width: 48px;
          height: 48px;
          background: #f8f9fa;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--foreground);
        }
        .meta-item h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }
        .sub-text {
          color: var(--secondary);
          font-size: 0.9rem;
        }
        .map-link {
          color: #007AFF;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .description h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .description p {
          line-height: 1.6;
          color: var(--secondary);
        }
        
        .ticket-card {
           position: sticky;
           top: 100px;
           border: 1px solid #eee;
           border-radius: 24px;
           padding: 1.5rem;
           box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .price-tag {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
            text-align: center;
        }
        .full-width {
            width: 100%;
        }
        .ticket-selection h3 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }
        .ticket-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
        }
        .ticket-option {
            border: 1px solid #e0e0e0;
            padding: 1rem;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.2s;
        }
        .ticket-option:hover {
            border-color: var(--foreground);
        }
        .ticket-option.selected {
            border-color: var(--foreground);
            background: #f8f9fa;
            border-width: 2px;
        }
        .ticket-header {
            display: flex;
            justify-content: space-between;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }
        .perks {
            font-size: 0.8rem;
            color: var(--secondary);
        }

        @media (max-width: 900px) {
            .event-grid {
                grid-template-columns: 1fr;
            }
            .ticket-card {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: white;
                border-radius: 24px 24px 0 0;
                box-shadow: 0 -4px 20px rgba(0,0,0,0.1);
                z-index: 100;
                border: none;
                top: auto;
            }
        }
      `}</style>
        </div>
    );
}
