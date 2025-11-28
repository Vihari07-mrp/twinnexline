import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const Ethics = () => {
  const considerations = [
    {
      icon: Lock,
      title: 'Role-Based Access Control',
      description: 'RBAC implementation prevents unauthorized data access and ensures only authorized personnel can view sensitive operational data'
    },
    {
      icon: Eye,
      title: 'Transparent ML Models',
      description: 'Future ML models must be explainable and auditable to maintain trust and enable human oversight of automated decisions'
    },
    {
      icon: AlertTriangle,
      title: 'Unbiased Maintenance Prioritization',
      description: 'Predictive systems must avoid biased maintenance prioritization that could disadvantage certain facilities or equipment'
    },
    {
      icon: Shield,
      title: 'Safe Digital Transformation',
      description: 'Ensures transparent, ethical digital transformation that protects staff and maintains operational integrity'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ethical & Social Considerations</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
          </div>

          {/* Introduction */}
          <Card className="bg-slate-800/50 border-slate-700 mb-12">
            <CardContent className="p-8">
              <p className="text-slate-300 text-lg leading-relaxed">
                As we transition to <span className="text-amber-400 font-semibold">data-driven manufacturing systems</span>, it is critical to address ethical implications and ensure responsible implementation. Our Digital Twin prototype incorporates several safeguards and considerations to maintain trust, transparency, and fairness in operational decision-making.
              </p>
            </CardContent>
          </Card>

          {/* Key Considerations */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {considerations.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-amber-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-amber-400" />
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

          {/* Detailed Discussion */}
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-700/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Our Commitment to Ethical AI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-slate-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Privacy & Security</h3>
                <p>
                  The implementation of role-based access control ensures that sensitive operational data is only accessible to authorized personnel. This prevents data leakage and maintains confidentiality of proprietary manufacturing processes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Algorithmic Transparency</h3>
                <p>
                  All predictive models and analytics must be explainable to human operators. Black-box algorithms that cannot be audited or understood are not acceptable in critical manufacturing environments where decisions impact worker safety and operational reliability.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Fair Resource Allocation</h3>
                <p>
                  Automated maintenance prioritization systems must be designed to avoid systematic biases that could disadvantage certain facilities, shifts, or equipment types. Regular audits ensure equitable resource distribution.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Human-Centered Design</h3>
                <p>
                  Technology should augment human decision-making, not replace it. Our system provides actionable insights while keeping humans in the loop for critical decisions, ensuring accountability and leveraging human expertise.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Ethics;