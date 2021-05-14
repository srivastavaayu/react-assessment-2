import "../css/Login.css";
import Header from "./Header";

function Login() {
  return (
    <>
      <Header />
      <main id="loginMain">
        <h2 className="text-center">Login to ABC Restaurant</h2>
        <form action="">
          <label className="form-label" for="loginID">
            Login ID
          </label>
          <div className="mb-3">
            <input id="loginID" className="form-control" type="text" />
          </div>
          <label className="form-label" for="loginPassword">
            Password
          </label>
          <div className="mb-3">
            <input
              id="loginPassword"
              className="form-control"
              type="password"
            />
          </div>
          <button className="btn btn-success float-end" type="submit">
            Submit
          </button>
        </form>
      </main>
    </>
  );
}

export default Login;
