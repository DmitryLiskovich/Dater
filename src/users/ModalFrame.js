import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const ModalFrame = ({ toggle, onSubmit }) => {
  return (
    <div className="add-user">
      <Form className="add-user-form" onSubmit={onSubmit}>
        <i
          className="far fa-times-circle add-user-close"
          onClick={() => toggle()}
        />
        <div className="add-user-form-center">
          <FormGroup>
            <Label className="add-user-lable" for="exampleEmail">
              First Name
            </Label>
            <Input
              required
              className="add-user-input"
              type="text"
              placeholder="First Name"
              name="firstName"
            />
          </FormGroup>
          <FormGroup>
            <Label className="add-user-lable" for="exampleEmail">
              Last Name
            </Label>
            <Input
              required
              className="add-user-input"
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
          </FormGroup>
          <FormGroup>
            <Label className="add-user-lable" for="exampleEmail">
              User Name
            </Label>
            <Input
              required
              className="add-user-input"
              type="text"
              name="userName"
              placeholder="User Name"
            />
          </FormGroup>
          <FormGroup>
            <Label className="add-user-lable" for="exampleEmail">
              Tasks
            </Label>
            <Input
              required
              className="add-user-input"
              type="text"
              name="tasks"
              placeholder="Tasks"
            />
          </FormGroup>
          <FormGroup>
            <Label className="add-user-lable" for="exampleEmail">
              Your level
            </Label>
            <Input
              required
              className="add-user-input"
              type="text"
              name="level"
              placeholder="Level"
            />
          </FormGroup>
          <Button color="info" className="add-user-button">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
