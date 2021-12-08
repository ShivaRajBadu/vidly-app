import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";
import Input from "./common/input";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
    name: Joi.string().required(),
  };
  doSubmit = () => {
    //call server
    console.log("submitted");
  };
  render() {
    const { data, errors } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
            type="password"
          />
          <Input
            name="name"
            value={data.name}
            label="Name"
            onChange={this.handleChange}
            error={errors.name}
          />
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}

export default Register;
