const LinkToForm = ({ link }) => {
  return (
    <div>
      <h4 className="text-lg text-center font-semibold">
        Follow the link below to register for this event.
      </h4>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-primary text-center mt-4 underline"
      >
        <h3 className="mt-4">{link}</h3>
      </a>
    </div>
  );
};

export default LinkToForm;
