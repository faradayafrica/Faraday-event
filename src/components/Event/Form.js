import React from "react";

function Form() {
  return (
    <div className="bg-white p-5 shadow md:-mt-12" id="register">
      <h3 className="text-2xl font-semibold mb-4">Register for this event</h3>
      <form className="space-y-5">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          className="w-full bg-[#c4c4c454] p-4 placeholder:text-[#3F3F41]"
        />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First name"
          className="w-full bg-[#c4c4c454] p-4 placeholder:text-[#3F3F41]"
        />

        <hr className="text-gray-300" />

        <button className="block text-white bg-primary p-4 w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default Form;
