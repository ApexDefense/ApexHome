import { Shield, Lock, Eye, Server, Radio, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Perimeter Security',
    description: 'Advanced perimeter defense systems with real-time monitoring and threat detection capabilities.'
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Multi-layered access control solutions ensuring authorized personnel access to critical areas.'
  },
  {
    icon: Eye,
    title: 'Surveillance Systems',
    description: 'State-of-the-art surveillance infrastructure with AI-powered analytics and 24/7 monitoring.'
  },
  {
    icon: Server,
    title: 'Infrastructure Protection',
    description: 'Comprehensive protection for critical infrastructure against physical and cyber threats.'
  },
  {
    icon: Radio,
    title: 'Communication Security',
    description: 'Secure communication systems and encrypted channels for sensitive operations.'
  },
  {
    icon: AlertTriangle,
    title: 'Threat Assessment',
    description: 'Professional risk analysis and threat assessment services to identify vulnerabilities.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Comprehensive security solutions tailored to your organization's unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-800 hover:border-amber-600/50 group"
            >
              <div className="mb-4 inline-flex p-3 bg-amber-600/10 rounded-lg group-hover:bg-amber-600/20 transition-colors">
                <service.icon className="h-8 w-8 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
