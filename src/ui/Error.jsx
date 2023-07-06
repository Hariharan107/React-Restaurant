import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const { data, status, message } = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        {status}
        {data || message}
      </p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
