'use client';

import { Sparkles, ShieldCheck, Ticket, Users, Globe, Zap } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <Sparkles size={24} className="icon-blue" />,
            title: "Discover Unique Events",
            description: "From secret rooftops to massive festivals, find experiences that match your vibe perfectly."
        },
        {
            icon: <ShieldCheck size={24} className="icon-amber" />,
            title: "Secure Ticketing",
            description: "Fraud-proof digital tickets with instant entry. Your safety and peace of mind are our priority."
        },
        {
            icon: <Ticket size={24} className="icon-blue" />,
            title: "Seamless Booking",
            description: "Book tickets in seconds. No long forms, no stress. Just pick, pay, and you're in."
        },
        {
            icon: <Users size={24} className="icon-amber" />,
            title: "Built for Community",
            description: "See where your friends are going and build your own social event calendar."
        },
        {
            icon: <Globe size={24} className="icon-blue" />,
            title: "Global Reach",
            description: "Find events in major cities across Africa and beyond. We are where the culture is."
        },
        {
            icon: <Zap size={24} className="icon-amber" />,
            title: "Instant Updates",
            description: "Get real-time notifications about event changes, guest list updates, and more."
        }
    ];

    return (
        <section className="features-section">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">Why iBLOOV?</h2>
                    <p className="section-subtitle">We're redefining how you experience the world around you.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, idx) => (
                        <div key={idx} className="feature-card">
                            <div className="icon-container">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .features-section {
          padding: 8rem 0;
          background: var(--muted);
          position: relative;
        }
        .features-header {
          text-align: center;
          margin-bottom: 5rem;
        }
        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--foreground);
          margin-bottom: 1rem;
        }
        .section-subtitle {
          font-size: 1.25rem;
          color: var(--foreground-muted);
          font-family: var(--font-body);
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .feature-card {
          padding: 2.5rem;
          background: white;
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-premium);
          border-color: var(--primary-glow);
        }
        .icon-container {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: var(--muted);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        .feature-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--foreground);
          font-family: var(--font-heading);
        }
        .feature-description {
          color: var(--foreground-muted);
          line-height: 1.6;
          font-family: var(--font-body);
        }
        
        :global(.icon-blue) { color: var(--primary); }
        :global(.icon-amber) { color: var(--accent); }

        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr; }
          .section-title { font-size: 2rem; }
        }
      `}</style>
        </section>
    );
}
