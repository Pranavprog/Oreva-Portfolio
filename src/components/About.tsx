
import React, { useState } from 'react';
import { CheckCircle, Award, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const education = [
    {
      degree: "Bachelor of Engineering (BE)",
      institution: "Vidyavardhaka College of Engineering (VVCE)",
      field: "Computer and Information Sciences",
      period: "2024 - 2028",
    },
  ];
  
  const skills = [
    { 
      name: "Web Design", 
      percentage: 95,
      certifications: [
        { name: "Advanced Web Design Certificate", issuer: "Google Developer", year: "2024" },
        { name: "Responsive Design Certification", issuer: "freeCodeCamp", year: "2023" }
      ]
    },
    { 
      name: "Competitive programming", 
      percentage: 80,
      certifications: [
        { name: "CodeChef 4-Star Rating", issuer: "CodeChef", year: "2024" },
        { name: "HackerRank Problem Solving (Gold)", issuer: "HackerRank", year: "2023" }
      ]
    },
    { 
      name: "UI/UX Design", 
      percentage: 90,
      certifications: [
        { name: "UI/UX Design Specialization", issuer: "Coursera", year: "2024" },
        { name: "Adobe XD Professional", issuer: "Adobe", year: "2023" }
      ]
    },
    { 
      name: "IoT Solutions", 
      percentage: 92.7,
      certifications: [
        { name: "IoT Developer Certification", issuer: "Microsoft Azure", year: "2024" },
        { name: "Arduino Programming Expert", issuer: "Arduino Foundation", year: "2023" }
      ]
    },
    { 
      name: "AI prompting", 
      percentage: 99,
      certifications: [
        { name: "Prompt Engineering for Developers", issuer: "DeepLearning.AI", year: "2024" },
        { name: "Advanced AI Communication", issuer: "OpenAI", year: "2024" }
      ]
    },
  ];

  const softSkillsCertifications = [
    { name: "Leadership Excellence Program", issuer: "Harvard Business School", year: "2024" },
    { name: "Creative Problem Solving", issuer: "Stanford Design School", year: "2023" },
    { name: "Public Speaking Mastery", issuer: "Toastmasters International", year: "2024" },
    { name: "Design Thinking Certification", issuer: "IDEO", year: "2023" }
  ];

  const clubs = ["Google Developers Club", "ASPERA", "IEEE"];

  return (
    <section id="about" className="relative section-padding bg-background">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          {/* Profile Image Column */}
          <div className="md:col-span-2 animate-on-scroll flex justify-center">
            <div className="solid-dark-card p-6 rounded-xl w-full max-w-sm">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden border-4 border-primary/30 mx-auto mb-6 shadow-lg">
                <img 
                  src="https://i.postimg.cc/g0BmQfff/Whats-App-Image-2025-05-16-at-16-19-43-721f46dd.jpg"
                  alt="Pranav Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-bold text-white text-center mb-2">Pranav Kumar</h3>
              <p className="text-gray-300 text-center text-primary">Computer Science Student & Innovator</p>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-3 animate-on-scroll">
            <div className="solid-dark-card rounded-xl p-8 h-full">
              <h3 className="text-3xl font-bold text-white mb-1">
                Crafting Digital Experiences that <span className="text-primary">Inspire</span>.
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed mt-3">
                I am a dedicated Computer and Information Sciences student at VVCE with a passion for creating 
                positive societal impact through technology. With multiple patents including SANTRUPTHI 
                and 4 other idea patents, I combine technical skills with a human-centric approach to solve 
                real-world problems. My goal is to develop innovative and intuitive digital solutions.
              </p>

              <h4 className="text-2xl font-semibold text-primary mb-4 mt-8">Education</h4>
              <div className="space-y-4 mb-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4 py-1">
                    <h5 className="text-lg font-medium text-white">{edu.degree}</h5>
                    <p className="text-gray-300">{edu.institution}</p>
                    <p className="text-gray-400">{edu.field}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mt-10">
                <div>
                  <div className="mb-6">
                    <p className="section-title-pretext">
                      <span className="icon">✱</span> My Core Tools
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-3">
                      Exploring My Technical Stack
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Click on any skill to view my certifications and achievements in that area.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <button
                          onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                          className="w-full text-left group hover:bg-muted/50 p-3 rounded-lg transition-colors"
                        >
                          <div className="flex justify-between mb-1">
                            <span className="text-gray-300 text-sm font-medium group-hover:text-primary transition-colors">
                              {skill.name} {selectedSkill === skill.name ? '▼' : '▶'}
                            </span>
                            <span className="text-primary text-sm font-semibold">{skill.percentage}%</span>
                          </div>
                          <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-primary to-lime-500 transition-all duration-1000 ease-out"
                              style={{ width: `${skill.percentage}%` }}
                            ></div>
                          </div>
                        </button>
                        
                        {selectedSkill === skill.name && (
                          <div className="mt-3 p-4 bg-muted/30 rounded-lg border border-primary/20">
                            <h5 className="text-primary font-semibold mb-3 flex items-center">
                              <Award className="w-4 h-4 mr-2" />
                              Certifications & Achievements
                            </h5>
                            <div className="space-y-2">
                              {skill.certifications.map((cert, certIndex) => (
                                <div key={certIndex} className="flex items-start space-x-2">
                                  <ExternalLink className="w-3 h-3 text-primary mt-1 shrink-0" />
                                  <div className="text-sm">
                                    <p className="text-gray-200 font-medium">{cert.name}</p>
                                    <p className="text-gray-400">{cert.issuer} • {cert.year}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedSkill(selectedSkill === 'soft-skills' ? null : 'soft-skills')}
                    className="w-full text-left group hover:bg-muted/50 p-3 rounded-lg transition-colors mb-4"
                  >
                    <h4 className="text-2xl md:text-3xl font-semibold text-primary group-hover:text-lime-400 transition-colors">
                      Soft Skills & Attributes {selectedSkill === 'soft-skills' ? '▼' : '▶'}
                    </h4>
                  </button>
                  
                  <div className="space-y-3.5">
                    {[
                      "Creative Problem Solving", 
                      "Leadership", 
                      "Adaptability", 
                      "Public Speaking", 
                      "Human-centric Design"
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle size={20} className="text-primary shrink-0" />
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {selectedSkill === 'soft-skills' && (
                    <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-primary/20">
                      <h5 className="text-primary font-semibold mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Leadership & Communication Certifications
                      </h5>
                      <div className="space-y-2">
                        {softSkillsCertifications.map((cert, certIndex) => (
                          <div key={certIndex} className="flex items-start space-x-2">
                            <ExternalLink className="w-3 h-3 text-primary mt-1 shrink-0" />
                            <div className="text-sm">
                              <p className="text-gray-200 font-medium">{cert.name}</p>
                              <p className="text-gray-400">{cert.issuer} • {cert.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <h4 className="text-2xl font-semibold text-primary mb-3 mt-10">Club Memberships</h4>
              <div className="flex flex-wrap gap-2">
                {clubs.map((club, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full bg-muted text-gray-300 text-xs font-medium"
                  >
                    {club}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
