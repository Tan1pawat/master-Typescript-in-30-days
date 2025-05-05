TypeScript Mastery Program: 1-Month Plan
Program Overview

Duration: 4 weeks, 2–3 hours daily.
Prerequisites: Basic JavaScript (variables, functions, arrays, objects, ES6).
Tools: Node.js, TypeScript (npm install -g typescript), VS Code, TypeScript Playground.
Goal: Gain proficiency in TypeScript fundamentals, advanced features, and real-world applications.

Week 1: Fundamentals and Setup
Focus: Learn TypeScript basics, setup, and core typing concepts.
Day 1: Introduction and Setup

Learn (1 hr):
What is TypeScript? Why use it?
Install Node.js, TypeScript, and VS Code.
Configure tsconfig.json (strict: true, target: "ESNext", module: "ESNext").


Practice (1 hr):
Create a simple TypeScript file (hello.ts).
Write a function with type annotations (e.g., greet(name: string): string).
Compile and run using tsc and node.


Resource: TypeScript Handbook: Basics.

Day 2: Basic Types and Type Annotations

Learn (1 hr):
Primitive types: string, number, boolean, null, undefined.
Arrays and tuples.
Type annotations for variables and functions.


Practice (1–2 hrs):
Write functions with typed parameters and return types.
Create arrays with specific types (e.g., string[], Array<number>).
Experiment with any and unknown types.


Task: Write a function to calculate the average of a number[].

Day 3: Interfaces and Type Aliases

Learn (1 hr):
Define interfaces for object shapes.
Use type aliases for custom types.
Union types (string | number) and literal types.


Practice (1–2 hrs):
Create an interface for a User (e.g., name: string, age: number).
Write a function that accepts a User or null.
Use union types for a function that handles multiple input types.


Task: Create a type alias for a Point (x, y coordinates) and write a function to calculate distance.

Day 4: Enums and Type Inference

Learn (1 hr):
Numeric and string enums.
How TypeScript infers types.
void and never types.


Practice (1–2 hrs):
Create an enum for Direction (Up, Down, Left, Right).
Write a function that uses the enum as a parameter.
Experiment with type inference in simple assignments.


Task: Write a function that returns never (e.g., throws an error).

Day 5: Mini-Project: Task List CLI

Project (2–3 hrs):
Build a command-line task list app using TypeScript.
Features:
Define a Task interface (id: number, title: string, completed: boolean).
Create functions to add, list, and complete tasks.
Use arrays and type annotations.


Use prompt-sync (JavaScript library) for user input.


Goal: Apply types, interfaces, and functions in a small app.

Day 6: Review and TypeScript Playground

Review (1 hr):
Revisit tsconfig.json settings.
Explore TypeScript Playground for quick experiments.


Practice (1–2 hrs):
Fix type errors in sample code from TypeScript Playground.
Rewrite a JavaScript function in TypeScript with strict typing.


Task: Convert a JavaScript object to use an interface.

Day 7: Rest or Catch-Up

Optional: Review weak areas or complete unfinished tasks.
Resource: TypeScript Exercises.

Week 2: Intermediate Concepts and Tooling
Focus: Deepen understanding with generics, type narrowing, and project setup.
Day 8: Generics

Learn (1 hr):
Create generic functions and interfaces.
Use constraints (extends).


Practice (1–2 hrs):
Write a generic function to reverse an array (<T>).
Create a generic Box<T> interface to store a value.


Task: Write a generic function to merge two objects.

Day 9: Type Narrowing and Type Guards

Learn (1 hr):
Use typeof, instanceof, and in for narrowing.
Write custom type guards with is.


Practice (1–2 hrs):
Write a function that handles string | number with narrowing.
Create a type guard for a User interface.


Task: Write a function to process different shapes (circle, square) using discriminated unions.

Day 10: Utility Types and Index Signatures

Learn (1 hr):
Use Partial, Pick, Omit, Record.
Define index signatures for dynamic objects.


Practice (1–2 hrs):
Create a Partial<User> for optional updates.
Use Record to map strings to numbers.


Task: Write a function to filter an object’s properties using Pick.

Day 11: Tooling and Modules

Learn (1 hr):
Configure esModuleInterop and moduleResolution.
Use ES Modules (import/export).
Write declaration files (.d.ts).


Practice (1–2 hrs):
Set up a project with multiple TypeScript files.
Create a .d.ts file for a JavaScript module.


Task: Organize a small app into modules.

Day 12: Mini-Project: API Client

Project (2–3 hrs):
Build a TypeScript app to fetch data from a public API (e.g., JSONPlaceholder).
Features:
Define interfaces for API responses.
Use fetch with typed responses.
Handle errors with type guards.


Use axios or fetch with proper typings.


Goal: Apply generics, interfaces, and error handling.

Day 13: Review and Type Challenges

Review (1 hr):
Revisit generics and type narrowing.


Practice (1–2 hrs):
Solve 2–3 problems on Type Challenges.


Task: Implement a generic Pick utility type.

Day 14: Rest or Catch-Up

Optional: Explore @types packages or revisit projects.

Week 3: Advanced Concepts and Frameworks
Focus: Master advanced types and integrate with frameworks.
Day 15: Advanced Generics and Conditional Types

Learn (1 hr):
Generic constraints and defaults.
Conditional types (T extends U ? X : Y).


Practice (1–2 hrs):
Write a conditional type to extract specific properties.
Create a generic function with constraints.


Task: Implement a type that filters union types.

Day 16: Mapped Types and Template Literals

Learn (1 hr):
Create mapped types ({ [K in keyof T]: Type }).
Use template literal types for string manipulation.


Practice (1–2 hrs):
Create a mapped type to make properties readonly.
Write a template literal type for CSS properties.


Task: Create a type that prefixes all keys in an object.

Day 17: TypeScript with React

Learn (1 hr):
Set up TypeScript with React (create-react-app or Vite).
Type props, state, and hooks.


Practice (1–2 hrs):
Create a typed React component with props.
Use useState and useEffect with types.


Task: Build a counter component with typed state.

Day 18: TypeScript with Node.js

Learn (1 hr):
Set up TypeScript with Node.js and Express.
Type Express routes and middleware.


Practice (1–2 hrs):
Create a simple Express server with typed routes.
Use @types/express for typings.


Task: Write a typed API endpoint to return users.

Day 19: Mini-Project: Todo App with React

Project (2–3 hrs):
Build a todo app using React and TypeScript.
Features:
Define a Todo interface.
Use typed hooks for state management.
Add, delete, and toggle todos.


Persist todos in localStorage with typed functions.


Goal: Apply TypeScript in a frontend framework.

Day 20: Review and Debugging

Review (1 hr):
Common TypeScript errors (e.g., TS2322).
Debugging with VS Code.


Practice (1–2 hrs):
Fix type errors in a sample React or Node.js app.


Task: Analyze a TypeScript error in TypeScript Playground.

Day 21: Rest or Catch-Up

Optional: Explore TypeScript with other frameworks (e.g., Vue, Angular).

Week 4: Real-World Applications and Polish
Focus: Apply to solidify skills and build a portfolio project.
Day 22: Database Integration

Learn (1 hr):
Use TypeScript with ORMs (e.g., TypeORM, Prisma).
Type database models and queries.


Practice (1–2 hrs):
Set up a simple database with Prisma.
Write typed queries to fetch data.


Task: Create a typed model for a Post entity.

Day 23: GraphQL with TypeScript

Learn (1 hr):
Set up Apollo Server or GraphQL Yoga.
Type GraphQL resolvers and schemas.


Practice (1–2 hrs):
Create a simple GraphQL API with typed queries.


Task: Write a typed query to fetch users.

Day 24: Best Practices and Performance

Learn (1 hr):
Avoid any and ensure type safety.
Optimize TypeScript compilation.


Practice (1–2 hrs):
Refactor a project to remove any types.
Experiment with noImplicitAny in tsconfig.json.


Task: Audit a previous project for type safety.

Day 25: Testing with TypeScript

Learn (1 hr):
Set up Jest with TypeScript.
Write typed tests for functions.


Practice (1–2 hrs):
Write unit tests for a function from a previous project.


Task: Test a generic function with Jest.

Day 26: Portfolio Project: Full-Stack App

Project (2–3 hrs, continues to Day 28):
Build a full-stack app (e.g., blog or e-commerce).
Features:
Backend: Node.js, Express, Prisma, GraphQL.
Frontend: React with TypeScript.
Typed API endpoints and database models.
Deploy to Vercel or Render.


Plan and start coding.



Day 27: Portfolio Project (Continued)

Continue (2–3 hrs):
Implement frontend components with typed props.
Connect frontend to backend with typed API calls.
Add error handling with type guards.



Day 28: Portfolio Project Completion

Finish (2–3 hrs):
Polish UI and add tests.
Deploy the app.
Document the project in a README with TypeScript highlights.


Goal: Create a portfolio-worthy project showcasing TypeScript skills.

Day 29: Review and Type Challenges

Review (1 hr):
Revisit advanced types and frameworks.


Practice (1–2 hrs):
Solve advanced problems on Type Challenges.


Task: Implement a complex conditional type.

Day 30: Wrap-Up and Next Steps

Reflect (1 hr):
Review all projects and note areas for improvement.
Share your portfolio project on GitHub or X.


Plan (1–2 hrs):

Explore advanced topics (e.g., compiler API, monorepos).

Contribute to an open-source TypeScript project.

Resource: Awesome TypeScript.


Tips for Success

Daily Practice: Code every day, even if briefly.
Debug Actively: Use TypeScript Playground and VS Code for error resolution.
Community: Join TypeScript Discord or follow TypeScript on X.
Resources:
TypeScript Handbook.
Type Challenges.
Total TypeScript.


Portfolio: Host projects on GitHub and deploy them for visibility.

By following this program, you’ll gain a strong foundation in TypeScript and build a portfolio to showcase your skills. Adjust the pace based on your progress, and happy coding!
