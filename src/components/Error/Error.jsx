import PropTypes from "prop-types";

const Error = ({ errMessage = "An unexpected error occurred." }) => {
  return (
    <div
      className="flex items-center justify-center w-full h-full"
      aria-label="Error Message"
    >
      <h3 className="text-headingColor text-[20px] leading-[30px] font-semibold">
        {errMessage}
      </h3>
    </div>
  );
};

Error.propTypes = {
  errMessage: PropTypes.string,
};

export default Error;
