import React from 'react';
import Head from 'next/head';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto p-4 font-circular">
      <Head>
        <title>Fournili - Privacy Policy</title>
      </Head>
      <h1 className="text-3xl font-bold text-center mb-6">Fournili - Privacy Policy</h1>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Preamble</h2>
        <p>This Privacy Policy governs the collection, use, and protection of personal data by Fournili and is in accordance with the relevant laws and regulations of Algeria:</p>
        <p>Algeria: Considering Law 18-07 of June 10, 2018, concerning the protection of individuals with regard to the processing of personal data.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definition and Nature of Personal Data</h2>
        <p>During your use of the Fournili website and/or applications, we may collect personal data about you. "Personal data" refers to any information that can identify an individual, such as your name, address, email address, phone number, date of birth, transaction details, and any other information you choose to provide.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Purpose of This Policy</h2>
        <p>This policy is intended to inform you about how we collect, use, and protect your personal data, in strict compliance with your rights and according to Algerian law.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Identity of the Data Controller</h2>
        <p>The entity responsible for collecting and processing your personal data is:</p>
        <p>Algeria:</p>
        <p>Fournili Corporation</p>
        <p>Email Address: support@fournili.co</p>
        <p>Customer Support: +213 558 501 857</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Purpose of Collecting Personal Data</h2>
        <p>Your personal data is collected to fulfill one or more of the following purposes:</p>
        <ul className="list-disc pl-6">
          <li>Manage your access to and use of services available on the Fournili website and applications.</li>
          <li>Execute customer management operations, including contracts, orders, deliveries, invoices, loyalty programs, and customer relationship management.</li>
          <li>Maintain a record of registered members.</li>
          <li>Send newsletters, solicitations, and promotional messages, with the option to opt-out.</li>
          <li>Generate statistics on the use of our services.</li>
          <li>Manage customer reviews of products, services, or content.</li>
          <li>Handle unpaid balances and potential disputes related to the use of our services.</li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Recipients of Collected Data</h2>
        <p>Your personal data may be accessed by Fournili's staff and subcontractors responsible for processing the data for the purposes mentioned above. Public authorities may also be recipients of your data, exclusively to meet our legal obligations.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Transfer of Personal Data</h2>
        <p>Your personal data may be transferred, free of charge or for a fee, to third parties for the purposes mentioned in the previous section.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Retention Period of Personal Data</h2>
        <ul className="list-disc pl-6">
          <li>Customer and Prospect Management Data: Your data will not be retained longer than necessary for managing our business relationship with you or for the execution of our contract. Data required to establish proof of a right or contract will be retained as long as necessary to comply with legal obligations.</li>
          <li>Audience Measurement Statistics: Information used to identify users for tracking or monitoring will not be retained beyond the period necessary for executing the contract and achieving the purposes stated in this policy.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Security</h2>
        <p>We implement appropriate technical and organizational measures to ensure the security, integrity, and confidentiality of your personal data, and to protect it from unauthorized access, alteration, or destruction.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Cookies</h2>
        <p>Cookies are text files stored in your browser when you visit our website. They help us improve your browsing experience by remembering your preferences and past actions.</p>
        <p>You can configure your browser to refuse cookies, though this may affect the website's functionality.</p>
        <ul className="list-disc pl-6">
          <li>Technical Cookies: Used to facilitate navigation and improve functionality. These cookies are stored for up to six months.</li>
          <li>Advertising Cookies: Currently, we do not use advertising cookies. If we decide to use them in the future, you will be informed and given the option to disable them.</li>
          <li>Analytics Cookies: We may use tools like Google Analytics to measure site visits and user activity. The retention period for these cookies is specified in our cookie policy.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">11. Consent</h2>
        <p>By providing your personal data, you consent to its collection and use in accordance with this policy and applicable laws. You also consent to receive notifications, alerts, SMS, and emails from Fournili. If you no longer wish to receive such communications, you can unsubscribe by contacting us at support@fournili.co.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">12. Right to File a Complaint</h2>
        <p>You have the right to file a complaint with the regulatory authority for any violations related to the processing of your personal data, as per Algerian law.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">13. Access to Your Personal Data</h2>
        <p>You have the right to access, rectify, or delete your personal data by sending a request to:</p>
        <p>Algeria:</p>
        <p>Email: support@fournili.co</p>
        <p>For legitimate reasons, you may also object to the processing of your data.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">14. Modifications</h2>
        <p>Fournili reserves the right to modify this policy. Any changes will be effective upon publication on our website or applications. Continued use of our services after changes are made will constitute your acceptance of the new policy. If you do not accept the new terms, you should cease using our services.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">15. Effective Date</h2>
        <p>This policy is effective as of the date of its publication on the Fournili website and/or application.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;