import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">CryptoBazaar</h1>
            <nav className="hidden md:flex space-x-6">
              <Link href="/about-us" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">About</Link>
              <Link href="/contact-us" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="text-blue-600">CryptoBazaar</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Your trusted platform for cryptocurrency trading and digital asset exchange. 
            Secure, reliable, and user-friendly crypto marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Start Trading
            </button>
            <Link href="/about-us" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium">
              Learn More
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Secure Trading</h3>
            <p className="text-gray-600 dark:text-gray-300">Industry-leading security measures to protect your assets and data.</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Fast Transactions</h3>
            <p className="text-gray-600 dark:text-gray-300">Lightning-fast processing for all your cryptocurrency transactions.</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">User Friendly</h3>
            <p className="text-gray-600 dark:text-gray-300">Intuitive interface designed for both beginners and professionals.</p>
          </div>
        </div>

        {/* Legal Pages Quick Access */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
            Important Information
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            <Link href="/terms-and-conditions" className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-lg mb-2">📜</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Terms & Conditions</div>
            </Link>
            
            <Link href="/privacy-policy" className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-lg mb-2">🔐</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Privacy Policy</div>
            </Link>
            
            <Link href="/refund-policy" className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-lg mb-2">💰</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Refund Policy</div>
            </Link>
            
            <Link href="/about-us" className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-lg mb-2">ℹ️</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">About Us</div>
            </Link>
            
            <Link href="/contact-us" className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-lg mb-2">📞</div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">Contact Us</div>
            </Link>
          </div>
        </div>

        {/* Payment Gateway Notice */}
        <div className="mt-16 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-2xl">✅</span>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100">
                PayU Payment Gateway Ready
              </h3>
              <p className="mt-2 text-blue-700 dark:text-blue-200">
                All required pages for PayU payment gateway verification have been implemented:
                Terms & Conditions, Privacy Policy, Refund Policy, About Us, and Contact Us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
