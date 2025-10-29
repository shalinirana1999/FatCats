import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <Container className="footer-content">
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
        <div className="footer-links">
          <p>
            <a onClick={() => navigate("/privacy-policy")}>Privacy Policy</a>
          </p>
          <p>
            <a onClick={() => navigate("/terms")}>Terms and Condition</a>
          </p>
          <p>
            <a onClick={() => navigate("/data-deletion-instruction")}>
              Data Deletion Instructions
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
