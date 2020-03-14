import React, { useState } from "react";
import { Form, Input, Button, Spin, message } from "antd";
import { withRouter } from "react-router-dom";

const formItemLayout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 }
};
const tailFormItemLayout = {
  wrapperCol: { span: 24 }
};
const SigninForm = props => {
  const [form] = Form.useForm();
  const [isLoading, setIsloading] = useState(false);
  const onFinish = async values => {
    console.log("Received values of form: ", values);
    setIsloading(true);
    try {
      const result = await props.userSigninRequest(values);
      props.history.push("/", {
        name: result.data.username
      });
    } catch (error) {
      message.error(`error==>${error.response.status}`);
      setIsloading(false);
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Redux Login Demo</h1>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!"
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          {isLoading ? (
            <Spin />
          ) : (
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};
export default withRouter(SigninForm);
