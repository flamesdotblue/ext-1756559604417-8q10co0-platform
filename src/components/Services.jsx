import React from 'react';
import { Rocket, Shield, Brain, Code } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy & Product Discovery',
    desc: 'Identify high-ROI AI opportunities, run design sprints, and craft a roadmap that aligns with your goals.'
  },
  {
    icon: Code,
    title: 'Full-stack AI Engineering',
    desc: 'From data pipelines to inference and delightful UIs. We ship robust, scalable, production-ready systems.'
  },
  {
    icon: Rocket,
    title: 'Voice Agents & Copilots',
    desc: 'Natural, responsive agents that schedule, support, and sell. Latency-optimized, human-like experiences.'
  },
  {
    icon: Shield,
    title: 'Security, Compliance & Observability',
    desc: 'Guardrails, evals, cost controls, and audit-ready operations baked into every deployment.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">What we do</h2>
            <p className="text-white/70 mt-2 max-w-2xl">We integrate strategy, design, and engineering to deliver AI-first products that feel inevitable.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 hover:bg-white/10 transition text-sm">
            Book a discovery call
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-white/20 transition overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-purple-600/10 via-indigo-600/5 to-orange-500/10" />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl grid place-items-center bg-white/10 border border-white/10">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mini CTA */}
        <div id="contact" className="mt-14 md:mt-20 grid md:grid-cols-3 gap-6 items-center rounded-3xl border border-white/10 p-6 md:p-10 bg-gradient-to-r from-white/5 via-white/5 to-white/5">
          <div className="md:col-span-2">
            <h3 className="text-xl md:text-2xl font-semibold">Have an idea worth building?</h3>
            <p className="mt-2 text-white/70">Tell us about your product and we will prepare a tailored approach, timeline, and investment.</p>
          </div>
          <div className="flex md:justify-end">
            <a href="mailto:hello@advitiyalabs.com" className="inline-flex w-full md:w-auto items-center justify-center px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-white/90 transition">
              hello@advitiyalabs.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
