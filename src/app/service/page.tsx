// ServicesPage.jsx

import Footer from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const services = [
  {
    id: 'solar',
    title: 'Solar Power Nexus',
    description: [
      'Harness the power of the sun with Atvantiq Networks – delivering cutting-edge solar solutions for homes, businesses, and beyond.',
      'Our end-to-end services include design, installation, and optimization, ensuring you get the most out of every ray of sunlight.',
      'From urban rooftops to rural landscapes, we empower communities and industries alike with reliable, cost-effective solar power.',
    ],
    points: [
      'Innovative high-efficiency panels & smart storage',
      'Customized solar systems for homes & businesses',
      'Sustainability and ROI driven approach',
      'Ongoing monitoring & performance optimization',
    ],
    video: '/assets/video/solar-home-video.mp4',
    poster: '/assets/img/solar-home-video.webp',
  },
  {
    id: 'ai',
    title: 'AI Revolution Forge',
    description: [
      'Unlock business intelligence and automation with cutting-edge AI solutions tailored to your industry.',
      'Our machine learning models, NLP engines, and analytics systems are built for impact—from predictive systems to generative innovation.',
    ],
    points: [
      'Custom ML & predictive models',
      'Generative AI for automation & creativity',
      'AI-powered dashboards and analytics',
      'Scalable AI architecture & APIs',
    ],
    image: '/assets/img/services/ai.webp',
  },
  {
    id: 'web',
    title: 'Web Alchemy Studio',
    description: [
      'Turn your online presence into a performance powerhouse. We design and develop web platforms that not only look good—but convert and scale.',
      'Every pixel is purposeful, and every interaction is crafted to leave a lasting impact.',
    ],
    points: [
      'Bold, responsive web design',
      'Performance-optimized development',
      'CMS and headless solutions',
      'Web apps with complex logic and integrations',
    ],
    image: '/assets/img/services/web.webp',
  },
  {
    id: 'mobile',
    title: 'Mobile Maverick Lab',
    description: [
      'From startups to enterprises, we build iOS and Android apps that feel fast, smooth, and are built for real-world scalability.',
      'Our mobile-first approach ensures your product is usable and lovable from the first tap.',
    ],
    points: [
      'Native & cross-platform apps (Flutter, React Native)',
      'Scalable architecture and CI/CD-ready',
      'UX-optimized interactions and flows',
      'App Store & Play Store launch support',
    ],
    image: '/assets/img/services/mobile.webp',
  },
  {
    id: 'uiux',
    title: 'UI/UX Dream Forge',
    description: [
      'Design is the soul of your product. We bring it to life with research-driven design that feels effortless and intuitive.',
      'From wireframes to high-fidelity prototypes, we shape journeys that delight users and meet business goals.',
    ],
    points: [
      'Wireframing & user flows',
      'High-fidelity Figma designs',
      'Design systems and atomic components',
      'Accessibility-first thinking',
    ],
    image: '/assets/img/services/uiux.webp',
  },
  {
    id: 'telecom',
    title: 'Telecom Trailblazer',
    description: [
      'We began in telecom—and we still lead the way. Our telecom engineering and implementation services build the backbone of modern connectivity.',
      'From RF planning to network optimization, we keep your systems running efficiently.',
    ],
    points: [
      'Network design & rollout services',
      'Tower infrastructure deployment',
      'Network optimization & audits',
      'Telecom resource management',
    ],
    image: '/assets/img/services/telecom.webp',
  },
  {
    id: 'talent',
    title: 'Talent Turbocharge',
    description: [
      'Scale your projects without delay. We offer vetted developers, designers, and project managers who integrate with your workflow.',
      'Our augmentation services are flexible, reliable, and result-driven.',
    ],
    points: [
      'Quick onboarding of remote teams',
      'Dedicated resource management',
      'Flexible contract & billing models',
      'Specialists in full-stack, cloud, DevOps & more',
    ],
    image: '/assets/img/services/talent.webp',
  },
  {
    id: 'lighting',
    title: 'Lighting Innovators',
    description: [
      'Illuminate your spaces with intelligent lighting systems designed for energy savings and user comfort.',
      'We combine IoT and sustainable hardware to make every watt count.',
    ],
    points: [
      'Smart lighting systems',
      'Low-energy industrial solutions',
      'Automated sensors & controls',
      'Installation, monitoring & maintenance',
    ],
    image: '/assets/img/services/lighting.webp',
  },
];

const strengths = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#2e5bff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9.75 3a.75.75 0 00-1.5 0v1.25H7.25a.75.75 0 000 1.5H8.25v1.25a.75.75 0 001.5 0V5.75h1a.75.75 0 000-1.5h-1V3zM3.75 10.5A6.75 6.75 0 0117.25 10.5v6.75a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V10.5z" />
      </svg>
    ),
    title: 'Next-Gen Innovations',
    desc: 'We wield the latest tech stacks to ensure your solutions are lightning-fast, secure, and ready for the future.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2e5bff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 16l2-2-2-2M16 8l-2 2 2 2M3 12l3-3 3 3-3 3-3-3zM21 12l-3 3-3-3 3-3 3 3z" />
      </svg>
    ),
    title: 'Flawless Execution',
    desc: 'Our team delivers pristine, scalable code that stands the test of time—built to dominate the digital arena.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2e5bff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Rocket-Fast Delivery',
    desc: 'Speed meets precision—our agile approach ensures your project launches at warp speed without cutting corners.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2e5bff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 12v.01M17.656 6.344a8 8 0 11-11.312 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Unbreakable Security',
    desc: 'Fortify your digital presence with ironclad security measures that shield your business from every angle.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#2e5bff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 1a10 10 0 00-10 10v3a4 4 0 004 4h1v-7H6v-1a6 6 0 1112 0v1h-1v7h1a4 4 0 004-4v-3a10 10 0 00-10-10z" />
</svg>

    ),
    title: 'Visionary Support',
    desc: 'We’re your co-pilots for the long haul, providing stellar support to keep your solutions soaring high.'
  },
];


export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <header className="relative bg-white py-24 text-center overflow-hidden">
  {/* Background shape */}
  <div className="absolute w-[800px] h-[750px] bg-[#fff5f2] rounded-full -top-120 -right-10 z-0"></div>

  {/* Text content */}
  <div className="relative z-10 py-10 pt-15">
    <h1 className="text-5xl font-extrabold text-black mb-3">Our Services</h1>
    <p className="uppercase text-sm font-semibold tracking-widest text-[#ff5443] max-w-2xl mx-auto">
      From clean energy to cutting-edge tech,<br />
      we deliver transformative solutions that scale, optimize, and inspire.
    </p>
  </div>
</header>


      <main className="bg-white text-gray-800">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 px-4 md:px-12 ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              {/* Media */}
              <div className={`w-full lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                {service.video ? (
                  <video
                    className="w-full rounded-2xl shadow-xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={service.poster}
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-2xl shadow-xl"
                  />
                )}
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-extrabold text-[#2e5bff] mb-6 leading-tight">
                  {service.title}
                </h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  {service.description.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <ul className="mt-6 pl-5 space-y-2 text-base text-gray-800 list-disc">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="bg-[#3c3f94] text-white text-center py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to elevate your project?</h2>
            <p className="mb-8 text-lg opacity-90">
              Partner with Atvantiq Networks and experience the synergy of innovation, reliability, and expert execution.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#3c3f94] text-white border-2 border-white px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>
        <section className="bg-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Core Strengths</h2>
          <p className="text-lg text-gray-600 mb-10">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results across every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {strengths.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <img
            src="/core-strengths.png" // Replace with the actual image path
            alt="Core Strengths"
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </section>
      </main>
      <Footer/>
    </>
  );
}
