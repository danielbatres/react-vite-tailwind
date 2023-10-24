import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function SignIn() {
  const { 
    signIn
  } = useContext(ShoppingCartContext);

  const newSignIn = () => {
    signIn({});
  }

  return (
    <>
      <h1 className="font-medium text-xl text-center w-80 mb-6">Welcome, let's get started</h1>
      <div className="flex flex-col w-80">
        <div>
          <p className="font-light text-sm">Email: </p>
        </div>
        <div>
          <p className="font-light text-sm">Password: </p>
        </div>
        <button 
          className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
          onClick={() => newSignIn()}
        >
          Sign in
        </button>
      </div>
    </>
  )
}

export { SignIn }