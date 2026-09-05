import React, { useState } from 'react';
import { FESTIVAL_ORGANISERS } from '../data/festivalData';

export const ContactView: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiryType, setEnquiryType] = useState('general');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    setSent(true);
  };

  return (
    <div id="contact-view-page" className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E7E5E4] pb-5 mb-6 sm:pb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
            Contact
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#57534E] font-normal max-w-xl leading-[1.6]">
            Official communications desk for media accreditation, institutional partnerships, vendor logistics, and festival management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Leadership & Coordinates */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] font-display leading-tight">
                Organisers & Directors
              </h2>
            </div>

            <div className="space-y-6 divide-y divide-[#E7E5E4] border-y border-[#E7E5E4] py-6">
              {FESTIVAL_ORGANISERS.map((org) => (
                <div key={org.name} className="pt-4 first:pt-0 space-y-1">
                  <h3 className="text-lg font-bold tracking-tight text-[#1C1917] font-display">
                    {org.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#B45309] font-semibold">
                    {org.role}
                  </p>
                  <p className="text-sm text-[#57534E] font-normal pt-1 leading-[1.6]">
                    {org.bio || org.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              <div className="text-base text-[#1C1917] font-semibold">Moses Mabhida People’s Park</div>
              <div className="text-sm text-[#78716C] font-normal">Durban, KwaZulu-Natal, South Africa</div>
            </div>
          </div>

          {/* Contact Form - NO CARD */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            {sent ? (
              <div className="space-y-4 py-8">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] font-display leading-tight">
                  Thank You
                </h3>
                <p className="text-base text-[#57534E] font-normal max-w-md leading-[1.6]">
                  Your official inquiry has been submitted to the festival management desk. A response will be dispatched within 48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] font-display leading-tight">
                    Send an Enquiry
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1.5">
                    Enquiry Category
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  >
                    <option value="general">General Festival Enquiries</option>
                    <option value="media">Media & Press Accreditation</option>
                    <option value="partnership">Institutional & Brand Partnership</option>
                    <option value="vendors">Vendor Logistics & Trading</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E36414] hover:bg-[#BF4A04] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
