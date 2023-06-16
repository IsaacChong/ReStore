import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function About() {
  return (
    <Container>
      <Typography gutterBottom variant="h2">
        Errors
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => {
            agent.TestErrors.get400error();
          }}
        >
          Test 400 error
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            agent.TestErrors.get401error();
          }}
        >
          Test 401 error
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            agent.TestErrors.get404error();
          }}
        >
          Test 404 error
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            agent.TestErrors.get500error();
          }}
        >
          Test 500 error
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            agent.TestErrors.getValidationError();
          }}
        >
          Test validation error
        </Button>
      </ButtonGroup>
    </Container>
  );
}
