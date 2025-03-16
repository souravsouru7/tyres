import EventsSection from '../components/EventsSection';
import { Metadata } from 'next';
import Layout from '../components/Layout';

export const metadata = {
  title: 'Events & News | Desert Tires',
  description: 'Stay updated with the latest events, races, and news from Desert Tires. Join us for exciting off-road adventures and industry expos.',
};

export default function EventsPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gray-900 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/tire-pattern.png')] bg-repeat opacity-5"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Events & <span className="text-yellow-400">News</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                Stay connected with the latest happenings in the off-road community and join us for exclusive events designed for enthusiasts and professionals.
              </p>
            </div>
          </div>
          
          {/* Decorative bottom curve */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto fill-white">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        {/* Events Section (imported component) */}
        <EventsSection />
        
        {/* Latest News Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="px-4 py-1 bg-yellow-500 text-gray-900 text-sm font-bold rounded-full inline-block mb-3">
                STAY INFORMED
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
                Latest <span className="text-yellow-500">News</span>
              </h2>
              <div className="h-1 w-20 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Keep up with the latest developments in the off-road industry and updates from Desert Tires
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* News Card 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute inset-0 bg-cover bg-center" 
                       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf')" }}>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500 text-xs font-bold text-gray-900 rounded-full">
                    PRODUCT LAUNCH
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">New All-Terrain Tire Series Announced</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Desert Tires unveils its latest innovation in all-terrain technology, designed for extreme conditions.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">March 15, 2025</span>
                    <button className="text-yellow-500 font-medium text-sm hover:text-yellow-600 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
              
              {/* News Card 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute inset-0 bg-cover bg-center" 
                       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7')" }}>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-xs font-bold text-white rounded-full">
                    PARTNERSHIP
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Desert Tires Partners with Racing Team</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Exciting new partnership announced with the champion off-road racing team for the upcoming season.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">February 28, 2025</span>
                    <button className="text-yellow-500 font-medium text-sm hover:text-yellow-600 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
              
              {/* News Card 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gray-300 relative">
                  <div className="absolute inset-0 bg-cover bg-center" 
                       style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582559240473-7303f8de0c25')" }}>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-xs font-bold text-white rounded-full">
                    SUSTAINABILITY
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">Eco-Friendly Manufacturing Initiative</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Desert Tires commits to reducing carbon footprint with new sustainable manufacturing processes.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">January 10, 2025</span>
                    <button className="text-yellow-500 font-medium text-sm hover:text-yellow-600 transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold transition-colors shadow-md hover:shadow-lg">
                View All News
              </button>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gray-900 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay Updated with Our Newsletter
                </h2>
                <p className="text-gray-300">
                  Subscribe to receive the latest news, event announcements, and exclusive offers
                </p>
              </div>
              
              <form className="space-y-4 md:space-y-0 md:flex md:gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full md:flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-lg font-bold transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-400 mt-4 text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from Desert Tires.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
