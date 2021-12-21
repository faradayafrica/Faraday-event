import React, { useState } from "react";
import base from "../../util";

function Form({ eventId }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
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
    setLoading(true);

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
        setLoading(false);
      }
    );
  };
  return (
    <div className="md:-mt-12 relative" id="register">
      <div className="bg-white sticky top-6 shadow p-5 max-w-sm mx-auto md:ml-auto">
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

          <button className="flex justify-center items-center text-white bg-primary p-4 w-full">
            {loading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
