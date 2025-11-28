import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { BookOpen, Lightbulb, TrendingUp, Database } from 'lucide-react';

const Research = () => {
  const findings = [
    {
      title: 'Digital Twin Impact',
      description: 'Digital Twins significantly reduce downtime and improve productivity in manufacturing environments',
      stat: '25-30%',
      statLabel: 'Downtime Reduction'
    },
    {
      title: 'OEE Standard',
      description: 'Overall Equipment Effectiveness (OEE) is the industry-standard KPI for performance analysis',
      stat: '85%',
      statLabel: 'World-Class OEE'
    },
    {
      title: 'Predictive Maintenance',
      description: 'Predictive maintenance reduces failure rates and significantly lowers maintenance costs',
      stat: '40%',
      statLabel: 'Cost Reduction'
    },
    {
      title: 'Microservices Architecture',
      description: 'Modular architecture supports scalability and enables independent analytics development',
      stat: '3x',
      statLabel: 'Faster Deployment'
    }
  ];

  const insights = [
    {
      icon: TrendingUp,
      title: 'Central Dashboards',
      description: 'Must surface KPIs clearly with intuitive visual hierarchies'
    },
    {
      icon: Database,
      title: 'Sensor Telemetry',
      description: 'Temperature and vibration data essential for failure prediction'
    },
    {
      icon: BookOpen,
      title: 'Historical Logs',
      description: 'Improve traceability and diagnostic accuracy for root cause analysis'
    },
    {
      icon: Lightbulb,
      title: 'Real-time Processing',
      description: 'Immediate data processing enables proactive decision-making'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Research & Insights</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>

          {/* Industry Findings */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Industry Findings</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {findings.map((finding, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{finding.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 mb-4">{finding.description}</p>
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-700/30 rounded-lg p-4">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
                        {finding.stat}
                      </div>
                      <div className="text-slate-400 text-sm">{finding.statLabel}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Insights Applied */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Key Insights Applied in Design</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {insights.map((insight, index) => {
                  const Icon = insight.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{insight.title}</h3>
                        <p className="text-slate-400 text-sm">{insight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Research Summary */}
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-700/30 mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Research Impact</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 leading-relaxed">
              <p>
                Our research validated the critical need for integrated digital twin solutions in modern manufacturing. The findings directly informed our architectural decisions, feature prioritization, and KPI selection. By applying industry best practices and lessons learned from existing implementations, we designed a solution that addresses real operational pain points while maintaining scalability for future enhancements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Research;