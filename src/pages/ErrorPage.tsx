import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

const PageDoesntExist = () => (
  <>
    <FaExclamationTriangle size={50} color="gray" className="mb-2" />
    <h1>Oops</h1>
    <p>This page doesn't exist.</p>
  </>
);
const UnexpectedError = () => (
  <>
    <FaServer size={50} color="gray" className="mb-2" />
    <h1>Oops</h1>
    <p>Unexpected error occured.</p>
  </>
);
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <div className="ps-5 pt-3">
        {isRouteErrorResponse(error) ? PageDoesntExist() : UnexpectedError()}
      </div>
    </>
  );
};

export default ErrorPage;
