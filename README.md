# react-design-patterns

## Patterns

### Render Props

Build a Toggle component using the Render Props pattern.
It should manage an internal isopen state and let the parent decide how to render open/close UI.

### Higher Order Components

You are building an Admin Dashboard for a React app that has multiple pages:
ProfilePage - displays logged-in user's info
AdminPanel visible only to admins
ReportsPage - visible only to users with "report" permissions

You already have these components but each one needs to fetch the user data, check permissions, and conditionally render UI. That's repeated logic, and the perfect case for an HOс.

1. Create a Higher Order Component (HOC) named 'withUserDataAndPermissions`.
2. This HOC should:
  Fetch user data (simulate with a static object).
  Check if the user has the required permissions.
  Inject user data and permission status as props into the wrapped component.
3. Wrap the existing components (`ProfilePage`, `AdminPanel`, `ReportsPage`) with this HOC.
4. Each component should render differently based on the injected props:
  `ProfilePage` should always display user info.
  `AdminPanel should only render if the user is an admin; otherwise, show an "Access Denied" message.
  `ReportsPage` should only render if the user has "report" permissions; otherwise, show an "Access Denied" message.

### Optimistic UI

Build an optimistic comment feature for a mini blog
A comment form. When user submits:
Immediately show the comment in the list with a "Sending..." label using useOptimistic().
Send the comment to the server asynchronously.
- On success, replace the optimistic entry with the server-sent item (with real id and createdAt).
- On failure, remove the optimistic comment and show a toast/error message.


### Controlled Component with state reducer

### Compound components

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
