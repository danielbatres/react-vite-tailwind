import { useLocalStorage } from "../../hooks/useLocalStorage"

function SignIn() {
  const { 
    account 
  } = useLocalStorage();

  console.log(account);

  return (
    <>

    </>
  )
}

export { SignIn }