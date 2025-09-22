import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Refund Policy</h1>
      
      <div className="prose max-w-none text-gray-700 dark:text-gray-300">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. General Policy</h2>
        <p className="mb-4">Due to the nature of cryptocurrency transactions, all sales are generally final and non-refundable.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">2. Exceptional Circumstances</h2>
        <p className="mb-4">Refunds may be considered in the following cases:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Technical errors resulting in duplicate charges</li>
          <li>Service unavailability for extended periods</li>
          <li>Unauthorized transactions (subject to investigation)</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">3. Refund Process</h2>
        <p className="mb-4">To request a refund, contact our support team within 24 hours of the transaction with:</p>
        <ul className="list-disc ml-6 mb-4">
          <li>Transaction ID</li>
          <li>Detailed description of the issue</li>
          <li>Supporting documentation</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">4. Processing Time</h2>
        <p className="mb-4">Approved refunds will be processed within 5-10 business days to the original payment method.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">5. Contact Information</h2>
        <p className="mb-4">For refund requests, email us at <a href="mailto:support@cryptobazaar.com" className="text-blue-600 hover:text-blue-800">support@cryptobazaar.com</a></p>
        
        <div className="mt-8 p-4 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
          <p className="text-sm font-semibold">Important Note:</p>
          <p className="text-sm">Cryptocurrency transactions are irreversible by nature. Please ensure all transaction details are correct before proceeding.</p>
        </div>
        
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
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
