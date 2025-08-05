import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, User } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate Engineering student with a strong foundation in AI, Machine Learning
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column - Education Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Bachelor */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Bachelor</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    BE in Electronics and Communication Engineering
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    KLE Technological University
                  </p>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2021 - May 2024</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>BVB, Hubli</span>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    CGPA: 7.1
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Graduate</p>
                </div>
              </div>
            </div>

            {/* Diploma */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Diploma</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Diploma in Electronics and Communication Engineering
                  </h4>
                  <p className="text-green-600 dark:text-green-400 font-medium">
                    K.H.Kabbur Institute of Engineering, Dharwad
                  </p>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jun 2018 - May 2021</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Dharwad, Karnataka</span>
                </div>
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    CGPA: 6.0
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Diploma</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - My Journey Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full"
          >
            <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/20 dark:border-gray-700/30 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(13,148,136,0.4)] transition-all duration-300 flex flex-col justify-start">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">My Journey</h3>
                  <p className="text-gray-600 dark:text-gray-400">A Brief Story</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed">
                I didn’t take the straight path to engineering I forged my own. From giving JEE multiple to diploma and lateral-entry ECE engineering at a tier-3 college, my journey is a testament to stubborn self-determination, not luck. I come from a background where even the idea of cracking JEE or building a career in AI was unheard so I taught myself. I didn’t wait for opportunities, I created them.
                <br /><br />
                Growing up, I was fascinated by the idea of machines that could think and adapt, like JARVIS from Iron Man. That childhood dream became my reality when I discovered the world of AI and machine learning. It wasn’t just a field it was a calling.
                <br /><br />
                During my engineering studies, I secured an internship in at IIT, where I worked hands-on with neural networks, Data concept, Automation and ETL pipeplines. This experience solidified my passion for this field. To further hone my skills, I cleared the AWS Solutions Architect Associate (SAA-C03) exam in just one month a challenge I took on to prove to myself that I can master anything.
                <br /><br />
                I’m not driven by titles or trends I’m driven by problems worth solving. I’m looking for a team that values curiosity over credentials, grit over GPA, and real work over résumé buzzwords. If you’re ready to build the future, let’s talk. Got a role or project in mind? Let’s bring it to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
