import React from 'react';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the software development services
        provided by [Your Company Name] (&quot;Company&quot;, &quot;we&quot;, or &quot;us&quot;).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing or using our services, you agree to be bound by these Terms. If you do not agree, you may not use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Services</h2>
      <p className="mb-4">
        We provide custom software development, consulting, support, and maintenance services as agreed upon in the project contract.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Client Responsibilities</h2>
      <p className="mb-4">
        The client agrees to provide all necessary information, access, and cooperation required for project execution in a timely manner.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Payment Terms</h2>
      <p className="mb-4">
        Payments must be made as per the milestones outlined in the project proposal. Late payments may incur interest or service suspension.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
      <p className="mb-4">
        Unless otherwise agreed, the client owns all rights to the deliverables. The Company retains the right to use non-confidential elements for portfolio purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Confidentiality</h2>
      <p className="mb-4">
        Both parties agree to maintain confidentiality of all non-public business or technical information shared during the engagement.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for indirect, incidental, or consequential damages resulting from the use or inability to use the developed software.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Termination</h2>
      <p className="mb-4">
        Either party may terminate the agreement with prior notice. Upon termination, the client shall pay for all work completed to date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction].
      </p>

      <p className="mt-8">Last Updated: June 23, 2025</p>
    </div>
  );
};

export default TermsPage;
