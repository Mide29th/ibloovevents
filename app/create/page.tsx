'use client';

import { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Upload, DollarSign, Type, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CreateEventPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    tickets: [
      { id: Date.now(), name: 'General Admission', price: '', capacity: '' }
    ],
    image: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      tickets: [
        { id: Date.now(), name: 'General Admission', price: '', capacity: '' }
      ],
      image: null as File | null
    });
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple ID generation
    const totalCapacity = formData.tickets.reduce((acc, t) => acc + (parseInt(t.capacity) || 0), 0);
    const minPrice = Math.min(...formData.tickets.map(t => parseFloat(t.price) || 0));
    const maxPrice = Math.max(...formData.tickets.map(t => parseFloat(t.price) || 0));

    const newEvent = {
      ...formData,
      id: Date.now(),
      host: "Me (Organizer)",
      attendees: 0,
      isVerified: false,
      capacity: totalCapacity,
      price: minPrice === maxPrice ? (minPrice === 0 ? 'Free' : `₦${minPrice}`) : `₦${minPrice} - ₦${maxPrice}`,
      displayDate: new Date(formData.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()
    };

    // Persist to localStorage
    const existingEvents = JSON.parse(localStorage.getItem('user_events') || '[]');
    localStorage.setItem('user_events', JSON.stringify([...existingEvents, newEvent]));

    setStep(4);
  };

  return (
    <div className="create-page">
      <div className="container">
        <Link href="/" className="back-link">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="form-wrapper">
          <div className="progress-bar">
            <div className={`step ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`line ${step >= 2 ? 'filled' : ''}`}></div>
            <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`line ${step >= 3 ? 'filled' : ''}`}></div>
            <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          {step === 4 ? (
            <div className="success-screen">
              <CheckCircle size={64} className="success-icon" />
              <h2>Event Created Successfully!</h2>
              <p>Your event is now live on iBLOOV. Let&apos;s make something amazing! 🎉</p>
              <div className="success-actions">
                <button onClick={resetForm} className="button button-primary">Create Another Event</button>
                <Link href="/dashboard" className="button button-outline">Manage My Events</Link>
                <Link href="/" className="button button-ghost">Go to Home</Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="step-content">
                  <h2>The Basics</h2>
                  <p className="step-desc">Let&apos;s start with the core details of your event.</p>

                  <div className="form-group">
                    <label>Event Title</label>
                    <div className="input-with-icon">
                      <Type size={18} />
                      <input
                        type="text"
                        name="title"
                        placeholder="e.g. Lagos Tech Meetup"
                        value={formData.title}
                        onChange={handleInputChange}
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Date</label>
                      <div className="input-with-icon">
                        <Calendar size={18} />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Time</label>
                      <div className="input-with-icon">
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Location</label>
                    <div className="input-with-icon">
                      <MapPin size={18} />
                      <input
                        type="text"
                        name="location"
                        placeholder="e.g. Landmark Centre, VI"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <button type="button" className="button button-primary full-width" onClick={nextStep}>
                    Next: Details
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="step-content">
                  <h2>Finer Details</h2>
                  <p className="step-desc">Tell your guests what to expect.</p>

                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      name="description"
                      placeholder="Describe the vibe, agenda, etc."
                      rows={5}
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Event Image</label>
                    <div className="upload-box">
                      <Upload size={24} />
                      <p>Click or drag to upload cover image</p>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="button button-ghost" onClick={prevStep}>Back</button>
                    <button type="button" className="button button-primary" onClick={nextStep}>Next: Tickets</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="step-content">
                  <h2>Ticketing</h2>
                  <p className="step-desc">Create different ticket types for your guests.</p>

                  <div className="tickets-list">
                    {formData.tickets.map((ticket, index) => (
                      <div key={ticket.id} className="ticket-item-form">
                        <div className="ticket-header">
                          <label>Ticket Type {index + 1}</label>
                          {formData.tickets.length > 1 && (
                            <button
                              type="button"
                              className="remove-ticket"
                              onClick={() => {
                                const newTickets = formData.tickets.filter(t => t.id !== ticket.id);
                                setFormData(prev => ({ ...prev, tickets: newTickets }));
                              }}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            placeholder="e.g. VIP, Early Bird"
                            value={ticket.name}
                            className="ticket-input-full"
                            onChange={(e) => {
                              const newTickets = [...formData.tickets];
                              newTickets[index].name = e.target.value;
                              setFormData(prev => ({ ...prev, tickets: newTickets }));
                            }}
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <div className="input-with-icon">
                              <DollarSign size={18} />
                              <input
                                type="number"
                                placeholder="Price (₦)"
                                value={ticket.price}
                                onChange={(e) => {
                                  const newTickets = [...formData.tickets];
                                  newTickets[index].price = e.target.value;
                                  setFormData(prev => ({ ...prev, tickets: newTickets }));
                                }}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              type="number"
                              placeholder="Capacity"
                              value={ticket.capacity}
                              onChange={(e) => {
                                const newTickets = [...formData.tickets];
                                newTickets[index].capacity = e.target.value;
                                setFormData(prev => ({ ...prev, tickets: newTickets }));
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="button button-outline full-width add-ticket-btn"
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        tickets: [...prev.tickets, { id: Date.now(), name: '', price: '', capacity: '' }]
                      }));
                    }}
                  >
                    + Add Another Ticket Type
                  </button>

                  <div className="form-actions" style={{ marginTop: '2.5rem' }}>
                    <button type="button" className="button button-ghost" onClick={prevStep}>Back</button>
                    <button type="submit" className="button button-primary">Create Event</button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .create-page {
          min-height: 100vh;
          background: var(--muted);
          padding: 2rem 0;
        }
        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--secondary);
          font-weight: 500;
          margin-bottom: 2rem;
          transition: color 0.2s;
        }
        .back-link:hover {
          color: var(--primary);
        }
        .form-wrapper {
          max-width: 500px;
          margin: 0 auto;
          background: white;
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: 0 4px 24px rgba(0, 0, 210, 0.06);
          border: 1px solid var(--border);
        }
        .progress-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          padding: 0 1rem;
        }
        .step {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--muted);
          color: var(--secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          font-family: var(--font-heading);
          transition: all 0.3s ease;
          border: 2px solid var(--border);
        }
        .step.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(0, 0, 210, 0.2);
        }
        .line {
          flex: 1;
          height: 2px;
          background: var(--border);
          margin: 0 0.5rem;
          transition: background 0.3s ease;
        }
        .line.filled {
          background: var(--primary);
        }
        h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-heading);
          color: var(--foreground);
        }
        .step-desc {
          color: var(--secondary);
          margin-bottom: 2rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--foreground);
          font-family: var(--font-heading);
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-with-icon svg {
          position: absolute;
          left: 1rem;
          color: var(--secondary);
          pointer-events: none;
        }
        input, textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          padding-left: 2.8rem;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          font-size: 1rem;
          font-family: var(--font-body);
          transition: border-color 0.2s, box-shadow 0.2s;
          background: #fff;
          color: var(--foreground);
        }
        textarea {
          padding-left: 1rem;
          resize: none;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 0, 210, 0.08);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .upload-box {
          border: 2px dashed var(--border);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          color: var(--secondary);
          cursor: pointer;
          transition: all 0.2s;
        }
        .upload-box:hover {
          border-color: var(--primary);
          background: rgba(0, 0, 210, 0.02);
          color: var(--primary);
        }
        .full-width {
          width: 100%;
          margin-top: 1rem;
        }
        .form-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
        }
        .button-ghost {
          background: transparent;
          color: var(--secondary);
          font-family: var(--font-heading);
        }
        .button-ghost:hover {
          color: var(--primary);
        }
        .summary-card {
          background: var(--muted);
          padding: 1.25rem;
          border-radius: 12px;
          margin-top: 1rem;
          font-size: 0.9rem;
          border-left: 3px solid var(--accent);
        }
        .summary-card h3 {
          font-family: var(--font-heading);
          margin-bottom: 0.5rem;
        }
        .tickets-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .ticket-item-form {
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 16px;
          border: 1px solid var(--border);
        }
        .ticket-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .ticket-header label {
          margin-bottom: 0 !important;
          color: var(--primary) !important;
        }
        .remove-ticket {
          background: none;
          border: none;
          color: #ef4444;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
        }
        .ticket-input-full {
          padding-left: 1rem !important;
        }
        .add-ticket-btn {
          border-style: dashed !important;
          background: #fff !important;
        }
        .success-screen {
          text-align: center;
          padding: 2rem 0;
        }
        .success-icon {
          color: var(--accent);
          margin-bottom: 1.5rem;
        }
        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
      `}</style>
    </div>
  );
}
