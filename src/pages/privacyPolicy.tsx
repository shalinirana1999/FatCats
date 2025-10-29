import { Container } from "@mui/material";
import MainLayout from "../layout/MainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <Container className="terms">
        <div className="terms-left">
          <h2>Table of contents</h2>
          <p>
            <a href="#informationWeCollect">1. Information We Collect</a>
          </p>
          <p>
            <a href="#howWeUseYourInformation">
              2. How We Use Your Information
            </a>
          </p>
          <p>
            <a href="#cookiesTrackingTechnologies">
              3. Cookies and Tracking Technologies
            </a>
          </p>
          <p>
            <a href="#sharingYourInformation">4. Sharing Your Information</a>
          </p>
          <p>
            <a href="#dataSecurity">5. Data Security</a>
          </p>
          <p>
            <a href="#yourRights">6. Your Rights</a>
          </p>
          <p>
            <a href="#dataRetention">7. Data Retention</a>
          </p>
          <p>
            <a href="#childrensPrivacy">8. Children's Privacy</a>
          </p>
          <p>
            <a href="#externalLinks">9. External Links</a>
          </p>
          <p>
            <a href="#changesThisPolicy">10. Changes to This Policy</a>
          </p>
          <p>
            <a href="#contactUS">11. Contact Us</a>
          </p>
        </div>
        <div className="terms-right">
          <h2>Privacy Policy</h2>
          <p>
            Welcome to FatCats (“we,” “our,” “us”). Your privacy is important to
            us. This Privacy Policy explains how we collect, use, disclose, and
            protect your information when you visit our website [insert website
            URL] (“Site”) or use any of our financial advisory services.
          </p>
          <p>
            By using our Site or services, you agree to this Privacy Policy. If
            you do not agree, please discontinue use of our Site.
          </p>
          <h3 id="informationWeCollect">1. Information We Collect</h3>
          <p>We collect the following types of information:</p>
          <p>
            <strong>a. Personal Information</strong>
            <br />
            When you sign up, book consultations, or contact us, we may collect:
          </p>
          <ul>
            <li>Your full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>
              Payment details (processed through a secure third-party gateway)
            </li>
            <li>
              Financial information you voluntarily provide during consultations
            </li>
          </ul>
          <p>
            <strong>b. Non-Personal Information</strong>
            <br />
            When you browse our site, we may collect:
          </p>
          <ul>
            <li>IP address </li>
            <li>Browser type and version </li>
            <li>Device information </li>
            <li>Pages visited, time spent, and referral URLs </li>
            <li>Cookies or similar tracking data</li>
          </ul>
          <h3 id="howWeUseYourInformation">2. How We Use Your Information</h3>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and manage our financial advisory services</li>
            <li>Process payments and send receipts</li>
            <li>
              Communicate with you (emails, confirmations, updates, or customer
              support)
            </li>
            <li>Improve our website’s performance and user experience</li>
            <li>Comply with legal or regulatory obligations</li>
          </ul>
          <p>We do not sell or rent your personal data to any third parties.</p>
          <h3 id="cookiesTrackingTechnologies">
            3. Cookies and Tracking Technologies
          </h3>
          <p>We use cookies to:</p>
          <ul>
            <li>Enhance website functionality</li>
            <li>Remember user preferences</li>
            <li>Analyze traffic and usage patterns</li>
          </ul>
          <p>
            You can disable cookies through your browser settings, but some
            features may not function properly without them.
          </p>
          <h3 id="sharingYourInformation">4. Sharing Your Information</h3>
          <p>We may share limited data with:</p>
          <ul>
            <li>Payment processors (for secure transactions)</li>
            <li>
              Analytics providers (like Google Analytics, for improving our
              site)
            </li>
            <li>
              Service providers who assist in website operation and
              communication
            </li>
          </ul>
          <p>
            These third parties are obligated to keep your information
            confidential and use it only for the purpose of providing their
            services to FatCats.
          </p>
          <p>
            We may also share information if required by law or to protect our
            legal rights.
          </p>
          <h3 id="dataSecurity">5. Data Security</h3>
          <p>
            We use industry-standard security measures to protect your
            information from unauthorized access, alteration, or disclosure.
            <br />
            However, no online transmission or storage method is 100% secure. By
            using our site, you acknowledge this risk.
          </p>
          <h3 id="yourRights">6. Your Rights</h3>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access, update, or delete your personal data</li>
            <li>Withdraw consent to marketing communications</li>
            <li>Request details of the data we hold about you</li>
          </ul>
          <p>
            You can exercise these rights by contacting us at [insert your email
            address].
          </p>
          <h3 id="dataRetention">7. Data Retention</h3>
          <p>We retain personal data only as long as necessary to:</p>
          <ul>
            <li>Provide our services</li>
            <li>Comply with legal, tax, or regulatory obligations</li>
            <li>Resolve disputes or enforce agreements</li>
          </ul>
          <p>After this period, data is securely deleted or anonymized.</p>
          <h3 id="childrensPrivacy">8. Children's Privacy</h3>
          <p>
            Our website and services are intended for users aged 18 and older.
            We do not knowingly collect information from minors. If we become
            aware that we have collected personal data from someone under 18, we
            will delete it immediately.
          </p>
          <h3 id="externalLinks">9. External Links</h3>
          <p>
            Our website may contain links to external sites not operated by
            FatCats. We are not responsible for the privacy practices or content
            of these third-party websites. Please review their privacy policies
            when visiting those sites.
          </p>
          <h3 id="changesThisPolicy">10. Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            Updated” date at the top will indicate the most recent revision.
            Continued use of our website after changes signifies your acceptance
            of the updated policy.
          </p>
          <h3 id="contactUs">11. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us:{" "}
          </p>
          <p>📧 [insert your business email]</p>
          <p>🌐 [insert your website URL]</p>
        </div>
      </Container>
    </MainLayout>
  );
};

export default PrivacyPolicy;
