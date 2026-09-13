# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
🚀 Dev Stack Builder
A simple and interactive web app to help developers create and manage their dynamic tech stack.

🛠️ Tech Stack
React – Component-based UI framework

TypeScript – Static typing for safer code

Tailwind CSS – Styling and layout design

React Toastify – Popup notifications for updates

✨ Top 3 Features
Add to Stack: Click cards to collect your favorite tools into a personal list.

Remove & Clear All: Delete single items or reset the entire list with one click.

Smart Empty State: Displays a clean placeholder message whenever no items are selected.

📚 React Q&A
1. What is JSX, and why is it used in React?
JSX lets you write HTML code directly inside JavaScript. React uses it to make building components simpler and easier to read.

2. What is the difference between props and state?
Props: Data passed down from a parent component (Read-only).

State: Data stored inside a component that can change over time (Writable).

3. What does the useState hook do, and where did you use it?
useState stores component data that re-renders the UI when updated.

Used in Tecnologies.tsx to store the list of selected tech items in the stack state.

4. What does the useEffect hook do, and why did you need it to load JSON data?
useEffect handles side effects like fetching data. It was used to automatically fetch the data.json file as soon as the page loads.

5. Why does every item in a .map() list need a unique key prop?
Keys help React track which items changed, were added, or were removed, allowing it to update only those specific items instead of re-rendering the whole list.

6. What is conditional rendering? Show one place you used it.
Conditional rendering displays different UI elements based on a condition (like an if statement).

Example: Showing "Your stack is empty" when stack.length === 0, otherwise displaying the item list.

7. How do you pass data between Parent and Child components?
Parent to Child: Pass data down using Props.

Child to Parent: Pass a callback function through props that the child component calls to send data back up.