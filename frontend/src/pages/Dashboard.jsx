import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { ExternalLink, BarChart3, Activity, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';

const Dashboard = () => {
  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: 'Fleet Overview Dashboard',
      description: 'Real-time operational awareness with fleet status KPIs, plant performance cards, and machine status grid'
    },
    {
      icon: Activity,
      title: 'Machine Detail Pages',
      description: 'Comprehensive diagnostics with live metrics, temperature/vibration trends, and maintenance status'
    },
    {
      icon: AlertCircle,
      title: 'Events & Alerts Log',
      description: 'Chronological display of warnings, failures, and maintenance events with severity indicators'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Deep-dive analysis with failure frequency, machine utilization, energy trends, and OEE comparison'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Dashboard & Data Analysis</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>

          {/* Dashboard Preview */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-white">Live Dashboard</CardTitle>
                <a href="https://jayanthkalyanvelugubantla.github.io/Nexline_Twin/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
                    Open Full Dashboard <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700">
                <iframe
                  src="https://jayanthkalyanvelugubantla.github.io/Nexline_Twin/"
                  title="Nexline Digital Twin Dashboard"
                  className="w-full h-[600px] bg-white"
                  style={{ minHeight: '600px' }}
                />
              </div>
              <p className="text-slate-400 text-sm mt-4">
                Interactive dashboard showcasing real-time machine monitoring, KPI tracking, and predictive analytics for the Nexline manufacturing environment.
              </p>
            </CardContent>
          </Card>

          {/* Dashboard Features */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Dashboard Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dashboardFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-cyan-400" />
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

          {/* Key Insights */}
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-700/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Key Insights Enabled</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p><span className="font-semibold text-white">Instant identification</span> of down machines and emerging issues</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p><span className="font-semibold text-white">Quick assessment</span> of fleet health and plant performance</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p><span className="font-semibold text-white">Cross-facility benchmarking</span> for best-practice identification</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p><span className="font-semibold text-white">Predictive maintenance</span> opportunities through temperature and vibration correlation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p><span className="font-semibold text-white">Energy optimization</span> insights and efficiency degradation signals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;