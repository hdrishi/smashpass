"use client";

import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [txtInput, setTxtInput] = useState("");

  const handleTextInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTxtInput(event.target.value);
  };

  return (
    <Container className="mt-5 text-center">
      <Row className="mt-4">
        <Col>
          <Form.Control
            type="text"
            placeholder="Kindly enter your name"
            value={txtInput}
            onChange={handleTextInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Count: {count}</h1>
          <Button
            variant="outline-success"
            className="mx-2"
            onClick={() => {
              setCount((x) => {
                debugger;
                return (count ?? 0) + 1;
              });
            }}
            disabled={count >= 10}
          >
            Increment
          </Button>
          <Button
            variant="outline-danger"
            className="mx-2"
            onClick={() => setCount((count ?? 0) - 1)}
            disabled={count <= 0}
          >
            Decrement
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <input
          type="text"
          value={count == 0 ? "" : `${txtInput}, you have entered ${count}`}
          readOnly
        />
      </Row>
    </Container>
  );
};

export default Hooks;
