import React from 'react';

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Terms & Conditions</h1>
      
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm font-semibold text-blue-900 dark:text-blue-100"><strong>Last Updated:</strong> September 23, 2025</p>
      </div>

      <div className="prose max-w-none text-gray-700 dark:text-gray-300 space-y-6">        <p className="text-lg leading-relaxed">
          Welcome to CryptoBazaar. These Terms &amp; Conditions (&quot;Terms&quot;) govern your access and use of our peer-to-peer (P2P) cryptocurrency exchange platform (&quot;Platform&quot;, &quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By registering or using the Service, you agree to these Terms. If you do not agree, please do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">1. Definitions</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>User / You:</strong> Any person using the Platform.</li>
          <li><strong>Buyer:</strong> User purchasing cryptocurrency.</li>
          <li><strong>Seller:</strong> User selling cryptocurrency.</li>
          <li><strong>Fiat Payment:</strong> Payments in INR via UPI, IMPS, NEFT, or other supported methods.</li>
          <li><strong>Escrow:</strong> Temporary holding of cryptocurrency until a transaction is completed.</li>
          <li><strong>Transaction:</strong> Any trade between a Buyer and Seller facilitated by the Platform.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">2. Eligibility</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>You must be at least 18 years old to use the Service.</li>
          <li>You must comply with all laws applicable to cryptocurrency trading in your jurisdiction.</li>
          <li>You agree to complete KYC (Know Your Customer) verification as required by law and by CryptoBazaar&apos;s policies.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">3. Account & Security</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Users must register an account to access trading features.</li>
          <li>You are responsible for maintaining the confidentiality of your account and all activities under it.</li>
          <li>CryptoBazaar is not liable for unauthorized access resulting from your negligence.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">4. Trading Rules</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>When a Seller creates a sell order, the specified cryptocurrency is locked in escrow until completion.</li>
          <li>The Buyer must pay the Seller within the specified time using approved payment methods.</li>
          <li>Once the Seller confirms receipt of fiat payment, cryptocurrency is released from escrow to the Buyer.</li>
          <li>All completed trades are final and irreversible.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">5. Fees</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>CryptoBazaar may charge transaction or service fees.</li>
          <li>All fees will be displayed before the completion of a transaction.</li>
          <li>Users are responsible for any charges by banks or payment providers.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">6. Compliance (KYC / AML / FIU Registration)</h2>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
          <ul className="list-disc ml-6 space-y-2">
            <li>Users must comply with KYC, Anti-Money Laundering (AML), and Counter-Terrorism Financing (CTF) regulations.</li>
            <li>CryptoBazaar is a registered reporting entity with the Financial Intelligence Unit (FIU-IND), Government of India.</li>
            <li>As per FIU guidelines, suspicious or high-value transactions may be reported to the relevant authorities.</li>
            <li>CryptoBazaar may suspend, restrict, or terminate services for Users failing verification or engaging in suspicious activity.</li>
            <li>We reserve the right to freeze or block transactions if required by FIU-IND, regulators, or law enforcement.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">7. Escrow & Liability</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>CryptoBazaar only acts as a facilitator. It is not a party to the trade beyond providing escrow.</li>
          <li>We are not responsible for delays, fraud, or payment issues between Users.</li>
          <li>Our liability is limited to releasing funds in accordance with Platform rules and applicable law.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">8. Disputes</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>If there is a dispute (e.g., Buyer claims payment made but Seller denies), Users must follow the dispute resolution process provided on the Platform.</li>
          <li>Users must provide transaction proof (payment screenshot, bank statement, etc.).</li>
          <li>CryptoBazaar may, at its discretion, resolve disputes and its decision will be final.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">9. Prohibited Use</h2>
        <p className="mb-2">Users may not:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Use the Platform for illegal or fraudulent activity.</li>
          <li>Violate any laws relating to crypto or financial transactions.</li>
          <li>Use payment accounts not in their own name.</li>
          <li>Mislead, defraud, or impersonate other Users.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">10. Risk Disclosure</h2>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-4">
          <ul className="list-disc ml-6 space-y-2">
            <li>Cryptocurrency prices are volatile and may fluctuate significantly.</li>
            <li>CryptoBazaar does not guarantee profits or protect against losses.</li>
            <li>Users are solely responsible for understanding the risks of crypto trading.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">11. Limitation of Liability</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>To the maximum extent permitted by law, CryptoBazaar is not liable for any indirect, incidental, or consequential damages arising from use of the Service.</li>
          <li>We are not liable for third-party services (banks, UPI, IMPS, etc.).</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">12. Indemnity</h2>
        <p className="mb-4">You agree to indemnify and hold harmless CryptoBazaar, its affiliates, officers, and employees from any claims, liabilities, or expenses resulting from your use of the Platform or violation of these Terms.</p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">13. Intellectual Property</h2>
        <p className="mb-4">All content, trademarks, logos, and software on the Platform are the property of CryptoBazaar. You may not use them without prior written consent.</p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">14. Privacy</h2>
        <p className="mb-4">Your use of the Service is also governed by our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a>, which explains how we collect, use, and protect your personal information.</p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">15. Termination</h2>
        <p className="mb-4">CryptoBazaar may suspend or terminate your account for violations of these Terms, law enforcement requests, or security concerns.</p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">16. Governing Law</h2>
        <p className="mb-4">These Terms are governed by the laws of India. You agree to submit to the exclusive jurisdiction of the courts located in Mumbai, India.</p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">17. Contact Information</h2>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <p className="mb-2">For support or questions:</p>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:agrimtawani139@gmail.com                                                                                          " className="text-blue-600 hover:text-blue-800">support@cryptobazaar.com</a></p>
          <p className="mb-2"><strong>Phone:</strong> +91-8104048639</p>
          <p><strong>Address:</strong> CryptoBazaar Technologies Pvt. Ltd., 123 Crypto Street, Mumbai, Maharashtra 400001, India</p>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 pt-6 mt-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <p className="text-sm font-semibold mb-2">© 2025 CryptoBazaar. All rights reserved.</p>
            <p className="text-sm mb-2">Licensed and regulated cryptocurrency exchange platform.</p>
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">CryptoBazaar is a registered reporting entity with the Financial Intelligence Unit (FIU-IND), Government of India.</p>
          </div>
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
