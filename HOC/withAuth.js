import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { authChanged } from "firebaseconf/auth/auth-state";
import { useUI } from 'context/UIcontext';

const withAuth = (WrappedComponent) => {
  return props => {
    const Router = useRouter();
    const { loginSuccess } = useUI()
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
        authChanged( user => {
            if(user){
                loginSuccess(user)
                setVerified(true)
            }
            else{
                Router.replace("/");
            }
        })
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;