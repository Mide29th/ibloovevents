'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Calendar, MapPin, Users, TrendingUp, BarChart3, MoreVertical } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DashboardPage() {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem('user_events') || '[]');
    setEvents(savedEvents);
  }, []);

  const metrics = [
    { label: "Total Events", value: events.length, icon: <Calendar size={20} />, color: "var(--primary)" },
    { label: "Total Attendees", value: events.reduce((acc, e) => acc + (e.attendees || 0), 0), icon: <Users size={20} />, color: "var(--accent)" },
    {
      label: "Total Revenue", value: `₦${events.reduce((acc, e) => {
        if (Array.isArray(e.tickets)) {
          return acc + e.tickets.reduce((tAcc: number, t: any) => tAcc + (parseFloat(t.price) || 0) * (e.attendees / e.tickets.length || 0), 0);
        }
        return acc + (parseFloat(e.price) || 0) * (e.attendees || 0);
      }, 0).toLocaleString()}`, icon: <TrendingUp size={20} />, color: "#22c55e"
    },
    { label: "Page Views", value: events.length * 124, icon: <BarChart3 size={20} />, color: "#8b5cf6" },
  ];

  return (
    <main className="dashboard-page">
      <Navbar />

      <div className="dashboard-content">
        <div className="container">
          <div className="dashboard-header">
            <div>
              <h1>Organizer Dashboard</h1>
              <p>Welcome back! Here&apos;s how your events are performing.</p>
            </div>
            <Link href="/create" className="button button-primary">
              <Plus size={18} style={{ marginRight: '0.5rem' }} /> Create New Event
            </Link>
          </div>

          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="metric-card">
                <div className="metric-icon" style={{ backgroundColor: `${m.color}15`, color: m.color }}>
                  {m.icon}
                </div>
                <div className="metric-info">
                  <span className="metric-label">{m.label}</span>
                  <span className="metric-value">{m.value}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="events-section">
            <div className="section-header">
              <h2>My Events</h2>
              <div className="view-options">
                <span className="view-pill active">All</span>
                <span className="view-pill">Live</span>
                <span className="view-pill">Past</span>
              </div>
            </div>

            {events.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">🎉</div>
                <h3>No events yet</h3>
                <p>Start your journey by creating your first event on iBLOOV.</p>
                <Link href="/create" className="button button-primary">Create Event</Link>
              </div>
            ) : (
              <div className="dashboard-table-wrapper">
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>Event Details</th>
                      <th>Date & Time</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Tickets</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr key={event.id}>
                        <td>
                          <div className="event-cell">
                            <div className="event-thumb">
                              {event.title.charAt(0)}
                            </div>
                            <div className="event-name">
                              <strong>{event.title}</strong>
                              <span>{event.price || 'Free'}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="date-cell">
                            <strong>{event.displayDate}</strong>
                            <span>{event.time}</span>
                          </div>
                        </td>
                        <td>
                          <div className="loc-cell text-truncate">
                            <MapPin size={14} /> {event.location}
                          </div>
                        </td>
                        <td>
                          <span className="status-badge live">Live</span>
                        </td>
                        <td>
                          <div className="ticket-cell">
                            <strong>{event.attendees} / {event.capacity || '∞'}</strong>
                            <div className="progress-mini">
                              <div className="progress-fill" style={{ width: `${Math.min((event.attendees / (event.capacity || 100)) * 100, 100)}%` }}></div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button className="icon-button"><MoreVertical size={18} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .dashboard-page {
          min-height: 100vh;
          background: #f8fafc;
        }
        .dashboard-content {
          padding: 3rem 0 6rem;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
        }
        .dashboard-header h1 {
          font-size: 2rem;
          margin-bottom: 0.25rem;
        }
        .dashboard-header p {
          color: var(--secondary);
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .metric-card {
          background: white;
          padding: 1.5rem;
          border-radius: 20px;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: transform 0.2s;
        }
        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }
        .metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .metric-info {
          display: flex;
          flex-direction: column;
        }
        .metric-label {
          font-size: 0.85rem;
          color: var(--secondary);
          font-weight: 600;
        }
        .metric-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--foreground);
          font-family: var(--font-heading);
        }

        .events-section {
          background: white;
          border-radius: 24px;
          border: 1px solid var(--border);
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .view-options {
          display: flex;
          gap: 0.5rem;
          background: var(--muted);
          padding: 0.25rem;
          border-radius: 10px;
        }
        .view-pill {
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .view-pill.active {
          background: white;
          color: var(--primary);
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
        }
        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .empty-state h3 {
          margin-bottom: 0.5rem;
        }
        .empty-state p {
          color: var(--secondary);
          margin-bottom: 2rem;
        }

        .dashboard-table-wrapper {
          overflow-x: auto;
        }
        .dashboard-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        .dashboard-table th {
          padding: 1rem;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--secondary);
          border-bottom: 1px solid var(--border);
        }
        .dashboard-table td {
          padding: 1.25rem 1rem;
          border-bottom: 1px solid #f1f5f9;
        }
        .event-cell {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .event-thumb {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-family: var(--font-heading);
        }
        .event-name {
          display: flex;
          flex-direction: column;
        }
        .event-name span {
          font-size: 0.8rem;
          color: var(--primary);
          font-weight: 600;
        }
        .date-cell {
          display: flex;
          flex-direction: column;
        }
        .date-cell span {
          font-size: 0.8rem;
          color: var(--secondary);
        }
        .loc-cell {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.9rem;
          color: var(--secondary);
          max-width: 180px;
        }
        .text-truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .status-badge.live {
          background: #dcfce7;
          color: #166534;
        }
        .ticket-cell {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-width: 120px;
        }
        .progress-mini {
          height: 6px;
          background: var(--muted);
          border-radius: 3px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 3px;
        }
        .icon-button {
          background: none;
          border: none;
          color: var(--secondary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
        }
        .icon-button:hover {
          background: var(--muted);
          color: var(--foreground);
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }
          .dashboard-header .button {
            width: 100%;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
