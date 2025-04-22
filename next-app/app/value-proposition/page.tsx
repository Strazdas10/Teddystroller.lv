import Image from "next/image";

export default function ValueProposition() {
  return (
    <>
      {/* Hero Section - Same as front page */}
      <section id="hero" className="relative min-h-screen">
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
              Our Value Proposition
            </h1>
            <p className="text-xl text-[#f9d6a4] mb-8">
              Discover what makes Teddy Stroller the perfect choice for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Teddy Stroller
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-4">
                Safety First
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Our strollers are designed with the highest safety standards, ensuring your child's protection at all times.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-4">
                Durability
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Built to last with premium materials that withstand daily use and all weather conditions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-4">
                Customizable
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Adaptable features that grow with your child and fit your lifestyle needs.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Commitment to Quality
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  At Teddy Stroller, we believe that every family deserves the best. That's why we're committed to creating strollers that combine safety, comfort, and style.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team of experts works tirelessly to ensure that each stroller meets our rigorous standards before it reaches your home. We stand behind our products with confidence, offering comprehensive warranties and dedicated customer support.
                </p>
              </div>
              <div className="md:w-1/2 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src="/images/about/IMG_9634.jpeg"
                    alt="Teddy Stroller Quality"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Teddy Stroller Difference?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied families who have chosen Teddy Stroller for their precious ones.
          </p>
          <a
            href="/"
            className="inline-block bg-white text-blue-600 font-medium py-3 px-10 rounded-md hover:bg-gray-100 transition-all duration-300 text-lg"
          >
            Explore Our Collection
          </a>
        </div>
      </section>
    </>
  );
}
