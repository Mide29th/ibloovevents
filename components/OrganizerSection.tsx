'use client';

import Link from 'next/link';
import { Zap, Wallet, BarChart3 } from 'lucide-react';

export default function OrganizerSection() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Launch in 5 minutes",
      description: "Fastest setup in the market. Focus on the vibes, not the tech."
    },
    {
      icon: <Wallet size={24} />,
      title: "Instant Payouts",
      description: "Direct settlements to Flex-it or your bank account."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Own your data",
      description: "Detailed guest insights and direct marketing control."
    }
  ];

  return (
    <section className="organizer-section">
      <div className="container">
        <div className="organizer-box">
          <div className="box-header">
            <h2>Built for Creators</h2>
            <p className="subtitle">Everything you need to host remarkable events.</p>
          </div>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-item">
                <div className="icon-wrapper">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="box-footer">
            <Link href="/create" className="button cta-amber">Start Creating Now</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .organizer-section {
          padding: 6rem 0;
          background: var(--secondary-blue);
        }
        .organizer-box {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 4rem;
          border-radius: 32px;
          text-align: center;
          backdrop-filter: blur(12px);
        }
        .box-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #ffffff;
          font-family: var(--font-heading);
        }
        .subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-bottom: 4rem;
        }
        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .icon-wrapper {
          width: 56px;
          height: 56px;
          background: var(--accent);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--secondary-blue);
        }
        .feature-item h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
          color: #ffffff;
          font-family: var(--font-heading);
        }
        .feature-item p {
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.5;
          font-size: 0.95rem;
        }
        .cta-amber {
          background: var(--accent);
          color: var(--foreground);
          font-weight: 700;
          font-family: var(--font-heading);
          padding: 0.85rem 2rem;
          border-radius: 99px;
          border: none;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .cta-amber:hover {
          background: var(--accent-soft);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(241, 160, 0, 0.3);
        }
        
        @media (max-width: 960px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .organizer-box {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
