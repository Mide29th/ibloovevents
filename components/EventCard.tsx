'use client';

import { MapPin, Users, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface EventCardProps {
  id: string | number;
  title: string;
  host: string;
  date: string;
  image: string;
  attendees: number;
  price: string | number;
  isVerified?: boolean;
}

export default function EventCard({
  id,
  title,
  host,
  date,
  image,
  attendees,
  price,
  isVerified = false
}: EventCardProps) {
  return (
    <Link href={`/events/${id}`} className="event-card-link">
      <div className="event-card">
        <div className="image-container">
          <Image
            src={image}
            alt={title}
            fill
            className="event-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="card-top-row">
            <div className="date-badge">{date}</div>
            {isVerified && (
              <div className="verified-pill">
                <BadgeCheck size={14} />
                <span>Verified</span>
              </div>
            )}
          </div>
          <div className="price-pill">
            {typeof price === 'number' ? `₦${price.toLocaleString()}` : price}
          </div>
        </div>

        <div className="card-content">
          <h3 className="event-title">{title}</h3>
          <p className="event-host">by {host}</p>

          <div className="event-footer">
            <div className="attendee-group">
              <div className="avatars">
                {[1, 2, 3].map(i => (
                  <div key={i} className="avatar-circle" />
                ))}
              </div>
              <span className="attendee-text">{attendees}+ vibing</span>
            </div>
            <div className="card-action">
              <span className="action-dot"></span>
            </div>
          </div>
        </div>

        <style jsx>{`
          .event-card-link {
            display: block;
            text-decoration: none;
            color: inherit;
          }
          .event-card {
            background: white;
            border-radius: var(--radius-md);
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid var(--border);
            position: relative;
          }
          .event-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-premium);
            border-color: var(--primary-glow);
          }
          .image-container {
            position: relative;
            aspect-ratio: 4/3;
            overflow: hidden;
            background: var(--muted);
          }
          .event-image {
            object-fit: cover;
            transition: transform 0.6s ease;
          }
          .event-card:hover .event-image {
            transform: scale(1.1);
          }
          .card-top-row {
            position: absolute;
            top: 1rem;
            left: 1rem;
            right: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
          }
          .date-badge {
            background: white;
            color: var(--foreground);
            padding: 0.4rem 0.8rem;
            border-radius: var(--radius-sm);
            font-size: 0.75rem;
            font-weight: 700;
            box-shadow: var(--shadow-md);
            font-family: var(--font-heading);
          }
          .verified-pill {
            background: var(--primary);
            color: white;
            padding: 0.35rem 0.75rem;
            border-radius: 99px;
            font-size: 0.7rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.35rem;
            box-shadow: 0 4px 12px rgba(0, 0, 210, 0.2);
          }
          .price-pill {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            background: rgba(15, 23, 42, 0.8);
            backdrop-filter: blur(8px);
            color: white;
            padding: 0.4rem 0.9rem;
            border-radius: var(--radius-sm);
            font-size: 0.85rem;
            font-weight: 700;
            font-family: var(--font-heading);
          }
          .card-content {
            padding: 1.5rem;
          }
          .event-title {
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
            color: var(--foreground);
            font-family: var(--font-heading);
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .event-host {
            font-size: 0.9rem;
            color: var(--foreground-muted);
            margin-bottom: 1.5rem;
            font-family: var(--font-body);
          }
          .event-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .attendee-group {
            display: flex;
            align-items: center;
            gap: 0.75rem;
          }
          .avatars {
            display: flex;
          }
          .avatar-circle {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #e2e8f0;
            border: 2px solid white;
            margin-left: -8px;
          }
          .avatar-circle:first-child { margin-left: 0; }
          .attendee-text {
            font-size: 0.85rem;
            color: var(--foreground-muted);
            font-weight: 500;
          }
          .card-action {
             width: 12px;
             height: 12px;
             display: flex;
             align-items: center;
             justify-content: center;
          }
          .action-dot {
             width: 6px;
             height: 6px;
             background: var(--border);
             border-radius: 50%;
             transition: all 0.3s ease;
          }
          .event-card:hover .action-dot {
             background: var(--primary);
             box-shadow: 0 0 8px var(--primary);
             transform: scale(2);
          }
        `}</style>
      </div>
    </Link>
  );
}
