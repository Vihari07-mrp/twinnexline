import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Wifi, Brain, Settings, TrendingUp } from 'lucide-react';

const NextSteps = () => {
  const steps = [
    {
      icon: Wifi,
      title: 'Live IoT Integration',
      description: 'Connect to real Industrial IoT sensor streams for actual machine telemetry',
      timeline: 'Phase 1 (3-6 months)',
      benefits: ['Real-time data accuracy', 'Eliminate simulation dependencies', 'Enable true predictive capabilities']
    },
    {
      icon: Brain,
      title: 'ML-Driven Predictive Models',
      description: 'Implement advanced machine learning algorithms for failure prediction',
      timeline: 'Phase 2 (6-12 months)',
      benefits: ['Improved prediction accuracy', 'Pattern recognition', 'Anomaly detection']
    },
    {
      icon: Settings,
      title: 'Remote Maintenance & Actuation',
      description: 'Enable remote maintenance logging and control capabilities',
      timeline: 'Phase 3 (12-18 months)',
      benefits: ['Remote diagnostics', 'Faster response times', 'Reduced on-site requirements']
    },
    {
      icon: TrendingUp,
      title: 'Enterprise-Level Analytics',
      description: 'Expand to multi-plant enterprise analytics and cross-facility optimization',
      timeline: 'Phase 4 (18-24 months)',
      benefits: ['Enterprise-wide visibility', 'Best practice sharing', 'Strategic planning support']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Next Steps</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Introduction */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardContent className="p-8">
              <p className="text-slate-300 text-lg leading-relaxed">
                While the current prototype demonstrates core capabilities, the roadmap ahead focuses on <span className="text-cyan-400 font-semibold">enhancing accuracy, scalability, and automation</span>. The following phases outline the evolution from proof-of-concept to production-ready enterprise system.
              </p>
            </CardContent>
          </Card>

          {/* Roadmap Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-cyan-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-white mb-2">{step.title}</CardTitle>
                        <p className="text-slate-400">{step.description}</p>
                        <div className="inline-block mt-3 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                          <span className="text-cyan-400 text-sm font-medium">{step.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="ml-[72px]">
                      <h4 className="text-white font-semibold mb-3">Expected Benefits:</h4>
                      <ul className="space-y-2">
                        {step.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-cyan-400 mr-2">✓</span>
                            <span className="text-slate-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Future Vision */}
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-700/30 mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Long-term Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 leading-relaxed space-y-4">
              <p>
                The ultimate goal is to create a <span className="text-cyan-400 font-semibold">fully autonomous manufacturing intelligence platform</span> that not only monitors and predicts, but actively optimizes operations in real-time.
              </p>
              
              <p>
                This includes <span className="text-white font-medium">autonomous maintenance scheduling, self-optimizing production lines, and AI-driven resource allocation</span> that continuously learns and improves from operational data.
              </p>
              
              <p>
                By maintaining our commitment to <span className="text-green-400">transparency, ethics, and human-centered design</span>, we can ensure that advanced automation enhances rather than replaces human expertise and decision-making.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;