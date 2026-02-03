# StackUnderflow Mobile

A React Native app built with Expo, React Navigation, and Bun. The project uses a modular structure with typed APIs, reusable UI components, and alias-based imports.

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
│   │   └── index.ts
│   ├── navigation
│   │   ├── tab/
│   │   │   ├── BottomTab.tsx
│   │   │   ├── HotelTabNavigator.tsx
│   │   │   └── WorkerTabNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   ├── HotelNavigator.tsx
│   │   ├── RootNavigator.tsx
│   │   └── WorkerNavigator.tsx
│   ├── screens
│   │   ├── auth/
│   │   ├── hotel/
│   │   ├── worker/
│   │   ├── shared/
│   │   └── index.ts
│   ├── store
│   │   ├── slice/
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
