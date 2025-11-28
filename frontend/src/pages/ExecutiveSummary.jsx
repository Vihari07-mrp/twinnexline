import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { AlertCircle, TrendingUp, Shield, Zap } from 'lucide-react';

const ExecutiveSummary = () => {
  const highlights = [
    {
      icon: AlertCircle,
      title: 'Problem Addressed',
      description: 'Fragmented machine monitoring systems causing slow decision-making and costly downtime'
    },
    {
      icon: TrendingUp,
      title: 'Solution Delivered',
      description: 'Unified web application with real-time KPI monitoring and predictive analytics'
    },
    {
      icon: Shield,
      title: 'Technology Stack',
      description: 'Three-layer microservice architecture with SQLite/CSV data layer'
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Enhanced operational awareness and shift from reactive to proactive maintenance'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Executive Summary</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Project Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                Nexline Manufacturing faced major operational challenges due to <span className="text-blue-400 font-medium">fragmented machine monitoring systems</span>. Managers and maintenance teams relied on multiple disconnected interfaces to understand machine performance, resulting in slow decisions, hidden inefficiencies, and costly unplanned downtime.
              </p>
              
              <p>
                Our project — the <span className="text-cyan-400 font-medium">Nexline Digital Twin Prototype</span> — provides a unified, data-driven solution. We created a GitHub-hosted multi-page web application that centralizes simulated machine telemetry across <span className="text-white font-medium">20 assets</span> and <span className="text-white font-medium">two plants</span>. The system consolidates real-time KPIs, machine-level analytics, and predictive indicators such as Remaining Life Hours.
              </p>

              <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Architecture Highlights</h3>
                <p className="mb-4">
                  Built using a <span className="text-blue-400 font-medium">three-layer microservice-inspired architecture</span>, the solution includes:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>A synthetic SQLite/CSV data layer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>An analytics layer calculating OEE, uptime, and rule-based predictions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">•</span>
                    <span>A presentation layer with dashboards, machine views, and event logs</span>
                  </li>
                </ul>
              </div>

              <p>
                The dashboard delivers instant visibility into <span className="text-white font-medium">fleet availability, energy consumption, alerts, and failures</span>, while the analytics page highlights key performance gaps and predictive maintenance opportunities.
              </p>

              <p>
                This prototype demonstrates how a digital twin environment can dramatically enhance operational awareness, reduce downtime, and support a shift from <span className="text-red-400">reactive</span> to <span className="text-green-400">proactive maintenance</span>. It also provides a scalable foundation for future enhancements such as live IoT integration, advanced ML models, and remote actuation capabilities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummary;