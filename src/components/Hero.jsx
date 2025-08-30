import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 md:pt-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs bg-white/10 border border-white/10 text-white/80 px-3 py-1 rounded-full mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              AI-first Product Studio
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Build category-defining products with AI.
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/70 max-w-xl">
              Advitiya Labs partners with ambitious teams to design, build, and scale AI voice agents, copilots, and intelligent experiences that feel beautifully human.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-90 transition text-white font-semibold shadow-lg shadow-indigo-700/30">
                Start a project
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 hover:bg-white/10 transition text-white font-semibold">
                Explore services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-xs text-white/60">Products shipped</div>
              </div>
              <div>
                <div className="text-2xl font-bold">$200M</div>
                <div className="text-xs text-white/60">Client value created</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5x</div>
                <div className="text-xs text-white/60">Faster to market</div>
              </div>
            </div>
          </div>

          {/* Spline Canvas */}
          <div className="relative h-[420px] sm:h-[500px] md:h-[560px] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900 to-gray-950">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* soft gradient mask overlay to blend with background; does not block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-16 md:mt-24" />
      </div>
    </section>
  );
}
