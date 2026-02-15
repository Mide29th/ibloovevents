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
          <div className="date-badge">{date}</div>
          <div className="price-pill">{typeof price === 'number' ? `₦${price.toLocaleString()}` : price}</div>
        </div>

        <div className="card-content">
          <h3 className="event-title">{title}</h3>
          <div className="host-info">
            <span>Hosted by {host}</span>
            {isVerified && <BadgeCheck size={14} className="verified-icon" />}
          </div>

          <div className="event-footer">
            <div className="attendee-pile">
              <div className="avatars">
                {[1, 2, 3].map(i => (
                  <div key={i} className="avatar-small" />
                ))}
              </div>
              <span className="attendee-count">{attendees}+ going</span>
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
            background: var(--background);
            border-radius: 16px;
            overflow: hidden;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
          }
          .event-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.05);
          }
          .image-container {
            position: relative;
            aspect-ratio: 1/1;
            overflow: hidden;
          }
          .event-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .event-card:hover .event-image {
            transform: scale(1.05);
          }
          .date-badge {
            position: absolute;
            top: 12px;
            left: 12px;
            background: white;
            color: black;
            padding: 4px 10px;
            border-radius: 8px;
            font-size: 0.75rem;
            font-weight: 700;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          }
          .price-pill {
            position: absolute;
            bottom: 12px;
            right: 12px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 4px 12px;
            border-radius: 99px;
            font-size: 0.8rem;
            font-weight: 600;
            backdrop-filter: blur(4px);
          }
          .card-content {
            padding: 1rem 0.5rem;
          }
          .event-title {
            font-size: 1.1rem;
            margin-bottom: 0.4rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .host-info {
            display: flex;
            align-items: center;
            gap: 4px;
            font-size: 0.85rem;
            color: var(--secondary);
            margin-bottom: 1rem;
          }
          .verified-icon {
            color: #007AFF;
          }
          .event-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .attendee-pile {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .avatars {
            display: flex;
            margin-left: 4px;
          }
          .avatar-small {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #ddd;
            border: 2px solid white;
            margin-left: -6px;
          }
          .avatar-small:first-child {
            margin-left: 0;
          }
          .attendee-count {
            font-size: 0.8rem;
            color: var(--secondary);
            font-weight: 500;
          }
        `}</style>
      </div>
    </Link>
  );
}
