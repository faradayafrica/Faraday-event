import React from "react";

function Form() {
  return (
    <div className="md:-mt-12 relative " id="register">
      <div className="bg-white sticky top-6 shadow p-5 max-w-sm ml-auto">
        <h3 className="text-2xl font-semibold mb-4">Register for this event</h3>
        <form className="space-y-5">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First name"
            className="w-full bg-[#c4c4c454] p-3 placeholder:text-[#3F3F41]"
          />
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Last name"
            className="w-full bg-[#c4c4c454] p-3 placeholder:text-[#3F3F41]"
          />

          <hr className="text-gray-300" />

          <input
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
