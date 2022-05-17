# Device Dashboard

This is a sample project showing approaches to building simple user interfaces.

## Technologies

- UI built with [React](https://reactjs.org) library.
- [TypeScript](https://www.typescriptlang.org/) for static type checking at compile time.
- [Parcel](https://parceljs.org) for building and developing the application.
- [TailwindCSS](https://tailwindcss.com) as CSS framework.
- [SWR](https://swr.vercel.app) to manage client-side data.

## Getting Started

This project uses the [pnpm](https://pnpm.io) package manager to manage JavaScript dependencies.

```shell
$ pnpm install
$ pnpm start
```

If you don't have pnpm install, yarn or npm will probably work with the equivalent commands, but it will add a lockfile separate from the one committed to the repository.

## Deploying

This project simply outputs static assets which can be deployed to many different environments.

A trivial example would be using `serve`.

```shell
$ parcel build
$ serve -s dist
```

## Directory Structure

```
.
├── dist
└── src
    ├── components
    ├── data
    ├── helpers
    ├── hooks
    └── pages
```

- `dist` - Final build product from running `parcel build`.
- `components` - Generic and re-usable components.
- `pages` - Top-level logical components which match a particular route.
- `hooks` - Re-usable React hooks.
- `helpers` - Generic helper methods to support aspects such as rendering logic.
- `data` - Contains sample application data.

## Requirements and List of Incomplete Tasks

- Add tests using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/).
- Implement some remaining features such as the ability to add comments to change events.
- Improve styling such as margins on main dashboard page and generally the device detail page.
