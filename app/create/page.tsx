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
        price: '',
        capacity: '',
        image: null as File | null
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setStep(4); // Success step
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
                        <div className="line"></div>
                        <div className={`step ${step >= 2 ? 'active' : ''}`}>2</div>
                        <div className="line"></div>
                        <div className={`step ${step >= 3 ? 'active' : ''}`}>3</div>
                    </div>

                    {step === 4 ? (
                        <div className="success-screen">
                            <CheckCircle size={64} className="success-icon" />
                            <h2>Event Created Successfully!</h2>
                            <p>Your event is now live on Ibloov.</p>
                            <div className="success-actions">
                                <Link href="/" className="button button-primary">Go Home</Link>
                                <Link href="/events/1" className="button button-outline">View Event</Link>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            {step === 1 && (
                                <div className="step-content">
                                    <h2>The Basics</h2>
                                    <p className="step-desc">Let's start with the core details of your event.</p>

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
                                            <p>Click or drag to upload cover info</p>
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
                                    <p className="step-desc">Set your price and capacity.</p>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Price (₦)</label>
                                            <div className="input-with-icon">
                                                <DollarSign size={18} />
                                                <input
                                                    type="number"
                                                    name="price"
                                                    placeholder="0 for free"
                                                    value={formData.price}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Capacity</label>
                                            <input
                                                type="number"
                                                name="capacity"
                                                placeholder="e.g. 100"
                                                value={formData.capacity}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="summary-card">
                                        <h3>Summary</h3>
                                        <p><strong>{formData.title || "Untitled Event"}</strong></p>
                                        <p>{formData.date} • {formData.location}</p>
                                        <p>{formData.price ? `₦${formData.price}` : 'Free Entry'}</p>
                                    </div>

                                    <div className="form-actions">
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
          background: #f8f9fa;
          padding: 2rem 0;
        }
        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--secondary);
          font-weight: 500;
          margin-bottom: 2rem;
        }
        .form-wrapper {
          max-width: 500px;
          margin: 0 auto;
          background: white;
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .progress-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2.5rem;
          padding: 0 1rem;
        }
        .step {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f3f3f3;
          color: #999;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }
        .step.active {
          background: var(--foreground);
          color: white;
        }
        .line {
          flex: 1;
          height: 2px;
          background: #f3f3f3;
          margin: 0 0.5rem;
        }
        h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
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
          color: #333;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-with-icon svg {
          position: absolute;
          left: 1rem;
          color: #999;
          pointer-events: none;
        }
        input, textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          padding-left: 2.8rem;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          font-size: 1rem;
          transition: border-color 0.2s;
          background: #fff;
        }
        textarea {
          padding-left: 1rem;
          resize: none;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: var(--foreground);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .upload-box {
          border: 2px dashed #e0e0e0;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          color: var(--secondary);
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .upload-box:hover {
          border-color: var(--foreground);
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
        }
        .button-ghost:hover {
          color: var(--foreground);
        }
        .summary-card {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 12px;
          margin-top: 1rem;
          font-size: 0.9rem;
        }
        .success-screen {
          text-align: center;
          padding: 2rem 0;
        }
        .success-icon {
          color: #22c55e;
          margin-bottom: 1.5rem;
        }
        .success-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        .button-outline {
          border: 1px solid var(--border);
          color: var(--foreground);
          padding: 0.75rem 1.5rem;
          border-radius: 99px;
          font-weight: 600;
          text-align: center;
        }
      `}</style>
        </div>
    );
}
