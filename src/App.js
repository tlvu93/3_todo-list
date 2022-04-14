import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './component/TaskList'

function App() {
  return (
    <div className="App">
      {/* <Container id="time-filter">
        <Row className="justify-content-md-center">
          <Col xs lg="auto">
            <button>Today</button>
            <button>This Week</button>
            <button>This Month</button>
            <input
              type="datetime-local"
              id="datetime-filter"
              name="task-time"
              value="2022-04-01T00:00"
              min="0000-01-01T00:00"
              max="2099-12-31T00:00"
            />
          </Col>
        </Row>
      </Container> */}
      {/* <Container id="searchbar">
        <Row className="justify-content-md-center">
          <Col xs lg="auto">
            <Searchbar />
          </Col>
        </Row>
      </Container> */}

      <TaskList />

      {/* <Container id="category">
        <Row className="justify-content-md-center">
          <Col xs lg="auto">
            <button>All</button>
            <button>Private</button>
            <button>Work</button>
            <button>Completed</button>
            <button>Open</button>
          </Col>
        </Row>
      </Container> */}

    </div>
  );
}

export default App;
