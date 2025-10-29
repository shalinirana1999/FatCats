import { Container } from "@mui/material";
import MainLayout from "../layout/MainLayout";

const Terms = () => {
  return (
    <MainLayout>
      <Container className="terms">
        <div className="terms-left">
          <h2>Table of contents</h2>
          <p>
            <a href="#aboutFatCats">1. About FatCats</a>
          </p>
          <p>
            <a href="#eligibility">2. Eligibility</a>
          </p>
          <p>
            <a href="#services">3. Services</a>
          </p>
          <p>
            <a href="#paymentsRefunds">4. Payments and Refunds</a>
          </p>
          <p>
            <a href="#userAccounts">5. User Accounts</a>
          </p>
          <p>
            <a href="#disclaimerLiability">6. Disclaimer of Liability</a>
          </p>
          <p>
            <a href="#intellectualProperty">7. Intellectual Property</a>
          </p>
          <p>
            <a href="#thirdPartyLinks">8. Third-Party Links</a>
          </p>
          <p>
            <a href="#privacy">9. Privacy</a>
          </p>
          <p>
            <a href="#termination">10. Termination</a>
          </p>
          <p>
            <a href="#changesTerms">11. Changes to Terms</a>
          </p>
          <p>
            <a href="#contactUS">12. Contact Us</a>
          </p>
        </div>
        <div className="terms-right">
          <h2>Terms and Conditions</h2>
          <p>
            Welcome to FatCats (“we,” “our,” “us”). By accessing or using our
            website [insert website URL] (“Site”) or any services we provide,
            you (“you,” “your,” or “user”) agree to comply with and be bound by
            these Terms and Conditions (“Terms”). Please read them carefully
            before using our services.
          </p>
          <h3 id="aboutFatCats">1. About FatCats</h3>
          <p>
            FatCats is a financial advisory platform that provides educational
            content, personalized financial consultations, and related services
            designed to help individuals make informed financial decisions.
            While we strive to offer accurate and reliable information, our
            services do not constitute legal, tax, or investment advice.
          </p>
          <h3 id="eligibility">2. Eligibility</h3>
          <p>By using FatCats, you confirm that:</p>
          <ul>
            <li>You are at least 18 years old.</li>
            <li>
              You have the legal capacity to enter into binding agreements.
            </li>
            <li>
              You will use the website only for lawful purposes and in
              compliance with these Terms.
            </li>
          </ul>
          <h3 id="services">3. Services</h3>
          <p>We provide:</p>
          <ul>
            <li>Personalized financial consultation and planning.</li>
            <li>
              Educational articles, videos, and tools related to personal
              finance and investments.
            </li>
            <li>Optional premium services or paid consultations.</li>
          </ul>
          <p>
            All information provided is for informational purposes only. Final
            financial decisions should always be made at your discretion or in
            consultation with a licensed professional.
          </p>
          <h3 id="paymentsRefunds">4. Payments and Refunds</h3>
          <ul>
            <li>
              Payments for consultations or premium services are due at the time
              of booking or purchase.
            </li>
            <li>Fees are clearly stated on our Site before checkout.</li>
            <li>
              Refunds (if applicable) are processed according to our Refund
              Policy, available on the Site.
            </li>
            <li>
              We use secure third-party payment processors; FatCats does not
              store your payment details.
            </li>
          </ul>
          <h3 id="userAccounts">5. User Accounts</h3>
          <p>
            To access certain features, you may need to create an account. You
            agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information.</li>
            <li>Keep your login credentials confidential.</li>
            <li>
              Notify us immediately of any unauthorized use of your account.
            </li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these Terms.
          </p>
          <h3 id="disclaimerLiability">6. Disclaimer of Liability</h3>
          <p>
            While we strive to provide accurate and up-to-date information,
            FatCats makes no guarantees regarding the accuracy, completeness, or
            reliability of any information provided.
            <br />
            All financial decisions are made at your own risk. FatCats and its
            advisors shall not be liable for any direct, indirect, or
            consequential losses resulting from your reliance on our services or
            content.
          </p>
          <h3 id="intellectualProperty">7. Intellectual Property</h3>
          <p>
            All content on FatCats, including logos, graphics, text, and tools,
            is owned or licensed by FatCats and protected under intellectual
            property laws. You may not copy, distribute, or reproduce any
            material without written permission.
          </p>
          <h3 id="thirdPartyLinks">8. Third-Party Links</h3>
          <p>
            Our Site may include links to third-party websites or services.
            FatCats is not responsible for the content, accuracy, or privacy
            practices of these external sites.
          </p>
          <h3 id="privacy">9. Privacy</h3>
          <p>
            Your use of FatCats is also governed by our Privacy Policy, which
            explains how we collect, use, and protect your information.
          </p>
          <h3 id="termination">10. Termination</h3>
          <p>
            We reserve the right to suspend or terminate your access to FatCats
            at any time, without notice, for conduct that we believe violates
            these Terms or is harmful to our platform or users.
          </p>
          <h3 id="changesTerms">11. Changes to Terms</h3>
          <p>
            FatCats may modify these Terms at any time. Updates will be posted
            on this page with a revised “Last Updated” date. Continued use of
            our services after changes means you accept the revised Terms.
          </p>
          <h3 id="contactUS">12. Contact Us</h3>
          <p>If you have questions about these Terms, please contact us at:</p>
          <p>📧 [insert your business email]</p>
          <p>🌐 [insert website URL]</p>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Terms;
