# StackUnderflow Mobile

A React Native app built with Expo, React Navigation, and Bun. The project uses a modular structure with typed APIs, reusable UI components, and alias-based imports.

# Link Demo

https://jam.dev/c/ca42cf66-8794-4dcb-bd3f-07eff74f565d

## Tech Stack

- Expo SDK 54
- React Native 0.81
- React Navigation (Stack + Bottom Tabs)
- TypeScript
- Bun (package manager & scripts)
- ESLint + Prettier

## Project Structure

```
stackunderflow
├── src
│   ├── api
│   │   ├── endpoints
│   │   ├── apiHelper.ts
│   │   ├── client.ts
│   │   └── errorHandler.ts
│   ├── assets
│   │   ├── fonts
│   │   ├── icons
│   │   ├── images
│   │   └── index.ts
│   ├── components
│   │   ├── atoms
│   │   ├── molecules
│   │   └── index.ts
│   ├── constants
│   │   ├── Colors/
│   │   ├── Const/
│   │   ├── Endpoints/
│   │   ├── Fonts/
│   │   ├── Styles/
│   │   ├── Typography/
│   │   └── index.ts
│   ├── hooks
│   │   ├── useDebounce/
│   │   ├── useForm/
│   │   └── index.ts
│   ├── navigation
│   │   ├── tab/
│   │   │   ├── BottomTab.tsx
│   │   │   └── MainTabNavigator.tsx
│   │   └── RootNavigator.tsx
│   ├── screens
│   │   ├── AskQuestion/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── Profile/
│   │   ├── QuestionDetail/
│   │   └── index.ts
│   ├── store
│   │   ├── slice/
│   │   │   ├── auth/
│   │   │   ├── counter/
│   │   │   └── question/
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── type
│   │   ├── api/
│   │   ├── models/
│   │   ├── navigation.ts
│   │   └── types.d.ts
│   ├── utils
│   └── App.tsx
├── babel.config.js
├── package.json
├── README.md
└── .eslintrc.js
```

## Aliases

Configured via `babel.config.js`:

- `@api`, `@assets`, `@components`, `@constants`, `@hooks`, `@navigation`, `@screens`, `@store`, `@slice`, `@type`, `@utils`.

## Scripts (Bun)

- `bun install` — Install dependencies.
- `bun start` — Start Expo dev server.
- `bun run lint` — Lint codebase.
- `bun run lint:fix` — Autofix lint issues.

If you prefer npm, equivalent scripts exist in `package.json`.

## Conventions

- Colors follow UPPER_SNAKE_CASE keys; fonts and typography live under `src/constants`.
- Global constants use PascalCase object names with UPPER_SNAKE_CASE keys, e.g. `Statuses.POSTED`.
- UI components should be placed in `atoms` or `molecules` depending on complexity.

## Approach

This project is built as a **frontend-only** application simulating a Q&A platform. Key architectural decisions include:

- **State Management**: **Redux Toolkit** is used to manage global state (questions, authentication). This provides a predictable state container and makes it easy to handle complex updates (like adding a comment to a specific question) and mock async operations.
- **Data Persistence**: **AsyncStorage** is utilized to persist data (questions and user session) across app restarts. This mimics a real backend experience where data isn't lost on reload.
- **Authentication**: A mock authentication flow is implemented. To ensure a consistent experience without a backend, user IDs are generated deterministically from usernames. This allows users to "log back in" and still retain ownership of their posts.
- **Component Architecture**: The project follows a modular structure, separating screens, reusable components (atoms/molecules), and business logic (hooks/slices). This enhances maintainability and scalability.
- **Styling**: A centralized design system (Colors, Typography) ensures UI consistency throughout the app.

## Assumptions & Limitations

- **Mocked Backend**: There is no real server. All "API calls" are simulated with `setTimeout` and local state modifications.
- **Single Device**: Data is stored locally. It will not sync across different devices.
- **User Identity**: Since there is no secure auth, anyone who enters the same username is treated as that user.
- **Scalability**: The current implementation loads all questions into memory/redux. For a production app with thousands of posts, pagination and server-side filtering would be required.

## Running

```sh
bun install
bun start
press s switch to Expo Go / Development Build
```

## Linting

```sh
bun run lint
bun run lint:fix
```

## Resources

- React Navigation: https://reactnavigation.org/
- Expo: https://docs.expo.dev/
