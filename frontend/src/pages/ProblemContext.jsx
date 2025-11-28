import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Users, Wrench, Gauge, Building } from 'lucide-react';

const ProblemContext = () => {
  const stakeholders = [
    {
      icon: Building,
      role: 'Plant Managers',
      problem: "Couldn't see full plant health at a glance",
      impact: 'Delayed resource allocation and slow decision-making'
    },
    {
      icon: Wrench,
      role: 'Maintenance Engineers',
      problem: 'Reactive repair mode with no early warnings',
      impact: 'Increased downtime and higher repair costs'
    },
    {
      icon: Gauge,
      role: 'Operators',
      problem: 'Lacked machine-specific performance details',
      impact: 'Inability to optimize operations in real-time'
    },
    {
      icon: Users,
      role: 'Executives',
      problem: 'No cross-facility benchmarking capabilities',
      impact: 'Missed opportunities for best-practice transfer'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Problem Context & Stakeholders</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>

          {/* The Problem */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">The Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Nexline Manufacturing suffered from <span className="text-red-400 font-semibold">fragmented data across multiple systems</span>, creating significant operational inefficiencies:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-900/50 border border-red-900/30 rounded-lg p-4">
                  <h3 className="text-red-400 font-semibold mb-2">Fragmented Systems</h3>
                  <p className="text-sm text-slate-400">Multiple disconnected interfaces for machine monitoring</p>
                </div>
                <div className="bg-slate-900/50 border border-red-900/30 rounded-lg p-4">
                  <h3 className="text-red-400 font-semibold mb-2">No Visibility</h3>
                  <p className="text-sm text-slate-400">Lack of consolidated plant-level overview</p>
                </div>
                <div className="bg-slate-900/50 border border-red-900/30 rounded-lg p-4">
                  <h3 className="text-red-400 font-semibold mb-2">Delayed Decisions</h3>
                  <p className="text-sm text-slate-400">Slow response to operational issues</p>
                </div>
                <div className="bg-slate-900/50 border border-red-900/30 rounded-lg p-4">
                  <h3 className="text-red-400 font-semibold mb-2">Costly Downtime</h3>
                  <p className="text-sm text-slate-400">Increased repair costs and unplanned failures</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why It Matters */}
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-700/30 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Why It Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                In a <span className="text-orange-400 font-semibold">24/7 manufacturing environment</span>:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3 text-xl">⏱</span>
                  <span><span className="font-semibold text-white">Minutes matter</span> — Every second of downtime impacts production targets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">💰</span>
                  <span><span className="font-semibold text-white">Unplanned failures are expensive</span> — Emergency repairs cost significantly more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3 text-xl">📊</span>
                  <span><span className="font-semibold text-white">Teams need real-time awareness</span> — Proactive maintenance reduces costs</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Stakeholders */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-6">Stakeholders Affected</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {stakeholders.map((stakeholder, index) => {
                const Icon = stakeholder.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-orange-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{stakeholder.role}</h3>
                          <p className="text-red-400 text-sm font-medium mb-2">{stakeholder.problem}</p>
                          <p className="text-slate-400 text-sm">{stakeholder.impact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemContext;