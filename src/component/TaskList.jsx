import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Stack from "react-bootstrap/Stack";

const TaskEntry = () => {
  return (
    <ListGroupItem>
      <Stack direction="horizontal" gap={3}>
        <Stack direction="horizontal" gap={3}>
          <Form.Check className="" type="checkbox" />
          Buy bread
        </Stack>

        <Button className="ms-auto" variant="warning">
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button className="border" variant="danger">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Stack>
    </ListGroupItem>
  );
};

const TaskList = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              {/* Tasklist */}
              <ListGroup>
                <TaskEntry />
                <TaskEntry />
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
