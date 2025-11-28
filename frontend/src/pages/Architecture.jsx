import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Layers, Database, Cpu, Monitor } from 'lucide-react';

const Architecture = () => {
  const layers = [
    {
      icon: Monitor,
      title: 'Presentation Layer',
      color: 'blue',
      description: 'GitHub-hosted Web Portal consuming data from API gateway',
      features: ['Plant dashboard + navigation', 'Machine detail pages with charts', 'Interactive visualizations']
    },
    {
      icon: Cpu,
      title: 'Application & Analytics Layer',
      color: 'green',
      description: 'Intelligence of the system, managing RBAC and performing calculations',
      features: ['KPI calculations (OEE, Uptime)', 'Rule-based Remaining Life Hours prediction', 'Role-Based Access Control (RBAC)']
    },
    {
      icon: Database,
      title: 'Data Layer',
      color: 'purple',
      description: 'Single source of truth using Synthetic CSV/SQLite Database',
      features: ['machines_master (static metadata)', 'machines_data (time-series telemetry)', 'events_log (alerts & warnings)']
    }
  ];

  const entities = [
    {
      name: 'machines_master',
      description: 'Static metadata',
      fields: ['machine_id (PK)', 'plant', 'machine_type', 'expected_life_hours']
    },
    {
      name: 'machines_data',
      description: 'Time-series telemetry',
      fields: ['timestamp', 'machine_id (FK)', 'status', 'vibration_mms', 'temperature_c', 'total_runtime_hours', 'oee_percent']
    },
    {
      name: 'events_log',
      description: 'Discrete events',
      fields: ['timestamp', 'machine_id (FK)', 'error_code', 'event_tag']
    },
    {
      name: 'plants_summary',
      description: 'Aggregates',
      fields: ['plant', 'avg_uptime_24h_pct', 'avg_oee']
    }
  ];

  const colorMap = {
    blue: 'blue-500',
    green: 'green-500',
    purple: 'purple-500'
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Architecture & Data Design</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          {/* Enterprise Architecture Diagram */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Layers className="h-7 w-7 text-blue-400" />
                Enterprise Architecture Diagram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_twin-dashboard-2/artifacts/ijn1qhxj_image.png" 
                  alt="Enterprise Architecture Diagram"
                  className="w-full h-auto rounded"
                />
              </div>
            </CardContent>
          </Card>

          {/* Three-Layer Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Three-Layer Structure</h2>
            <div className="space-y-6">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                const colorClass = colorMap[layer.color];
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-opacity-100 transition-all duration-300" style={{ borderColor: `hsl(var(--${layer.color}-500) / 0.3)` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-14 h-14 bg-${layer.color}-500/10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-7 w-7 text-${layer.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-white mb-2">{layer.title}</h3>
                          <p className="text-slate-400 mb-4">{layer.description}</p>
                          <ul className="space-y-2">
                            {layer.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className={`text-${layer.color}-400 mr-2`}>•</span>
                                <span className="text-slate-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* ER Diagram */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-3">
                <Database className="h-7 w-7 text-purple-400" />
                Entity-Relationship Diagram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white rounded-lg p-4">
                <img 
                  src="https://customer-assets.emergentagent.com/job_twin-dashboard-2/artifacts/ranbm2ca_image.png" 
                  alt="Entity-Relationship Diagram"
                  className="w-full h-auto rounded"
                />
              </div>
            </CardContent>
          </Card>

          {/* Data Entities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Data Structure</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {entities.map((entity, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-white font-mono">{entity.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400 text-sm mb-4">{entity.description}</p>
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                      <ul className="space-y-2">
                        {entity.fields.map((field, idx) => (
                          <li key={idx} className="text-sm font-mono text-slate-300">
                            {field}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Preparation */}
          <Card className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-700/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Data Preparation Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">✓</span>
                  <span>Normalized timestamps to 15-minute intervals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">✓</span>
                  <span>Cleaned float values (2-decimal precision)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-3">✓</span>
                  <span>Ensured relational integrity via machine_id keys</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Architecture;