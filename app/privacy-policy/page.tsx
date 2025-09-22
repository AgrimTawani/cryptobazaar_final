import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
      
      <div className="prose max-w-none text-gray-700 dark:text-gray-300">
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm"><strong>Effective Date:</strong> September 23, 2025</p>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. Information We Collect</h2>
        <p className="mb-4">We collect information you provide directly to us, such as when you create an account, make a transaction, or contact us for support.</p>
        
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">Personal Information:</h3>
        <ul className="list-disc ml-6 mb-6">
          <li>Name and contact information (email, phone number)</li>
          <li>Government-issued ID for verification purposes</li>
          <li>Financial information for transactions</li>
          <li>Device and usage information</li>
          <li>IP address and browser information</li>
          <li>Transaction history and preferences</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Provide and maintain our services</li>
          <li>Process transactions and send notifications</li>
          <li>Verify your identity and prevent fraud</li>
          <li>Comply with legal obligations and regulatory requirements</li>
          <li>Improve our services and user experience</li>
          <li>Communicate with you about updates and promotions</li>
          <li>Provide customer support</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">3. Information Sharing</h2>
        <p className="mb-4">We do not sell or rent your personal information. We may share information:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>With your explicit consent</li>
          <li>For legal compliance and regulatory requirements</li>
          <li>With trusted service providers under strict confidentiality agreements</li>
          <li>In case of business transfer or merger</li>
          <li>To protect our rights and prevent fraud</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">4. Data Security</h2>
        <p className="mb-4">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-2">Our Security Measures Include:</h4>
          <ul className="list-disc ml-6 text-sm">
            <li>End-to-end encryption</li>
            <li>Secure socket layer (SSL) technology</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication</li>
            <li>Data backup and recovery systems</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">5. Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Access your personal information</li>
          <li>Update or correct your data</li>
          <li>Delete your account and personal information</li>
          <li>Opt-out of marketing communications</li>
          <li>Request data portability</li>
          <li>Lodge a complaint with supervisory authorities</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">6. Cookies and Tracking</h2>
        <p className="mb-4">We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can manage your cookie preferences through your browser settings.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">7. Data Retention</h2>
        <p className="mb-6">We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">8. Changes to This Policy</h2>
        <p className="mb-6">We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the effective date.</p>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">9. Contact Us</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <p className="mb-2">If you have any questions about this privacy policy, please contact us:</p>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@cryptobazaar.com" className="text-blue-600 hover:text-blue-800">privacy@cryptobazaar.com</a></p>
          <p className="mb-2"><strong>Data Protection Officer:</strong> <a href="mailto:dpo@cryptobazaar.com" className="text-blue-600 hover:text-blue-800">dpo@cryptobazaar.com</a></p>
          <p><strong>Address:</strong> 123 Crypto Street, Digital City, DC 12345</p>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <p className="text-sm"><strong>Last Updated:</strong> September 23, 2025</p>
          <p className="text-sm"><strong>Version:</strong> 1.0</p>
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
