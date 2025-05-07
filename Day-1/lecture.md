  - What is TypeScript? Why use it?
    1. TypeScript is superset of JavaScript that add on static typing
    2. TypeScript check at compile time not "Runtime"
  - Install Node.js, TypeScript, and VS Code.
    1. install TS with npm or you can using other like bun, deno etc.

    ```
    npm install typescript --save-dev
    ```

    2. check package version

    ```
    npx tsc --version
    ```

    3. create a new project folder and navigate to it
    ```
    npx tsc --init
    ```
  - Configure tsconfig.json (strict: true, target: "ESNext", module: "ESNext").