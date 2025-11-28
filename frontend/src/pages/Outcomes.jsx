import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { CheckCircle2, Target, Zap, TrendingUp, Database, BarChart3 } from 'lucide-react';

const Outcomes = () => {
  const achievements = [
    {
      icon: Database,
      title: 'Eliminated Data Silos',
      description: 'Consolidated fragmented machine data into a single, unified platform'
    },
    {
      icon: BarChart3,
      title: 'Centralized Performance Data',
      description: 'All machine performance metrics accessible from one dashboard'
    },
    {
      icon: Zap,
      title: 'Real-time Dashboards',
      description: 'Created live monitoring and analytics capabilities for instant insights'
    },
    {
      icon: TrendingUp,
      title: 'Proactive Maintenance',
      description: 'Enabled predictive maintenance planning through data-driven insights'
    },
    {
      icon: Target,
      title: 'Industry 4.0 Foundation',
      description: 'Built scalable architecture ready for advanced IoT and ML integration'
    },
    {
      icon: CheckCircle2,
      title: 'Proof of Concept',
      description: 'Successfully deployed on GitHub as a secure, versatile demonstration'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Outcomes & Conclusion</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
          </div>

          {/* Key Achievements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">What We Achieved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                          <p className="text-slate-400 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Impact Summary */}
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-700/30 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Project Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300 leading-relaxed">
              <p className="text-lg">
                The Nexline Digital Twin Prototype successfully demonstrates how <span className="text-green-400 font-semibold">unified data platforms</span> can transform manufacturing operations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-900/50 border border-green-900/30 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                  <p className="text-sm text-slate-400">Data Consolidation</p>
                </div>
                <div className="bg-slate-900/50 border border-green-900/30 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">20+</div>
                  <p className="text-sm text-slate-400">Assets Monitored</p>
                </div>
                <div className="bg-slate-900/50 border border-green-900/30 rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">Real-time</div>
                  <p className="text-sm text-slate-400">KPI Updates</p>
                </div>
              </div>

              <p>
                By providing <span className="text-white font-medium">centralized visibility, predictive analytics, and actionable insights</span>, we have created a foundation for data-driven decision-making that can significantly reduce downtime, optimize resource allocation, and improve overall equipment effectiveness.
              </p>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 leading-relaxed space-y-4">
              <p>
                The successful development and deployment of the Nexline Digital Twin Prototype validates the transformative potential of digital twin technology in manufacturing environments.
              </p>
              
              <p>
                Our solution addresses critical pain points — <span className="text-red-400">fragmented data, delayed decisions, and reactive maintenance</span> — while establishing a scalable platform for future innovation.
              </p>
              
              <p>
                As Nexline moves forward with this digital transformation, the prototype serves as both a proof of concept and a practical foundation for <span className="text-green-400 font-semibold">Industry 4.0 adoption</span>, enabling smarter, faster, and more efficient manufacturing operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Outcomes;