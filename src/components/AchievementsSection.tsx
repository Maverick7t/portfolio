import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Star } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      issuer: "Oracle Cloud",
      description: "The Oracle Cloud Infrastructure 2024 Generative AI Professional certification is designed for Software Developers, Machine Learning/AI Engineers, and Gen AI Professionals.",
      icon: Star,
      gradient: "from-indigo-500 to-blue-600",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1DB266F5ACEB0E174F37E5756C691DD17C8BFA416D085B0379B2C9AE4E5ECBD1"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "AWS Cloud",
      description: "Professional certification demonstrating proficiency in Cloud infrastructure and services offered by AWS.",
      icon: Award,
      gradient: "from-cyan-500 to-blue-600",
      link: "https://www.credly.com/badges/3fa1dba9-a170-42a2-a7fc-cb2c1639b804/linked_in_profile"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Highlighting industry-recognized certifications earned in cloud and AI technologies
          </p>
        </motion.div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            📜 Professional Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/30 dark:border-gray-700/40 transform-gpu"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${cert.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <motion.a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 12 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex-shrink-0 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>

                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">
                      {cert.issuer}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
