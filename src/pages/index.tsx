import { Box, Button, Container, Stack, Typography } from "@mui/material";
import ComingSoonIcon from "@mui/icons-material/HourglassEmpty";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 6,
        }}
      >
        <Stack spacing={3} alignItems="center">
          <ComingSoonIcon sx={{ fontSize: 64, color: "text.secondary" }} />
          <Typography variant="h2" component="h1">
            Coming Soon
          </Typography>
          <Typography variant="h5" color="text.secondary">
            We’re building something great. Check back shortly.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
            <Button
              component={RouterLink}
              to="/privacy-policy"
              variant="contained"
            >
              Privacy Policy
            </Button>
            <Button component={RouterLink} to="/terms" variant="contained">
              Terms
            </Button>
            <Button
              component={RouterLink}
              to="/data-deletion-instruction"
              variant="contained"
            >
              Data Deletion Instruction
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
