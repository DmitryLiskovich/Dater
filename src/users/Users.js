import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "components/Table/Table.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./users.scss";
import { ModalFrame } from "./ModalFrame";

function Users() {
  const [data, setData] = useState([]);
  const [addUserFormState, setAddUserFormState] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const result = await axios("http://localhost:8080/users");
        console.log(result.data);
        const usersData = result.data.map(item => [
          item.first_name,
          item.last_name,
          item.user_name,
          item.tasks,
          item.level
        ]);
        console.log(usersData);
        setData(usersData);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const addUser = e => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/users", {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        userName: e.target.userName.value,
        tasks: e.target.tasks.value,
        level: e.target.level.value
      })
      .then(response => {
        if (response.status === 200) {
          axios.get("http://localhost:8080/users").then(result => {
            console.log(result.data);
            const usersData = result.data.map(item => [
              item.first_name,
              item.last_name,
              item.user_name,
              item.tasks,
              item.level
            ]);
            console.log(usersData);
            setData(usersData);
          });
        }
      });
    setAddUserFormState(!addUserFormState);
  };

  return (
    <GridContainer>
      {addUserFormState && (
        <ModalFrame
          toggle={() => setAddUserFormState(!addUserFormState)}
          onSubmit={addUser}
        />
      )}
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4>Users list</h4>
            <p>Information about all users</p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "First Name",
                "Last Name",
                "User name",
                "Tasks",
                "Level"
              ]}
              tableData={data}
            />
          </CardBody>
        </Card>
        <Button
          style={{ display: "block", margin: "auto" }}
          color="info"
          onClick={() => setAddUserFormState(!addUserFormState)}
        >
          Add user
        </Button>
      </GridItem>
    </GridContainer>
  );
}

export default Users;
