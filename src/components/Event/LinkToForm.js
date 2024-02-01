const LinkToForm = ({ link }) => {
  return (
    <div>
      <h4 className="text-lg text-center font-semibold">
        {/* Follow the link below to register for this event. */}
        Click the button below to register for this event.
      </h4>

      {/* <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-primary text-center mt-4 underline"
      >
        <h3 className="mt-4">{link}</h3>
      </a> */}

      <h3 className="mt-4 object-fill  w-max rounded-[20px] text-white mx-auto">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="lnk px-3 py-2 bg-primary text-center rounded-[20px] font-semibold mt-4 w-auto"
        >
          Register
        </a>
      </h3>
    </div>
  );
};

export default LinkToForm;
