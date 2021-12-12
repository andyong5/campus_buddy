import React from 'react';
import { useGoogleLogin } from 'react-google-login';

// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginHooks.css';

const clientId =
  '615520021367-sjvmtmuujlf91gicag6u1kr4b4mu76bq.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    console.log('')
    const formData = new FormData();
    formData.append("first_name", res.profileObj.givenName);
    formData.append("last_name", res.profileObj.familyName);
    formData.append("name", res.profileObj.name);
    formData.append("image_url", res.profileObj.imageUrl);
    formData.append("email", res.profileObj.email);
    fetch("/login", {
      method: "POST",
      "Content-Type": "application/json;charset=utf-8",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button">
      <img src="/login2.png" alt=""></img>
    </button>
  );
}
export default LoginHooks;