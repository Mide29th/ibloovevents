'use client';

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
  return (
    <section className="feed-section">
      <div className="container">
        <div className="feed-header">
          <h2 className="section-title">Discover Events</h2>
          <div className="filters">
            <span className="filter-pill active">All</span>
            <span className="filter-pill">Music</span>
            <span className="filter-pill">Parties</span>
            <span className="filter-pill">Workshops</span>
          </div>
        </div>

        <div className="event-grid">
          {mockEvents.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .feed-section {
          padding: 4rem 0;
        }
        .feed-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
        }
        .filters {
          display: flex;
          gap: 0.75rem;
        }
        .filter-pill {
          padding: 0.5rem 1.25rem;
          border-radius: 99px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          background: #f3f3f3;
          color: var(--secondary);
          transition: all 0.2s ease;
        }
        .filter-pill:hover {
          background: #eeeeee;
        }
        .filter-pill.active {
          background: var(--foreground);
          color: var(--background);
        }
        .event-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        @media (min-width: 640px) {
          .event-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .event-grid { grid-template-columns: repeat(3, 1fr); }
        }
        
        @media (max-width: 640px) {
          .feed-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .filters {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 0.5rem;
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
