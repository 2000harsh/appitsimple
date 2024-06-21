import React, { useContext, useState } from "react";
import { Button, Card, Divider, Form, Input, Steps } from "antd";
import "../style.scss";
import { UserOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";

const { Step } = Steps;

const F1 = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { setFormData } = useContext(FormContext);

  const onFinish = (values) => {
    console.log("values", values);
    setFormData(values);
    navigate("/f2");
  };

  return (
    <div className="form-container">
      <Card className="form">
        <Steps current={0}>
          <Step title="Contact Details" />
          <Step title="Our Services" />
          <Step title="Budget" />
        </Steps>
        <Divider className="thick-divider" />
        <h1 className="title">Contact Details</h1>
        <p className="additionalInfo">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: "true", message: "enter name" },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Name should only contain letters and spaces",
              },
            ]}
          >
            <Input
              placeholder="John Carter"
              suffix={<UserOutlined style={{ fontSize: "25px" }} />}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: "true", message: "enter name" },
              {
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              placeholder="Email address"
              suffix={<MailOutlined style={{ fontSize: "25px" }} />}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className="f2btn">
              Next step
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default F1;
