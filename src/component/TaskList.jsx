import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const dummyData = [
  {
    id: 1,
    checked: false,
    description: "buy something",
  },
  {
    id: 2,
    checked: false,
    description: "buy else",
  },
  {
    id: 3,
    checked: true,
    description: "buy else 3",
  },
];

const TaskEntry = ({ data, deleteTask, handleCheck }) => {
  return (
    <ListGroupItem>
      <Stack direction="horizontal" gap={3}>
        <Stack direction="horizontal" gap={3}>
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            checked={data.checked}
            onChange={() => handleCheck(data)}
          />
          {data.checked ? <del>{data.description}</del> : data.description}
        </Stack>
        <Button className="ms-auto" variant="warning">
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button
          className="border"
          variant="danger"
          onClick={() => deleteTask(data.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Stack>
    </ListGroupItem>
  );
};

const TaskList = () => {
  const [tasks, setTasks] = useState(dummyData);

  const [taskDescription, setDescription] = useState("");

  const handleAdd = () => {
    const unique_id = uuid();

    const data = {
      id: unique_id,
      checked: false,
      description: taskDescription,
    };
    setTasks([...tasks, data]);
    setDescription("");
  };

  const handleDelete = (id) => {
    let objectToDelete = tasks.find((task) => task.id === id);
    const filteredArray = tasks.filter((task) => task !== objectToDelete);
    setTasks(filteredArray);
    console.log();
  };

  const handleCheck = (data, todo) => {
    let index = tasks.findIndex((task) => task.id === data.id);

    const newTasks = [...tasks];
    data.checked = data.checked ? false : true;
    newTasks[index] = data;

    setTasks(newTasks);
  };

  // Components
  const taskItems = tasks.map((task) => (
    <TaskEntry
      key={task.id}
      data={task}
      deleteTask={handleDelete}
      handleCheck={handleCheck}
    />
  ));

  const addButton = (
    <ListGroupItem>
      <Stack direction="horizontal" gap={3}>
        <Stack direction="horizontal" gap={3}></Stack>
        <input
          type="text"
          name="name"
          value={taskDescription}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button className="border" variant="success" onClick={handleAdd}>
          <FontAwesomeIcon icon={faAdd} />
        </Button>
      </Stack>
    </ListGroupItem>
  );

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <ListGroup>
                {taskItems}
                {addButton}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskList;
