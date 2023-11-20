import React from "react";
import "./UserSignUp.css";

const UserSignUp = () => {
  // useState React hook to handle state management
  const [formData, setFormData] = React.useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  //   function to handle when form is submitted
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  //   funtion to handle change of input field values
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <div id="UserSignUp">
      <h1>User Sign Up:</h1>
      <form onSubmit={handleSubmit}>
        <div className="formItemContainer">
          <label htmlFor="fullName">First Name:</label>
          <input
            type="text"
            className="textInput"
            id="fullName"
            name="fullName"
            placeholder="e.g. John Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="formItemContainer">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="textInput"
            id="username"
            placeholder="e.g. user_name"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="formItemContainer">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            className="textInput"
            id="email"
            placeholder="e.g. sample@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="formItemContainer">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="textInput"
            id="address"
            placeholder="e.g. 123 Main Way, New York, NY 12345"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="formItemContainer">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            className="textInput"
            id="phoneNumber"
            placeholder="e.g. 123-456-7890"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserSignUp;
