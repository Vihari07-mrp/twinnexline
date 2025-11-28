import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Database, BarChart3, Settings, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const teamMembers = [
    'Sowmya Rao Darineni',
    'Vihari Sai Krishna Reddy Mallidi',
    'Sana Mohammad',
    'Sarun Subbaraju Nadimpalli',
    'Jayanth Kalyan Velugubantla'
  ];

  const features = [
    {
      icon: Database,
      title: 'Centralized Data',
      description: 'Unified view of 20+ manufacturing assets across multiple plants'
    },
    {
      icon: BarChart3,
      title: 'Real-time KPIs',
      description: 'Live monitoring of OEE, uptime, and critical performance metrics'
    },
    {
      icon: Settings,
      title: 'Predictive Analytics',
      description: 'Machine lifetime analysis and proactive maintenance insights'
    },
    {
      icon: Shield,
      title: 'Industry 4.0 Ready',
      description: 'Scalable architecture designed for modern manufacturing'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <span className="text-blue-400 text-sm font-medium">Digital Twin Technology</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nexline Digital Twin
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Prototype
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              A real-time, web-based Digital Twin solution designed to eliminate fragmented machine data and empower manufacturing teams with centralized visibility, KPI monitoring, and actionable operational insights.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Project Team</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-700/30 border border-slate-600 rounded-xl overflow-hidden">
              <img 
                src="https://customer-assets.emergentagent.com/job_twin-dashboard-2/artifacts/6ja8avwb_image.png"
                alt="Nexline Digital Twin Project Team"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-slate-300 text-sm">
                  {member}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Capabilities</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Transforming manufacturing operations through intelligent data consolidation and real-time insights
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
              <div className="text-slate-400">Manufacturing Assets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">2</div>
              <div className="text-slate-400">Simulated Plants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-slate-400">Real-Time Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Explore the Solution?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Discover how our Digital Twin prototype transforms manufacturing operations through data-driven insights
          </p>
          <Link to="/executive-summary">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;