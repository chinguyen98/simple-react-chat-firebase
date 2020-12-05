import { Button, Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { FC, useContext } from 'react';
import { FirebaseContext } from '../../contexts/firebase.context';

import './sign-in.scss';

const SignIn: FC = () => {
  const { googleAuthProvider, auth } = useContext(FirebaseContext);

  const handleSignin = () => {
    auth.signInWithPopup(googleAuthProvider);
  }

  return (
    <>
      <Row className="sign-in" align="middle" justify="center">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Title level={3} >Chat nhảm :v</Title>
          <Button size="large" type="primary" onClick={handleSignin}>
            Đăng nhập bằng Gu Gồ
          </Button>
        </Col>
      </Row>
    </>

  )
}

export default SignIn;