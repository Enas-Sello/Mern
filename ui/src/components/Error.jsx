import React from "react";

const Error = (error) => {
  return <div>some thing went wrong {error && error.message}</div>;
};

export default Error;
