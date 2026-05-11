'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Wifi, Users, CigaretteOff, PawPrint, Phone, Mail, Waves, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const lodgeImages = [
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=80',
];

const bookedDates = ['2026-08-15', '2026-08-16', '2026-08-17', '2026-08-18', '2026-09-05', '2026-09-06'];
const priceByMonth = { 5: 220, 6: 220, 7: 270, 8: 200 };

function formatDate(date) { return date.toISOString().slice(0, 10); }
function getMonthDays(year, monthIndex) {
  const first = new Date(year, monthIndex, 1);
  const startDay = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(new Date(year, monthIndex, d));
  return days;
}

function CalendarPreview() {
  const [monthIndex, setMonthIndex] = useState(7);
  const year = 2026;
  const monthName = new Date(year, monthIndex, 1).toLocaleString('en-GB', { month: 'long' });
  const days = useMemo(() => getMonthDays(year, monthIndex), [monthIndex]);
  const price = priceByMonth[monthIndex] || 200;
  return (
    <Card className="bg-white/10 border-white/15 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
      <CardContent className="p-5 sm:p-7">
        <div className="flex items-center justify-between gap-3 mb-5">
          <div><p className="text-sm uppercase tracking-[0.35em] text-amber-200">Availability</p><h3 className="text-2xl font-semibold text-white">{monthName} {year}</h3><p className="text-white/70 text-sm">From £{price} per night</p></div>
          <div className="flex gap-2"><Button variant="secondary" className="rounded-full" onClick={() => setMonthIndex(Math.max(5, monthIndex - 1))}>Prev</Button><Button variant="secondary" className="rounded-full" onClick={() => setMonthIndex(Math.min(8, monthIndex + 1))}>Next</Button></div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-xs text-white/60 mb-2">{['M','T','W','T','F','S','S'].map((d,i)=><span key={i}>{d}</span>)}</div>
        <div className="grid grid-cols-7 gap-2">{days.map((date, i) => { if (!date) return <div key={i} />; const key = formatDate(date); const booked = bookedDates.includes(key); return <button key={key} disabled={booked} className={`aspect-square rounded-2xl text-sm font-medium transition ${booked ? 'bg-red-500/30 text-white/40 line-through cursor-not-allowed' : 'bg-white/10 hover:bg-amber-300 hover:text-slate-950 text-white'}`}>{date.getDate()}</button>; })}</div>
        <div className="flex flex-wrap gap-3 mt-5 text-sm text-white/70"><span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-white/20" /> Available</span><span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500/50" /> Booked</span></div>
      </CardContent>
    </Card>
  );
}

function Feature({ icon: Icon, title, text }) {
  return <Card className="rounded-3xl bg-white border-0 shadow-xl"><CardContent className="p-6"><div className="w-12 h-12 rounded-2xl bg-slate-950 text-amber-200 flex items-center justify-center mb-4"><Icon size={22} /></div><h3 className="font-semibold text-lg text-slate-950">{title}</h3><p className="text-slate-600 mt-2 leading-relaxed">{text}</p></CardContent></Card>;
}

export default function CoralCoveFiveSite() {
  const phone = '07930 156855';
  const email = 'beverleyparkcaravans@gmail.com';
  const whatsapp = 'https://wa.me/447930156855?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Coral%20Cove%205';
  return (
    <div className="min-h-screen bg-[#070707] text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between"><div><p className="text-xs tracking-[0.35em] text-amber-200 uppercase">Beverley Park Caravans</p><h1 className="text-lg sm:text-xl font-semibold">Coral Cove 5</h1></div><a href={whatsapp} target="_blank" rel="noreferrer"><Button className="rounded-full bg-amber-300 text-slate-950 hover:bg-amber-200">Book now</Button></a></div></header>
      <section className="relative min-h-screen flex items-center overflow-hidden"><div className="absolute inset-0"><img src={lodgeImages[0]} alt="Luxury lodge interior" className="w-full h-full object-cover opacity-55" /><div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" /></div><div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 grid lg:grid-cols-2 gap-10 items-center"><motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}><div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 mb-6 text-sm text-amber-100"><Sparkles size={16} /> Regal Cranleigh Lodge · Devon English Riviera</div><h2 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[0.95]">Your Regal Retreat by the sea.</h2><p className="text-lg sm:text-xl text-white/75 mt-6 max-w-xl leading-relaxed">A luxury 2-bedroom lodge sleeping 4 at Beverley Holiday Park, Paignton. Boutique comfort, panoramic windows, private decking, free WiFi and entertainment passes included.</p><div className="flex flex-col sm:flex-row gap-3 mt-8"><a href={whatsapp} target="_blank" rel="noreferrer"><Button size="lg" className="rounded-full bg-amber-300 text-slate-950 hover:bg-amber-200 w-full sm:w-auto">Check availability <ChevronRight size={18} /></Button></a><a href={`mailto:${email}`}><Button size="lg" variant="outline" className="rounded-full border-white/30 text-white bg-white/5 hover:bg-white/15 w-full sm:w-auto">Email enquiry</Button></a></div></motion.div><motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}><CalendarPreview /></motion.div></div></section>
      <section className="bg-[#f6f1e8] text-slate-950 py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="grid md:grid-cols-4 gap-4 mb-14"><Feature icon={Users} title="Sleeps 4" text="Two stylish bedrooms, ideal for couples, friends or small families." /><Feature icon={Wifi} title="Free WiFi" text="Stay connected throughout your holiday with WiFi included." /><Feature icon={ShieldCheck} title="Passes included" text="Entertainment passes are included for extra value and convenience." /><Feature icon={Waves} title="English Riviera" text="Set in Beverley Holiday Park, Goodrington Road, Paignton, Devon." /></div><div className="grid lg:grid-cols-2 gap-10 items-center"><div><p className="text-sm uppercase tracking-[0.35em] text-amber-700">The Lodge</p><h2 className="text-4xl sm:text-5xl font-semibold mt-3">Opulent comfort with a boutique hotel feel.</h2><p className="text-slate-600 text-lg mt-5 leading-relaxed">Coral Cove 5 is a Regal Cranleigh lodge with a striking exterior, panoramic windows and a beautifully styled interior. Relax in the lounge, enjoy the modern kitchen, then step out onto your private decking for warm evenings by the coast.</p><div className="grid sm:grid-cols-2 gap-3 mt-8 text-slate-700"><div className="flex items-center gap-2"><CigaretteOff size={18} /> No smoking</div><div className="flex items-center gap-2"><PawPrint size={18} /> No pets</div><div className="flex items-center gap-2"><CalendarDays size={18} /> Minimum 3 nights Fri-Mon</div><div className="flex items-center gap-2"><CalendarDays size={18} /> Minimum 4 nights Mon-Fri</div></div></div><div className="grid grid-cols-2 gap-4">{lodgeImages.slice(1, 5).map((src, i) => <img key={src} src={src} alt={`Coral Cove gallery ${i + 1}`} className={`rounded-3xl object-cover w-full shadow-2xl ${i === 0 || i === 3 ? 'h-72' : 'h-56 mt-8'}`} />)}</div></div></div></section>
      <section className="py-20 bg-black"><div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start"><div><p className="text-sm uppercase tracking-[0.35em] text-amber-200">Prices</p><h2 className="text-4xl sm:text-5xl font-semibold mt-3">Seasonal 2026 rates</h2><p className="text-white/70 text-lg mt-5">Direct bookings available. Weekends are Friday to Monday, midweek breaks are Monday to Friday.</p></div><div className="space-y-4">{[['June & July 2026','£220 per night'],['August 2026','£270 per night'],['September 2026','£200 per night']].map(([label, value]) => <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-6 flex items-center justify-between"><span className="text-lg">{label}</span><strong className="text-amber-200 text-xl">{value}</strong></div>)}</div></div></section>
      <section className="bg-[#f6f1e8] text-slate-950 py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10"><Card className="rounded-3xl border-0 shadow-2xl overflow-hidden"><CardContent className="p-0"><iframe title="Beverley Holiday Park Map" src="https://www.google.com/maps?q=Beverley%20Holiday%20Park%20TQ4%207JE&output=embed" className="w-full h-[420px] border-0" loading="lazy" /></CardContent></Card><div><p className="text-sm uppercase tracking-[0.35em] text-amber-700">Location</p><h2 className="text-4xl sm:text-5xl font-semibold mt-3">Beverley Holiday Park, Paignton.</h2><p className="text-slate-600 text-lg mt-5 leading-relaxed">Perfectly placed for Goodrington, Paignton, Torquay and the Devon English Riviera. Enjoy beaches, coastal walks, family attractions and holiday park facilities from your luxury base.</p><div className="mt-8 space-y-4 text-slate-700"><p className="flex gap-3"><MapPin /> Goodrington Road, Paignton, Devon, TQ4 7JE</p><p className="flex gap-3"><Phone /> {phone}</p><p className="flex gap-3"><Mail /> {email}</p></div></div></div></section>
      <footer className="bg-black py-14 border-t border-white/10"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center"><div><p className="text-2xl font-semibold">Coral Cove 5</p><p className="text-white/60 mt-1">Beverley Park Caravans · Luxury lodge holidays in Devon</p></div><a href={whatsapp} target="_blank" rel="noreferrer"><Button className="rounded-full bg-amber-300 text-slate-950 hover:bg-amber-200">Enquire on WhatsApp</Button></a></div></footer>
    </div>
  );
}
