"use client";

import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <Container className="mt-5 text-center">
      <h1>Count: {count}</h1>
      <Row>
        <Col>
          <Button
            variant="outline-success"
            className="mx-2"
            onClick={() => setCount((count ?? 0) + 1)}
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
    </Container>
  );
};

export default Hooks;
