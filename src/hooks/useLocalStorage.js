import { useEffect, useState } from "react";

function useLocalStorage() {
  const [account, setAccount] = useState({});
  
  const item = "ACCOUNT";

  useEffect(() => {
    const accountStorage = localStorage.getItem(item);

    if (accountStorage !== null) {
      setAccount(JSON.parse(accountStorage));
    } else {
      localStorage.setItem(item, JSON.stringify(account));
    }
  }, []);

  const signIn = newAccount => {
    localStorage.setItem(item, JSON.stringify(newAccount));

    setAccount(newAccount);
  }

  const signOut = () => {
    localStorage.setItem(item, JSON.stringify({}));

    setAccount({});
  }

  const isEmptyAccount = () => Object.keys(account).length === 0;
  
  return {
    account,
    signIn,
    signOut,
    isEmptyAccount
  }
}

export { useLocalStorage }