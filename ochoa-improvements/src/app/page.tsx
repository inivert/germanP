'use client';

import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Loading from '@/components/layout/Loading';
import ErrorBoundary from '@/components/layout/ErrorBoundary';
import { services, testimonials, stats, projects } from '@/data/content';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import type { Service, Project, Testimonial, Stat } from '@/types';

export default function Home() {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <ErrorBoundary
      error={null}
      reset={() => window.location.reload()}
    >
      <Suspense fallback={<Loading />}>
        <main className="overflow-x-hidden">
          <Hero />
          
          {/* Stats Section */}
          <motion.section 
            ref={elementRef}
            className="section-padding gradient-bg text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container-width">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    className="glass-effect p-6 rounded-2xl text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-blue-100">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Services Preview */}
          <section className="section-padding bg-white">
            <div className="container-width">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Professional wood framing solutions for all your construction needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="card group p-6"
                  >
                    <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Suspense>
    </ErrorBoundary>
  );
}
