import { useContext, useRef, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function SignIn() {
  const {
    account,
    signIn
  } = useContext(ShoppingCartContext);
  const [view, setView] = useState("login");
  const form = useRef(null);

  const hasUserAnAccount = Object.keys(account).length !== 0;

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password")
    }

    signIn(data);
  }

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
            onClick={() => signIn()}
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
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={account?.name}
            placeholder="John"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Your email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={account?.email}
            placeholder="hi@helloworld.com"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={account?.password}
            placeholder="******"
            className="rounded-lg border border-black placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-black text-white w-full rounded-lg py-3"
            onClick={() => createAnAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    );
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