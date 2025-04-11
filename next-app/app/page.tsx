import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/IMG_9627.jpeg"
            alt="Teddy Stroller Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
        </div>
        <div className="relative z-10 h-full w-full flex items-end">
          <div className="p-8 md:p-20 pb-20 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#f9d6a4] mb-4">
              Welcome to Teddy Stroller
            </h1>
            <p className="text-xl text-[#f9d6a4] mb-8">
              Your vision, our expertise. Let's create something amazing together.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#f9d6a4] text-gray-900 font-medium py-3 px-10 rounded-md hover:opacity-90 transition-custom text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We are a passionate team dedicated to delivering high-quality solutions that meet your needs and exceed your expectations.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With years of experience in the industry, we have the knowledge and skills to bring your ideas to life.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">About Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Web Design
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Beautiful, responsive websites tailored to your brand.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Custom web applications built with the latest technologies.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                SEO
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimize your online presence and reach more customers.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Consulting
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert advice to help your business grow online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Contact Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <form className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
