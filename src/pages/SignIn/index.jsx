import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function SignIn() {
  const {
    account,
    signIn
  } = useContext(ShoppingCartContext);
  const [view, setView] = useState("login");

  const hasUserAnAccount = Object.keys(account).length !== 0;

  const renderLogin = () => {
    return (
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Email:</span>
          <span>{account?.email}</span>
        </p>
        <p>
          <span className="font-light text-sm">Password:</span>
          <span>{account?.password}</span>
        </p>
        <Link to="/">
          <button
            type="button"
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
            disabled={!hasUserAnAccount}
          >
            Log in
          </button>
        </Link>
        <div className="text-center">
          <a className="font-light text-x5 underline-offset-4" href="/">
            Forgot my password
          </a>
        </div>
        <button
          className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
          disabled={hasUserAnAccount}
          onClick={() => setView("create-user-info")}
        >
          Sign in
        </button>
      </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <></>
    )
  }

  const renderView = () => view === "create-user-info" ? renderCreateUserInfo() : renderLogin();

  return (
    <>
      <h1 className="font-medium text-xl text-center w-80 mb-6">
        Welcome, let's get started
      </h1>
      {renderView()}
    </>
  );
}

export { SignIn }