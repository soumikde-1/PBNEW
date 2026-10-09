import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check, Copy, MessageSquare, Clock, Calendar } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    eventType: 'Anchoring & Event Hosting',
    eventDate: '',
    message: '',
  });

  const [copiedType, setCopiedType] = useState<'phone' | 'email' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageText = `*New Booking & Casting Inquiry (Portfolio)*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone / WhatsApp:* ${formData.phone || 'Not provided'}\n` +
      `🎬 *Category:* ${formData.eventType}\n` +
      `📅 *Target Date / Timeline:* ${formData.eventDate || 'Flexible'}\n\n` +
      `💬 *Project Brief / Message:*\n${formData.message}\n\n` +
      `_Sent via Purbasha Basu Official Portfolio_`;

    const whatsappUrl = `https://wa.me/918250789938?text=${encodeURIComponent(messageText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-20 border-t border-blue-950/80 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2">
            <span>Get In Touch</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Direct Bookings & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Let's Collaborate on Your Next Broadcast or Event
          </h2>
          <p className="mt-4 text-base text-white/80 leading-relaxed">
            Available for television anchoring, newsroom reporting, digital voice-overs, live stage compering, and corporate moderations in Kolkata, Siliguri, and across West Bengal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info Cards (Strictly Orange, Blue, Black, White) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Phone Card */}
            <div className="bg-[#080c14] rounded-2xl p-6 border border-blue-950 hover:border-blue-800 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-blue-900">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/60 font-medium block">
                      Direct Calling & WhatsApp
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.contact.phone}`}
                      className="text-lg font-bold text-white hover:text-orange-400 transition-colors"
                    >
                      {PERSONAL_INFO.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-black text-white/70 hover:text-white border border-blue-900 transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex gap-2.5 pt-2">
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  className="flex-1 py-2 text-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Call Directly
                </a>
                <a
                  href={`https://wa.me/91${PERSONAL_INFO.contact.phone}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 text-center text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-[#080c14] rounded-2xl p-6 border border-blue-950 hover:border-blue-800 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-blue-900">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-white/60 font-medium block">
                      Official Inquiries Email
                    </span>
                    <a
                      href={PERSONAL_INFO.socials.emailMailto}
                      className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.email, 'email')}
                  className="p-2 rounded-lg bg-black text-white/70 hover:text-white border border-blue-900 transition-colors"
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.socials.emailMailto}
                  className="block w-full py-2 text-center text-xs font-semibold text-white bg-black hover:bg-blue-950 border border-blue-900 rounded-lg transition-colors"
                >
                  Send Direct Email
                </a>
              </div>
            </div>

            {/* Geographic Coverage Card */}
            <div className="bg-[#080c14] rounded-2xl p-6 border border-blue-950">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center border border-blue-900">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Geographic Base & Mobility</h4>
                  <span className="text-xs text-white/60">Broadcast Hub & Native Roots</span>
                </div>
              </div>

              <div className="space-y-3 text-xs divide-y divide-blue-950">
                <div className="flex justify-between items-center pt-2 first:pt-0">
                  <span className="text-white/60">Current City (Studio Base)</span>
                  <span className="text-white font-medium">{PERSONAL_INFO.contact.currentCity}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white/60">Permanent Hometown</span>
                  <span className="text-white font-medium">{PERSONAL_INFO.contact.location}, West Bengal</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white/60">Channel Affiliation</span>
                  <span className="text-orange-400 font-bold">Aarohi News Bangla</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Dispatch Contact Form */}
          <div className="lg:col-span-7 bg-[#080c14] border border-blue-950 rounded-2xl p-6 sm:p-8">
            <div className="mb-6 pb-4 border-b border-blue-950">
              <h3 className="text-xl font-bold text-white">
                Send an Event or Casting Message
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Your message details will open directly in Purbasha Basu's official WhatsApp (+91 8250789938).
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-blue-950/60 border border-blue-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Ready for WhatsApp</h4>
                <p className="text-xs text-white/80 max-w-md mx-auto">
                  Thank you! WhatsApp has been opened with your inquiry details. If it did not open automatically, click the button below:
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/918250789938?text=${encodeURIComponent(
                      `*Inquiry from ${formData.name}*\nRole: ${formData.eventType}\nMessage: ${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs"
                  >
                    <span>Click to Send WhatsApp Message</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Subhankar Das"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-blue-950 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. producer@media.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-blue-950 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-blue-950 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-blue-950 text-white text-xs focus:outline-none focus:border-orange-500"
                    >
                      <option value="Television Anchoring">Television Anchoring</option>
                      <option value="Commercial Voice Over">Commercial Voice Over</option>
                      <option value="Event Hosting & Compering">Event Hosting & Compering</option>
                      <option value="Field Reporting Assignment">Field Reporting Assignment</option>
                      <option value="Other Media Inquiry">Other Media Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                    Target Broadcast / Event Date (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    placeholder="e.g. 25th October 2026 or Immediate"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-blue-950 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                    Project Brief / Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your broadcast show, voiceover requirement, or event details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-blue-950 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send Inquiry via WhatsApp'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
