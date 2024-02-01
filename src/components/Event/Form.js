import React, { useState } from "react";
import { base } from "../../util";
import { useForm } from "react-hook-form";
import ClosedBanner from "./closedBanner";
import LinkToForm from "./LinkToForm";

function Form({
  eventId,
  eventCompleted,
  registrationClosed,
  registrationLink,
  setToast,
}) {
  const [loading, setLoading] = useState(false);
  const [validFirstName, setValidFirstName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    const payload = {
      event_id: [eventId],
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone_number: data.phone,
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
          setToast("error");
          return;
        }
        records.forEach(function (record) {
          reset();
        });
        setToast("success");
        setLoading(false);
      }
    );
  };
  return (
    <div className="mt-12 md:-mt-12 relative" id="register">
      <div className="bg-white sticky top-6 md:shadow p-5 md:max-w-sm mx-auto md:ml-auto form-container">
        {eventCompleted || registrationClosed ? (
          <ClosedBanner />
        ) : (
          <>
            {!registrationLink ? (
              <div>
                <h3 className="text-2xl font-semibold mt-2 mb-6 text-center">
                  Register for this event
                </h3>
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    id="firstName"
                    placeholder="First name"
                    disabled={eventCompleted ? true : false}
                    className={`form-input ${
                      eventCompleted ? "cursor-not-allowed" : ""
                    } bg-[#c4c4c454]`}
                    onChange={(e) => {
                      if (
                        !/^[a-zA-Z]+$/.test(e.target.value) &&
                        e.target.value
                      ) {
                        setValidFirstName(false);
                      } else {
                        setValidFirstName(true);
                      }
                    }}
                  />
                  {!validFirstName && (
                    <span className="text-red-500 text-sm">
                      Only letters are allowed
                    </span>
                  )}
                  {errors.firstName?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      First name is required
                    </span>
                  )}
                  <input
                    type="text"
                    {...register("lastName", { required: true })}
                    id="lastName"
                    placeholder="Last name"
                    disabled={eventCompleted ? true : false}
                    className={`form-input ${
                      eventCompleted ? " cursor-not-allowed" : ""
                    } bg-[#c4c4c454]`}
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (
                        !/^[a-zA-Z]+$/.test(e.target.value) &&
                        e.target.value
                      ) {
                        setValidLastName(false);
                      } else {
                        setValidLastName(true);
                      }
                    }}
                  />
                  {!validLastName && (
                    <span className="text-red-500 text-sm">
                      Only letters are allowed
                    </span>
                  )}
                  {errors.lastName?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      Last Name is required
                    </span>
                  )}
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    id="email"
                    placeholder="Email"
                    disabled={eventCompleted ? true : false}
                    className={`form-input ${
                      eventCompleted ? " cursor-not-allowed" : ""
                    } bg-[#c4c4c454]`}
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      Email is required
                    </span>
                  )}
                  <input
                    type="number"
                    {...register("phone", {
                      required: true,
                      pattern: /^\d{11,11}$/,
                    })}
                    id="phone"
                    placeholder="Phone Number"
                    disabled={eventCompleted ? true : false}
                    className={`form-input ${
                      eventCompleted ? " cursor-not-allowed" : ""
                    } bg-[#c4c4c454]`}
                  />
                  {errors.phone?.type === "required" && (
                    <span className="text-red-500 text-sm">
                      Phone number is required
                    </span>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <span className="text-red-500 text-sm">
                      Phone number entered isn't correct
                    </span>
                  )}
                  <button
                    type="submit"
                    disabled={
                      !validFirstName || eventCompleted || !validLastName
                        ? true
                        : false
                    }
                    className={`flex justify-center items-center text-white  p-4 w-full ${
                      !validFirstName || eventCompleted || !validLastName
                        ? "bg-[#05b85073] cursor-not-allowed"
                        : "bg-primary"
                    }`}
                  >
                    {loading && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                    Register
                  </button>
                </form>
              </div>
            ) : (
              <LinkToForm link={registrationLink} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Form;
