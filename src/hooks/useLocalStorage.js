import { useEffect, useState } from "react";

function useLocalStorage() {
  const [account, setAccount] = useState({});
  const [isSignIn, setIsSignIn] = useState(false);
  
  const item = "ACCOUNT";

  useEffect(() => {
    const accountStorage = localStorage.getItem(item);

    if (accountStorage !== null) {
      setAccount(JSON.parse(accountStorage));
      setIsSignIn(true);
    } else {
      localStorage.setItem(item, JSON.stringify(account));
    }
  }, []);

  const signIn = newAccount => {
    localStorage.setItem(item, JSON.stringify(newAccount));

    setAccount(newAccount);
    setIsSignIn(true);

    console.log(account, isSignIn);
  }

  const signOut = () => {
    localStorage.setItem(item, JSON.stringify({}));

    setAccount({});
    setIsSignIn(false);
  }

  return {
    account,
    signIn,
    signOut,
    isSignIn
  }
}

export { useLocalStorage }