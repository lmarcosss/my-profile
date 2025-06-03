import { ThemeProvider } from './contexts/theme-provider'
import { motion } from 'framer-motion'
import {
  CodeIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons'
import {
  ArrowRightIcon,
  BlocksIcon,
  CloudIcon,
  MailIcon,
} from 'lucide-react'
import './App.css'
import { AnimatedCard } from './components/animated-card'

const urls = [
  {
    url: 'https://github.com/lmarcosss',
    icon: GitHubLogoIcon,
    hover: 'hover:text-gray-400',
    name: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/leo-marcos',
    icon: LinkedInLogoIcon,
    hover: 'hover:text-blue-400',
    name: 'LinkedIn',
  },
  {
    url: 'https://www.instagram.com/leomarcoss',
    icon: InstagramLogoIcon,
    hover: 'hover:text-red-400',
    name: 'Instagram',
  },
  {
    url: 'mailto: marcosleonardosss@gmail.com',
    icon: MailIcon,
    hover: 'hover:text-cyan-400',
    name: 'Email',
  },
]

const expertises = [
  {
    title: 'Full-Stack Development',
    description:
      'Creating scalable web applications with modern technologies. Expert in React, React Native, Node.js, and SQL/NoSQL databases. Focus on clean architecture and performance optimization.',
    icon: CodeIcon,
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Implementing cloud-native solutions using GCP and Azure. Expertise in containerization, CI/CD pipelines, infrastructure as code, and automated deployment strategies.',
    icon: CloudIcon,
  },
  {
    title: 'Solution Architecture',
    description:
      'Architecting robust software solutions with focus on scalability, maintainability, and best practices. Experience in microservices, distributed systems, and technical leadership.',
    icon: BlocksIcon,
  },
]

const articles = [
  // {
  //   title: 'Mastering Tailwind CSS for Modern Web Design',
  //   description:
  //     'A deep dive into the utility-first CSS framework and how it can streamline your development workflow.',
  //   image:
  //     'https://lh3.googleusercontent.com/aida-public/AB6AXuDhDzEuHK4pL7wR90trkU3IJd7n4SitGI8o5Z3qKTF3gDg1zwGUF6yHfKX734YzLMF1uxQbOXPRgKBlpagfIA_Qkd0YlO3FPAOsP6TiAZtl98FqFTn2EcwNRLjbMXxe_IMtOV3OtJdZGRTAz9W01wdbHhkk4dZkOqHy4Z4ANjGknQlsGWWxCMWR8NbvF3eKn6mQZwBfaL4Pt3YCcpPpSLeOwu4AID1hmPpzWEtcUc3NLzMwzJbQC-8jBLS7DRPOeuyvvVFHreYD0t4',
  //   readTime: '12 min read',
  //   type: 'Web Development',
  // },
  // {
  //   title: 'Building Scalable APIs with Node.js and Express',
  //   description:
  //     'Explore best practices for creating robust and efficient backend services that can handle growing user demand.',
  //   image:
  //     'https://lh3.googleusercontent.com/aida-public/AB6AXuCvemjF9Ym6PPxk1KQI4y5iJAzl-D2M6f3ju8eOf-NTOzFb12ycK0fORHKuqCsuHrcHipBIghPD4FShDmgsKKiBBj08dLTnr12Hj4An4wj7V8g6jWFj2wOFRfVlZv4Bko6XuNCHsxLgd3GWhoRmkQHpXXDo3ZjzINdJwZIeLYwHskJrFQBDVGBx45hDEb6Bqu_aw-WRyT1kQ2wfyeGsdgMenB-Wt81hhncWLnx6pzfKhKhjn2sx4gpSNYfc1x00lX-CBNDyY2xZZUY',
  //   readTime: '8 min read',
  //   type: 'Backend',
  // },
  // {
  //   title: 'Introduction to CI/CD for Modern Software Teams',
  //   description:
  //     'Understand the fundamentals of Continuous Integration and Continuous Deployment and how they improve software quality.',
  //   image:
  //     'https://lh3.googleusercontent.com/aida-public/AB6AXuDRuiwsnNc8swKomO756gQfcawCUFLuO1HfluiThkSut5btWfw_PJ6vT_CcepMEN_aH_wjd3MOgQEiJ5aeeqXIIitWuAxlSGspT4WC49ZeA_CLRxCP6EyPQDXJOrSKug3uF6b7fDv8gHBAGG7LwTDIeu9qrn_rDl4KzmDmebzIJLfh8q9OMWt9U66H3BDeFfR396R9t11k6krUwDnvcMqkH9GXldNa4XV4WPv6bo3OfX4hyJE6zktYaw6QbFrOBfEWGqp0JntHaC8w',
  //   readTime: '15 min read',
  //   type: 'DevOps',
  // },
] as []

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen overflow-y-auto flex flex-col justify-between">
        <header className="pt-12 md:pt-20 pb-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mr-0 mb-8 md:mr-8 md:mb-0">
                <AnimatedCard>
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                    }}
                    className="w-48 h-48 bg-[url(/src/assets/profile-image.jpeg)] bg-center bg-cover
                      rounded-full border-4 dark:border-black border-white ring-emerald-500
                      ring-4"
                    style={{
                      imageRendering: 'crisp-edges',
                    }}
                  />
                </AnimatedCard>
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Hi, I'm Leo. I'm a{' '}
                  <span className="text-emerald-500">
                    Software Developer.
                  </span>
                </h1>
                <p className="text-base md:text-lg text-gray-400 mb-6 max-w-xl">
                  I specialize in building exceptional digital
                  experiences. Continuous learning and agile
                  problem-solving are my approaches. I'm always open
                  to learning new technologies and eager to
                  collaborate on innovative solutions. Connect with
                  me, and together we will explore the world of
                  technology!
                </p>
                <div
                  className="flex min-w-48 gap-4 pt-0 sm:pt-4 md:pt- items-center justify-center
                    sm:justify-start"
                >
                  {urls.map(({ url, icon: Icon, hover, name }) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      data-umami-event={`${name} link clicked`}
                    >
                      <Icon className={`size-7 ${hover}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          className="py-8 mx-0 md:mx-12 md:py-12 flex-1"
          id="expertise"
        >
          <div className="border-t border-gray-800 mb-12 mx-6 md:mx-0" />

          <h2 className="text-3xl font-bold mb-12 text-center md:text-left text-emerald-500">
            My Expertise
          </h2>
          <div className="container px-6 max-w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {expertises.map(
                ({ title, description, icon: Icon }, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center text-center md:text-justify
                      flex-1 bg-neutral-900 p-6 rounded-lg shadow-lg transition-transform"
                  >
                    <span className="material-icons text-emerald-500 text-4xl mb-4">
                      <Icon className="size-8" />
                    </span>
                    <h3 className="text-xl font-semibold mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        {articles.length > 0 && (
          <section
            className="py-8 px-0 md:px-12 md:py-12"
            id="articles"
          >
            <div className="border-t border-gray-800 mb-12 mx-6 md:mx-0" />

            <h2 className="text-3xl font-bold mb-12 text-center md:text-left text-emerald-500">
              Recent Articles
            </h2>
            <div className="container px-6 max-w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(
                  (
                    { title, description, image, readTime, type },
                    index
                  ) => (
                    <div
                      key={index}
                      className="bg-neutral-900 rounded-lg overflow-hidden shadow-xl flex flex-col"
                    >
                      <img
                        alt={title}
                        className="w-full h-48 object-cover"
                        src={image}
                      />
                      <div className="p-6 flex-grow flex flex-col">
                        <p className="text-xs text-emerald-400 uppercase font-semibold mb-1">
                          {type} • {readTime}
                        </p>
                        <h3 className="text-xl font-semibold mb-3 text-white">
                          {title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 flex-grow">
                          {description}
                        </p>
                        <a
                          className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex
                            items-center self-start"
                          href="#"
                        >
                          Read More{' '}
                          <ArrowRightIcon className="ml-1 size-4" />
                        </a>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}
        <footer className="px-0 md:px-12 mt-8">
          <div
            className="border-t border-gray-800 mx-6 py-8 md:mx-0 flex items-center
              justify-center"
          >
            <span className="container mx-auto px-6 text-center text-gray-500 text-sm">
              © 2024 Leonardo Marcos. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
