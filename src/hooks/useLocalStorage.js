import { useEffect, useState } from "react";

function useLocalStorage() {
  const [account, setAccount] = useState({});

  useEffect(() => {
    const item = "ACCOUNT";

    const accountStorage = localStorage.getItem(item);

    if (accountStorage !== null) {
      setAccount(JSON.parse(accountStorage));
    } else {
      localStorage.setItem(item, JSON.stringify(account));
    }
  }, []);

  const login = newAccount => {
    localStorage.setItem(item, JSON.stringify(newAccount));

    setAccount(newAccount);
  }

  const logout = () => {
    localStorage.setItem(item, JSON.stringify({}));

    setAccount({});
  }
  
  return {
    account,
    login,
    logout
  }
}

export { useLocalStorage }