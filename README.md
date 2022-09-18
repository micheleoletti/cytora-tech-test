# Cytora tech test

## How to build the project

The project was built inside a Node dev container, so it's very easy to get started.

- In VS Code, download the Remote - Containers extension [(https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)]()
- Open Command Palette and run `Rebuild and Reopen in Container`
- `cd cytora-test`
- `npm i`

Now you can either:

- launch the project in debug with the predefined vscode launch settings
- `npm run dev`
- `npm run build` and then `npm start`

## What would I have done with more time

Missing features:

- skeleton instead of spinner for loading feedback
- search input debounce to reduce useless API requests
- improve search overlay UX, more standardized
- implement layouts properly
- improve overall UI
- memoize functions exposed by context to avoid function redeclaration at each render
