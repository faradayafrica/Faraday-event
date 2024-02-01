const LinkToForm = ({ link }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mt-2 mb-6 text-center">
        {/* Follow the link below to register for this event. */}
        Click the button below to register for this event.
      </h3>

      {/* <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-primary text-center mt-4 underline"
      >
        <h3 className="mt-4">{link}</h3>
      </a> */}

      <h3 className="space-y-5 flex justify-center items-center text-white  p-4 w-full">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="lnk p-5 bg-primary text-center font-semibold w-full"
        >
          Register
        </a>
      </h3>
    </div>
  );
};

export default LinkToForm;
