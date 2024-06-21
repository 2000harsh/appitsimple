import React, { useContext, useState } from "react";
import { Alert, Button, Card, Divider, Steps } from "antd";
import "../style.scss";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";
import { cards1 } from "../store/StaticData";

const { Step } = Steps;

const F2 = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const cards = cards1;

  const handleCardClick = (value) => {
    setSelectedCard(value);
    setErrorMessage("");
    console.log(value);
  };

  const HandlePrev = () => navigate("/");

  const handleNext = () => {
    if (!selectedCard) {
      setErrorMessage(
        "Please select a service before proceeding to the next step."
      );
      return;
    }
    setFormData({ ...formData, service: selectedCard });
    navigate("/f3");
  };

  return (
    <div className="form-container">
      <Card className="form">
        <Steps current={1}>
          <Step title="Contact Details" />
          <Step title="Our Services" />
          <Step title="Summary" />
        </Steps>
        <Divider className="thick-divider" />
        <h1 className="title">Our Services</h1>
        <p className="additionalInfo">
          Please Select Which Service You are interested in.
        </p>
        {errorMessage && (
          <Alert
            message={errorMessage}
            type="error"
            showIcon
            className="error-message"
          />
        )}
        <div className="card-container">
          {cards.map((card) => (
            <Card
              key={card.value}
              className={`selectable-card ${
                selectedCard === card.value ? "selected" : ""
              }`}
              onClick={() => handleCardClick(card.value)}
            >
              <div className="card-content">
                <div className="iconBg">{card.icon}</div>
                <span>{card.title}</span>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-3 button-container2">
          <Button className="f1btn" onClick={() => HandlePrev()}>
            Previous step
          </Button>
          <Button
            htmlType="submit"
            className="f2btn"
            onClick={() => handleNext()}
          >
            Next step
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default F2;
