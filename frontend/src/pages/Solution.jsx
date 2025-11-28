import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, Globe, BarChart3, Bell, Clock, Shield } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: Globe,
      title: 'Real-time Fleet Monitoring',
      description: 'Continuous tracking of all 20 machines across 2 plants with live status updates'
    },
    {
      icon: BarChart3,
      title: 'Machine-level Dashboards',
      description: 'Detailed performance metrics, time-series graphs, and operational history for each asset'
    },
    {
      icon: Bell,
      title: 'Alerts + Events Log',
      description: 'Chronological feed of warnings, failures, and maintenance events with severity indicators'
    },
    {
      icon: Clock,
      title: 'Predictive Metrics',
      description: 'Remaining Life Hours calculation based on cumulative runtime and operational patterns'
    },
    {
      icon: Shield,
      title: 'Role-based Authentication',
      description: 'Secure access control with Manager, Maintenance, and Viewer permission levels'
    },
    {
      icon: CheckCircle2,
      title: 'OEE & Uptime Analytics',
      description: 'Comprehensive KPI tracking including availability, performance, and quality metrics'
    }
  ];

  const coreFeatures = [
    '20 simulated machines across 2 plants',
    'OEE, uptime, energy, and runtime analytics',
    'Failure frequency & utilization charts',
    'Searchable machine lookup page',
    'Clean, interactive UI with real-time updates',
    'Predictive maintenance indicators'
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Proposed Solution</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* What We Built */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">What We Built</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300 leading-relaxed">
              <p className="text-lg">
                A <span className="text-green-400 font-semibold">GitHub-hosted Digital Twin prototype</span> that provides:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-900/50 border border-green-900/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                  <p className="text-sm text-slate-400">Data Consolidation</p>
                </div>
                <div className="bg-slate-900/50 border border-green-900/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">Real-time</div>
                  <p className="text-sm text-slate-400">KPI Updates</p>
                </div>
                <div className="bg-slate-900/50 border border-green-900/30 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">Proactive</div>
                  <p className="text-sm text-slate-400">Maintenance Mode</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                          <p className="text-slate-400 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Core Features List */}
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-700/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Core Capabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {coreFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Solution;