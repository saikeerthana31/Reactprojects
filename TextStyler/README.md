# Text styling app (project - 2)

This Text Styler project is a React + TypeScript application that allows users to input text and apply different font styles dynamically. 


<small><strong> The main features include: </strong></small>
<ul>
 <ol><strong> Live Text Styling: </strong> Users can type text and apply various font styles by clicking buttons. </ol>
 <ol><strong> Predefined Fonts: </strong> Includes fonts like Rock Salt, WindSong, Pacifico, Monoton, and more.</ol>
 <ol><strong> Real-time Preview: </strong> The styled text updates instantly as users type or select a new font.</ol>
</ul>

<small><strong> The final pic: </strong></small>
<img width="1440" alt="TextStyler" src="https://github.com/user-attachments/assets/c34cfddb-3270-4532-87a2-5e7497aca167" />









# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
