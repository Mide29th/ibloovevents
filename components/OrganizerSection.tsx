'use client';

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
            <button className="button button-primary">Start Creating Now</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .organizer-section {
          padding: 6rem 0;
          background: var(--muted);
        }
        .organizer-box {
          background: white;
          padding: 4rem;
          border-radius: 32px;
          text-align: center;
          border: 1px solid var(--border);
        }
        .box-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .subtitle {
          color: var(--secondary);
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
          background: #f3f3f3;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          color: var(--foreground);
        }
        .feature-item h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .feature-item p {
          color: var(--secondary);
          line-height: 1.5;
          font-size: 0.95rem;
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
