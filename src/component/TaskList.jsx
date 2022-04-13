import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'


const TaskList = () => {
    return (
        <Container>
            <Row>
                <Col>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                    <Form.Check type="checkbox"/>
                        <Button variant="primary"><i class="fa-solid fa-pen"></i></Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
  };

  export default TaskList;