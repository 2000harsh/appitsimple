import { Button, Card, Divider, Table } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";

const Final = () => {
  const { formData } = useContext(FormContext);
  const [storedData, setStoredData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const localData = localStorage.getItem("formData");
    if (localData) {
      setStoredData(JSON.parse(storedData));
    }
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Services",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
    },
  ];
  const dataSource = formData ? [formData] : [];

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="form-container">
      <Card className="form">
        <center>
          <h1 className="tableHeading title">Form Data</h1>
          <p className="additionalInfo">
            This Screen display sbbmitted form data
          </p>
        </center>
        <Divider className="thick-divider" />
        <Table columns={columns} dataSource={dataSource} />
        <Button className="f2btn mt-5" onClick={() => handleHome()}>
          Home
        </Button>
      </Card>
    </div>
  );
};

export default Final;
