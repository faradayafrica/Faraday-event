import React, { useState } from "react";
import base from "../../util";

function Form({ eventId }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      event_id: [eventId],
      first_name: userData.firstName,
      last_name: userData.lastName,
      email: userData.email,
    };

    base("attendee").create(
      [
        {
          fields: payload,
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
  };
  return (
    <div className="md:-mt-12 relative " id="register">
      <div className="bg-white sticky top-6 shadow p-5 max-w-sm ml-auto">
        <h3 className="text-2xl font-semibold mb-4">Register for this event</h3>
        <form className="space-y-5" onSubmit={onSubmit}>
          <input
            type="text"
            value={userData.firstName}
            onChange={handleChange}
            name="firstName"
            id="firstName"
            placeholder="First name"
            className="w-full bg-[#c4c4c454] p-3 placeholder:text-[#3F3F41]"
          />
          <input
            type="text"
            value={userData.lastName}
            onChange={handleChange}
            name="lastName"
            id="lastName"
            placeholder="Last name"
            className="w-full bg-[#c4c4c454] p-3 placeholder:text-[#3F3F41]"
          />

          <hr className="text-gray-300" />

          <input
            value={userData.email}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full bg-[#c4c4c454] p-3 placeholder:text-[#3F3F41]"
          />

          <button className="block text-white bg-primary p-4 w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
