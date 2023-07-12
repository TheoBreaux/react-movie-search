import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({ searchterm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmitForm(formData.searchterm);
  };

  console.log(formData);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="searchterm"
          value={formData.searchterm}
        />
        <button type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
