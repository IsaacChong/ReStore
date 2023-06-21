import { Divider, Paper, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";

export default function NotFount() {
  return (
    <Container component={Paper} sx={{ height: 400 }}>
      <Typography variant="h3">
        We cant find what you're looking for.
      </Typography>
      <Divider />
      <Button fullWidth component={Link} to="/catalog">
        Go back to shop
      </Button>
    </Container>
  );
}
