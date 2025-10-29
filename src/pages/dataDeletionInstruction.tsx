import { Container } from "@mui/material";
import MainLayout from "../layout/MainLayout";

const DataDeletionInstruction = () => {
  return (
    <MainLayout>
      <Container className="terms">
        <div className="terms-left">
          <h2>Table of contents</h2>
          <p>
            <a href="#yourRightToDeletePersonalData">
              1. Your Right to Delete Personal Data
            </a>
          </p>
          <p>
            <a href="#howToSubmitDataDeletionRequest">
              2. How to Submit a Data Deletion Request
            </a>
          </p>
          <p>
            <a href="#whatHappensAfterYourRequest">
              3. What Happens After Your Request
            </a>
          </p>
          <p>
            <a href="#exceptionsDataDeletion">4. Exceptions to Data Deletion</a>
          </p>
          <p>
            <a href="#deletionDataThirdParties">
              5. Deletion of Data from Third Parties
            </a>
          </p>
          <p>
            <a href="#contactUS">6. Contact Us</a>
          </p>
        </div>
        <div className="terms-right">
          <h2>Data Deletion Instructions</h2>
          <p>
            At FatCats, we value your privacy and give you full control over
            your personal data. This page explains how you can request the
            deletion of your data and what happens after such a request.
          </p>
          <h3 id="yourRightToDeletePersonalData">
            1. Your Right to Delete Personal Data
          </h3>
          <p>
            You have the right to request the deletion of your personal
            information that we collect and store, subject to certain legal or
            operational limitations. Once your request is verified, we will
            remove your personal data from our active systems.
          </p>
          <h3 id="howToSubmitDataDeletionRequest">
            2. How to Submit a Data Deletion Request
          </h3>
          <p>You can request data deletion in any of the following ways:</p>
          <ul>
            <li>
              Email: Send an email to [insert your support or business email]
              with the subject line “Data Deletion Request.”
            </li>
            <li>
              Contact Form: Submit a request through the contact form available
              on [insert your website URL].
            </li>
            <li>
              Account Settings (if applicable): If your account has a “Delete
              Account” option, you can use that to start the process instantly.
            </li>
          </ul>
          <p>Please include the following details in your request:</p>
          <ul>
            <li>Your full name</li>
            <li>Registered email address or username</li>
            <li>Description of the data or account you want deleted</li>
          </ul>
          <p>
            We may contact you for verification to ensure the request is
            legitimate and secure.
          </p>
          <h3 id="whatHappensAfterYourRequest">
            3. What Happens After Your Request
          </h3>
          <p>Once verified:</p>
          <p>
            1. Your personal data will be permanently deleted from our active
            databases within 7-15 business days.
          </p>
          <p>
            2. Certain non-identifiable or legally required data (like invoices
            or payment records) may be retained for tax or compliance purposes.
          </p>
          <p>
            3. You will receive a confirmation email once deletion is complete.
          </p>
          <h3 id="exceptionsDataDeletion">4. Exceptions to Data Deletion</h3>
          <p>We may not delete data if:</p>
          <ul>
            <li>
              It's required to complete an ongoing service or transaction you
              requested.
            </li>
            <li>
              Retention is required by law (e.g., financial or audit records).
            </li>
            <li>
              It's necessary to resolve disputes, prevent fraud, or enforce
              agreements.
            </li>
          </ul>
          <h3 id="deletionDataThirdParties">
            5. Deletion of Data from Third Parties
          </h3>
          <p>
            If your data was shared with authorized third parties (e.g., payment
            processors or analytics services), we will also notify them of your
            deletion request wherever applicable.
          </p>
          <h3 id="contactUS">6. Contact Us</h3>
          <p>
            If you have any questions about how we manage or delete your data,
            contact us at:
          </p>
          <p>📧 [insert your business email]</p>
          <p>🌐 [insert website URL]</p>
        </div>
      </Container>
    </MainLayout>
  );
};

export default DataDeletionInstruction;
