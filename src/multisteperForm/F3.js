import { Card, Radio, Row, Col, Button, Steps, Divider, Alert } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import { data1 } from "../store/StaticData";

const { Step } = Steps;

const F3 = () => {
  const [value, setValue] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);

  const data = data1;

  const onChange = (e) => {
    const selectedValue = e.target.value;
    console.log(selectedValue);
    setValue(selectedValue);
    setErrorMessage("");
  };

  const HandlePrev = () => navigate("/f2");
  const hadleSubmit = () => {
    if (!value) {
      setErrorMessage(
        "Please select a budget range before proceeding to the form submit."
      );
      return;
    }
    const updatedFormData = { ...formData, budget: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    navigate("/submit");
  };

  return (
    <div className="form-container">
      <Card className="form">
        <Steps current={2}>
          <Step title="Contact Details" />
          <Step title="Our Services" />
          <Step title="Summary" />
        </Steps>
        <Divider className="thick-divider" />
        <h1 className="title">What's Your Project Budget</h1>
        <p className="additionalInfo">
          Please Select the project bydget range in your mind.
        </p>
        {errorMessage && (
          <Alert
            message={errorMessage}
            type="error"
            showIcon
            className="error-message"
          />
        )}
        <Row gutter={[16, 16]}>
          {data.map((card) => (
            <Col span={12} key={card.value}>
              <Card>
                <div className="card-content">
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={card.value}>
                      <span style={{ fontSize: "20px" }}>{card.title}</span>
                    </Radio>
                  </Radio.Group>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="mt-3 button-container2">
          <Button className="f1btn" onClick={() => HandlePrev()}>
            Previous step
          </Button>
          <Button
            onClick={() => hadleSubmit()}
            htmlType="submit"
            className="f2btn"
          >
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default F3;
