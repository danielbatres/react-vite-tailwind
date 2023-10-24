import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function SignIn() {
  const { 
    signIn
  } = useContext(ShoppingCartContext);

  return (
    <>
      <h1 className="font-medium text-xl text-center w-80 mb-6">
        Welcome, let's get started
      </h1>
      <div className="flex flex-col w-80">
        <p>
          <span className="font-light text-sm">Email:</span>
          <span></span>
        </p>
        <p>
          <span className="font-light text-sm">Password:</span>
          <span></span>
        </p>
        <Link
          to="/"
        >
          <button
            type="button"
            className="bg-black disabled:bg-black/40 text-white w-full rounded-lg py-3 mt-4 mb-2"
          >
            Log in
          </button>
        </Link>
        <div className="text-center">
          <a className="font-light text-x5 underline-offset-4" href="/">Forgot my password</a>
        </div>
        <button
          className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
          onClick={() => signIn({})}
        >
          Sign in
        </button>
      </div>
    </>
  );
}

export { SignIn }