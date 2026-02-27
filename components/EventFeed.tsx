'use client';

import { useState, useEffect } from 'react';
import EventCard from './EventCard';

const mockEvents = [
  {
    id: 1,
    title: "Vibes & Grills 3.0",
    host: "The Grill Master",
    date: "OCT 12",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800",
    attendees: 120,
    price: 5000,
    isVerified: true
  },
  {
    id: 2,
    title: "Tech Mixer Lagos",
    host: "Lagos Tech Hub",
    date: "OCT 15",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    attendees: 85,
    price: "Free"
  },
  {
    id: 3,
    title: "Sip & Paint Night",
    host: "Art Studio X",
    date: "OCT 18",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800",
    attendees: 45,
    price: 7500
  },
  {
    id: 4,
    title: "Outdoor Cinema: Classics",
    host: "Park View Screens",
    date: "OCT 20",
    image: "https://images.unsplash.com/photo-1517604931442-7105376f2611?auto=format&fit=crop&q=80&w=800",
    attendees: 200,
    price: 3000,
    isVerified: true
  },
  {
    id: 5,
    title: "Comedy Roast Night",
    host: "Lagos Laughs",
    date: "OCT 22",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?auto=format&fit=crop&q=80&w=800",
    attendees: 150,
    price: 10000
  },
  {
    id: 6,
    title: "Morning Yoga session",
    host: "Flow with Tola",
    date: "OCT 23",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800",
    attendees: 30,
    price: "Free"
  }
];

export default function EventFeed() {
  const [events, setEvents] = useState(mockEvents);

  useEffect(() => {
    const userEvents = JSON.parse(localStorage.getItem('user_events') || '[]');
    const mappedUserEvents = userEvents.map((e: any) => ({
      ...e,
      date: e.displayDate,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
      price: e.price || 'Free'
    }));

    setEvents([...mappedUserEvents, ...mockEvents]);
  }, []);

  return (
    <section className="feed-section">
      <div className="container">
        <div className="feed-header">
          <div className="header-left">
            <h2 className="section-title">Discover Experiences</h2>
            <p className="section-subtitle">Handpicked events for you in Lagos & beyond.</p>
          </div>
          <div className="filters">
            <button className="filter-chip active">All</button>
            <button className="filter-chip">Music</button>
            <button className="filter-chip">Parties</button>
            <button className="filter-chip">Workshops</button>
          </div>
        </div>

        <div className="event-grid">
          {events.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <div className="feed-footer">
          <button className="button button-outline view-more">View All Events</button>
        </div>
      </div>

      <style jsx>{`
        .feed-section {
          padding: 6rem 0;
          background: white;
        }
        .feed-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 3.5rem;
          gap: 2rem;
        }
        .section-title {
          font-size: 2rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }
        .section-subtitle {
          color: var(--foreground-muted);
          font-size: 1.1rem;
          font-family: var(--font-body);
        }
        .filters {
          display: flex;
          gap: 0.5rem;
          padding: 4px;
          background: var(--muted);
          border-radius: 99px;
          border: 1px solid var(--border);
        }
        .filter-chip {
          padding: 0.6rem 1.25rem;
          border-radius: 99px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: transparent;
          color: var(--foreground-muted);
          transition: all 0.2s ease;
          font-family: var(--font-heading);
        }
        .filter-chip:hover {
          color: var(--foreground);
        }
        .filter-chip.active {
          background: white;
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }
        .event-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2.5rem;
        }
        .feed-footer {
          margin-top: 4rem;
          display: flex;
          justify-content: center;
        }
        .view-more {
          min-width: 200px;
        }

        @media (min-width: 640px) {
          .event-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .event-grid { grid-template-columns: repeat(3, 1fr); }
        }
        
        @media (max-width: 840px) {
          .feed-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .filters {
            width: 100%;
            overflow-x: auto;
            scrollbar-width: none;
          }
          .filters::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
