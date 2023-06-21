import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import agent from "../../app/api/agent";

export default function About() {
  const [validationErrors, setValidationErrors] = useState<String[]>([]);

  const getValidationError = () => {
    agent.TestErrors.getValidationError()
      .then(() => console.log("Should not appear"))
      .catch((error) => setValidationErrors(error));
  };

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
            getValidationError();
          }}
        >
          Test validation error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert>
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((error, index) => (
              <ListItem key={index}>
                <ListItemText>{error}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
