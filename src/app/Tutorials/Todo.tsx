"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ToDo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputTask, setInputTask] = useState<string>("");

  const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputTask.trim() === "") return;
    setTasks([...tasks, inputTask]);
    setInputTask("");
  };

  const handleInputTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
    console.log(inputTask);
  };

  const handleTaskDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    debugger;
    const taskToDelete = (e.target as HTMLElement).nextSibling?.textContent;
    if (!taskToDelete) return;
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Container className="mt-5 text-center">
          <h6>ToDo List</h6>
          <Row>
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter task"
                id="txtTask"
                value={inputTask}
                onChange={handleInputTask}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                variant="outline-success"
                className="mt-2 me-2 text-center"
                onClick={handleAddTask}
              >
                Add Task
              </Button>
              <Button
                variant="outline-danger"
                className="mt-2 me-2 text-center"
              >
                Print
              </Button>
            </Col>
          </Row>

          <Row>
            <Col>
              <ul style={{ listStyleType: "none" }}>
                {tasks.map((i, index) => {
                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outline-danger"
                        style={{ margin: ".5rem" }}
                        onClick={handleTaskDelete}
                      >
                        Delete
                      </Button>
                      <li style={{ marginRight: "8px", marginBottom: 0 }}>
                        {i}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default ToDo;
