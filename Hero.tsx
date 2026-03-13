import { Target, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Clients Served' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Target, value: '99.9%', label: 'Success Rate' },
  { icon: TrendingUp, value: '24/7', label: 'Support Available' }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Apex Defense Solutions
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed font-light">
              At Apex Defense Solutions, we provide Strategic Management and Consultation for the Modern Defense Landscape.
            </p>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed font-light">
              Our team of experts combines decades of federal and military experience with deep regulatory insight to deliver unparalleled success in navigating the complex Department of Defense landscape.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-light">
              Apex Defense Solutions LLC is a dedicated government contractor providing end-to-end execution in large-scale construction, advanced manufacturing, emergent defense technologies and their implementation. We bridge the gap between complex DoD requirements and mission-ready infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl text-center transform hover:scale-105 transition-transform duration-200 border border-amber-600/30"
              >
                <stat.icon className="h-10 w-10 text-amber-500 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-amber-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
