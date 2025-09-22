import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Us</h1>
      
      <div className="prose max-w-none text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Mission</h2>
        <p className="mb-6">CryptoBazaar is dedicated to providing a secure, reliable, and user-friendly platform for cryptocurrency trading and digital asset exchange.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Story</h2>
        <p className="mb-6">Founded in 2024, CryptoBazaar was created to bridge the gap between traditional finance and the emerging world of digital currencies. Our team consists of experienced professionals from finance, technology, and blockchain industries.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Vision</h2>
        <p className="mb-6">We envision a world where digital assets are accessible to everyone, enabling financial freedom and innovation through secure and transparent trading.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Security First</h2>
        <p className="mb-4">Security is our top priority. We implement industry-leading security measures including:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Multi-factor authentication</li>
          <li>Cold storage for digital assets</li>
          <li>Regular security audits</li>
          <li>Compliance with regulatory standards</li>
          <li>Advanced encryption protocols</li>
          <li>24/7 monitoring systems</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Transparency</h3>
            <p className="text-sm">Clear communication and honest practices in all our operations.</p>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm">Continuously improving our platform with cutting-edge technology.</p>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Security</h3>
            <p className="text-sm">Protecting our users&apos; assets and data with the highest standards.</p>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <h3 className="font-semibold mb-2">Support</h3>
            <p className="text-sm">Providing exceptional customer service and user experience.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Our Team</h2>
        <p className="mb-6">Our diverse team brings together expertise in blockchain technology, financial services, cybersecurity, and customer service to deliver the best possible experience for our users.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Information</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@cryptobazaar.com" className="text-blue-600 hover:text-blue-800">info@cryptobazaar.com</a></p>
          <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 Crypto Street, Digital City, DC 12345</p>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-sm"><strong>Company Founded:</strong> 2024</p>
          <p className="text-sm"><strong>Last Updated:</strong> September 23, 2025</p>
        </div>
      </div>
      
      <div className="mt-8">
        <a 
          href="/" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
