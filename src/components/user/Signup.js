import React, { useRef, useState } from "react";
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../global/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("The passwords does not match");
    }

    setError(null);

    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/Store");
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <div className="shaky">
    <>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Sign Up</Card.Title>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password"><br></br>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Form.Group id="password-confirm"><br></br>
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <br></br>
                <Button disabled={loading} type="submit">
                  
                  Create Account
                </Button>
              </Form>
            </Card.Body>
            
          </Card>
          <br></br><br></br>
          <div className="text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Col>
      </Row>
    </>
    </div>
  );

};

export default Signup;
