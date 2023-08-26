## Authenticate with Google, Facebook & Github Website with React

![GitHub last commit](https://img.shields.io/github/last-commit/AdarshTheki/Authenticate-with-google-facebook-github)
![GitHub repo size](https://img.shields.io/github/repo-size/AdarshTheki/Authenticate-with-google-facebook-github)
![GitHub](https://img.shields.io/github/license/AdarshTheki/Authenticate-with-google-facebook-github)

## Getting Started

1. Clone the repository:

```sh
  git clone https://github.com/AdarshTheki/Authenticate-with-google-facebook-github.git
  cd auth-users-forms
```

2. Start the development server:

```sh
  npm install
```

3. Open the website in your browser:

```sh
  npm run dev
  http://localhost:5173
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-new-branch`
3. Make your changes.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push the branch: `git push origin my-new-branch`
6. Submit a pull request.

## License

This project is licensed under the MIT License - see the **[LICENSE](./LICENSE)** file for details.

## Descriptions
This README file outlines the key features, getting started instructions, technologies used, and how to contribute to the project. Make sure to include your own screenshots, links, and detailed descriptions that accurately represent your eCommerce website built with React.

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
