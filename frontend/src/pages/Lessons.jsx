import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Lightbulb, Users, Code, Target, Brain } from 'lucide-react';

const Lessons = () => {
  const lessons = [
    {
      icon: Code,
      title: 'Data Modeling Complexity',
      lesson: 'Data modeling and cleaning is more complex than initially expected',
      insight: 'Proper data structure and normalization are foundational — rushing this phase creates technical debt that compounds throughout development'
    },
    {
      icon: Target,
      title: 'Architecture First',
      lesson: 'Strong architecture upfront saves major development time',
      insight: 'Investing time in architectural planning prevented costly refactoring and enabled modular development across team members'
    },
    {
      icon: Brain,
      title: 'Visualization Impact',
      lesson: 'Visual dashboards greatly improve clarity and decision-making',
      insight: 'Stakeholders respond far better to visual representations than raw data tables — good UI/UX is not optional for data products'
    },
    {
      icon: Users,
      title: 'Cross-functional Collaboration',
      lesson: 'Collaboration across roles (data, backend, UI) was key to success',
      insight: 'Regular communication and clearly defined interfaces between components prevented integration issues and kept the team aligned'
    },
    {
      icon: Lightbulb,
      title: 'Realistic Synthetic Data',
      lesson: 'Creating realistic synthetic data requires thoughtful design',
      insight: 'Mock data must reflect real-world patterns and edge cases to validate the system properly — simple random data is insufficient'
    }
  ];

  const teamReflections = [
    {
      member: 'Data Engineering Team',
      reflection: 'Understanding the relationships between entities and ensuring data integrity was challenging but crucial for the project success'
    },
    {
      member: 'Backend Development Team',
      reflection: 'Implementing efficient API endpoints and analytics calculations taught us the importance of performance optimization early in development'
    },
    {
      member: 'Frontend Development Team',
      reflection: 'Creating intuitive, responsive dashboards that present complex data simply required multiple iterations and user feedback'
    },
    {
      member: 'Architecture & Integration Team',
      reflection: 'Coordinating across all layers and ensuring smooth integration reinforced the value of clear documentation and API contracts'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Lessons Learned & Team Reflection</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full"></div>
          </div>

          {/* Key Lessons */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Key Lessons</h2>
            <div className="space-y-6">
              {lessons.map((lesson, index) => {
                const Icon = lesson.icon;
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{lesson.title}</h3>
                          <p className="text-yellow-400 font-medium mb-3">“{lesson.lesson}”</p>
                          <p className="text-slate-400 text-sm">{lesson.insight}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Team Reflections */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Team Reflections</h2>
            <div className="space-y-4">
              {teamReflections.map((item, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-amber-400 mb-2">{item.member}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.reflection}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Team */}
          <Card className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-700/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Project Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-slate-200 font-medium">Sowmya Rao Darineni</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-slate-200 font-medium">Vihari Sai Krishna Reddy Mallidi</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-slate-200 font-medium">Sana Mohammad</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-slate-200 font-medium">Sarun Subbaraju Nadimpalli</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 md:col-span-2">
                  <p className="text-slate-200 font-medium text-center">Jayanth Kalyan Velugubantla</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Thoughts */}
          <Card className="bg-slate-800/50 border-slate-700 mt-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Final Thoughts</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 leading-relaxed space-y-4">
              <p>
                This project has been an invaluable learning experience in <span className="text-yellow-400 font-semibold">system design, data engineering, and collaborative development</span>. We gained hands-on experience with technologies and methodologies that are directly applicable to real-world Industry 4.0 implementations.
              </p>
              
              <p>
                The challenges we encountered — from data modeling complexities to UI/UX refinement — have prepared us to tackle similar problems in professional environments. Most importantly, we learned that <span className="text-white font-medium">successful digital transformation requires not just technical skills, but also strong communication, planning, and user-centered thinking</span>.
              </p>
              
              <p>
                We are proud of what we have accomplished and excited about the potential impact of digital twin technology in transforming manufacturing operations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lessons;