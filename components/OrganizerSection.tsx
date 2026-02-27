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
        <div className="organizer-container">
          <div className="organizer-content">
            <h2 className="organizer-title">Build for creators, <br /><span className="text-amber">not for ticket sellers.</span></h2>
            <p className="organizer-subtitle">
              Take full control of your events. From guest lists to detailed analytics,
              we give you the tools to host unforgettable experiences.
            </p>

            <div className="organizer-features">
              {features.map((feature, idx) => (
                <div key={idx} className="feature-inline">
                  <div className="icon-circle">{feature.icon}</div>
                  <div className="feature-text">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="organizer-actions">
              <Link href="/create" className="button button-primary amber-btn">Start Creating Now</Link>
              <Link href="/dashboard" className="button button-outline dark-outline">View Organizer Dashboard</Link>
            </div>
          </div>

          <div className="organizer-visual">
            <div className="dashboard-preview">
              <div className="preview-header"></div>
              <div className="preview-body">
                <div className="preview-line long"></div>
                <div className="preview-line short"></div>
                <div className="preview-grid">
                  <div className="preview-box"></div>
                  <div className="preview-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .organizer-section {
          padding: 8rem 0;
          background: #0F172A; /* Slate 900 */
          color: white;
          overflow: hidden;
        }
        .organizer-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .organizer-title {
          font-size: 3rem;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }
        .text-amber { color: var(--accent); }
        .organizer-subtitle {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 3.5rem;
          max-width: 600px;
          line-height: 1.6;
        }
        .organizer-features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }
        .feature-inline {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }
        .icon-circle {
          width: 48px;
          height: 48px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }
        .feature-text h4 {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          font-family: var(--font-heading);
        }
        .feature-text p {
           color: rgba(255, 255, 255, 0.5);
           font-size: 0.95rem;
        }
        .organizer-actions {
          display: flex;
          gap: 1rem;
        }
        :global(.amber-btn) {
           background: var(--accent) !important;
           color: var(--foreground) !important;
           box-shadow: 0 10px 20px -5px rgba(241, 160, 0, 0.3) !important;
        }
        :global(.dark-outline) {
           border-color: rgba(255, 255, 255, 0.1) !important;
           color: white !important;
        }
        :global(.dark-outline:hover) {
           background: rgba(255, 255, 255, 0.05) !important;
           border-color: white !important;
        }

        .organizer-visual {
           position: relative;
        }
        .dashboard-preview {
           background: #1E293B;
           border-radius: var(--radius-md);
           border: 1px solid rgba(255, 255, 255, 0.1);
           height: 400px;
           width: 100%;
           padding: 1.5rem;
           box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.45);
           transform: perspective(1000px) rotateY(-15deg);
        }
        .preview-header {
           height: 8px;
           width: 40px;
           background: rgba(255, 255, 255, 0.1);
           border-radius: 4px;
           margin-bottom: 2rem;
        }
        .preview-line {
           background: rgba(255, 255, 255, 0.05);
           border-radius: 2px;
           margin-bottom: 1rem;
        }
        .preview-line.long { height: 12px; width: 80%; }
        .preview-line.short { height: 10px; width: 40%; }
        .preview-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 1rem;
           margin-top: 2rem;
        }
        .preview-box {
           height: 120px;
           background: rgba(255, 255, 255, 0.03);
           border: 1px dashed rgba(255, 255, 255, 0.1);
           border-radius: 8px;
        }

        @media (max-width: 1024px) {
          .organizer-container {
             grid-template-columns: 1fr;
             text-align: center;
          }
          .organizer-content {
             display: flex;
             flex-direction: column;
             align-items: center;
          }
          .organizer-subtitle { margin: 0 auto 3rem; }
          .feature-inline { text-align: left; }
          .organizer-visual { display: none; }
          .organizer-actions { flex-direction: column; width: 100%; }
        }
      `}</style>
    </section>
  );
}
