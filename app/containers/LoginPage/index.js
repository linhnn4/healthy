import React, { useState } from 'react';
import Container from 'components/Container';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { userAction } from 'actions/user';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 56px auto;
  background: #414141;
  padding: 30px;
  width: 400px;
  border-radius: 10px;
  .ant-btn-primary {
    width: 100%;
    height: 32px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LoginPage = () => {
  const history = useHistory();

  const [isSubmiting, setIsSubmiting] = useState(false);

  const onFinish = React.useCallback(async values => {
    setIsSubmiting(true);
    try {
      const result = await userAction.login(values);
      if (result?.accessToken) {
        history.push('/top');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmiting(false);
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ username: 'username', password: '12345678' }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={isSubmiting}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
