# Getting Started with Create React App

### npm install @auth0/auth0-react

Next, configure the following URLs for your application under the "Application URIs" section of the "Settings" page: **[Website Here](https://manage.auth0.com/dashboard/us/)**

- Allowed Callback URLs: [http://localhost:3000]()
- Allowed Logout URLs: [http://localhost:3000]()
- Allowed Web Origins: [http://localhost:3000]()

```jsx
// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("app"));

root.render(
  <Auth0Provider
    domain='YOUR_AUTH0_DOMAIN'
    clientId='YOUR_AUTH0_CLIENT_ID'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <App />
  </Auth0Provider>
);
```

```jsx
// src/App.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        Hello {user.name}{" "}
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={() => loginWithRedirect()}>Log in</button>;
  }
}

export default App;
```
