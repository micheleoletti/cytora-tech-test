# Cytora tech test

App that displays Star Wars data.
[Interactive demo](https://cytora-tech-test.vercel.app/)

Tech stack:

- React framework: **Next.js**
- UI library: **ChakraUI**
- caching layer for the API requests: **SWR**
- network requests: **Axios**

## How to build it

### Local

If you do already have `npm` locally, then you can just:

- `cd cytora-test`
- `npm i`

### Dev container

If you do not have `npm` locally but you do have Docker, you can leverage the dev container the project is built into.

- In VS Code, download the Remote - Containers extension [(https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)]()
- Open Command Palette and run `Rebuild and Reopen in Container`
- `cd cytora-test`
- `npm i`

## How to run it

You can either:

- launch the project in debug with the predefined vscode launch settings (debug + hot-reload)
- `npm run dev` (hot-reload only)
- `npm run build` and then `npm start`(optimized, no compiling at runtime)

## What would I have done with more time

Missing features:

- skeleton instead of spinner for loading feedback
- search input debounce to reduce useless API requests
- improve search overlay UX, more standardized
- implement layouts properly
- improve overall UI
- memoize functions exposed by context to avoid function redeclaration at each render
