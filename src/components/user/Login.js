import React, { useRef, useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useAuth } from "../../global/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Slogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/Store");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <div className="shaky">
      <br></br>
      <br></br>

      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              {error && <h3 className="text-center bg-warning p-4">{error}</h3>}
              <Form onSubmit={handelSubmit}>
                <Form.Group id="userName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    placeholder="Username..."
                    type="email"
                    ref={emailRef}
                    required
                  />
                </Form.Group>
                <br></br>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    ref={passwordRef}
                    required
                  />
                </Form.Group>

                <br></br>
                <Button disabled={loading} type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
            <div className="text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
            <br></br>
          </Card>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </div>
  );
};

export default Slogin;
