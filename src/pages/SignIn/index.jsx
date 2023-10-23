import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage"

function SignIn() {
  const { 
    signIn
  } = useLocalStorage();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const newSignIn = () => {
    const newAccount = {
      email,
      password
    }

    signIn(newAccount);
  }

  return (
    <>
      <h1 className="font-medium text-xl text-center w-80 mb-6">Welcome, let's get started</h1>
      <div className="flex flex-col w-80">
        <div>
          <p className="font-light text-sm">Email: </p>
          <input 
            value={email} 
            type="email" 
            placeholder="Enter your email" 
            onChange={e => {
              setEmail(e.target.value);
            }} 
          />
        </div>
        <div>
          <p className="font-light text-sm">Password: </p>
          <input 
            value={password} 
            type="password" 
            placeholder="Enter your password"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
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