# TypeScript & OOP Assignment

Solutions for **Module 4: Assignment-1 (Problem Solving with TypeScript & OOP)**.

## Overview

This assignment assesses practical understanding of core TypeScript concepts from Modules 1, 2, and 3: basic types, optional, default and rest parameters, readonly tuples, interfaces, type narrowing, generics, Promises, and Object-Oriented Programming.

It has two parts:

- **Problem Solving (50 marks):** eight problems, all solved in a single file, `solutions.ts`.
- **Blog Task (10 marks):** two technical blog posts on TypeScript topics.

### Coding Standards Followed

- Explicit parameter and return types on every function and class method
- Exact function, interface, and class names as specified in the problems
- Return values match the sample outputs exactly, including spaces, punctuation, and capitalization
- No use of `any`
- No `console.log` statements or sample test calls in `solutions.ts`

## Problem Solving Summary

### 1. `multiplyValue`
Takes a number and an optional multiplier. Returns the value multiplied by the multiplier, or by `2` when no multiplier is given. A multiplier of `0` is handled correctly and returns `0`, because the check is against `undefined` rather than a falsy value.

### 2. `processInput`
Accepts a `string | number | boolean` and uses `typeof` type narrowing to handle each case:
- string: trimmed and converted to lowercase
- number: multiplied by `10`
- boolean: `"Active"` for `true`, `"Inactive"` for `false`

### 3. `formatCoordinate`
Takes a `readonly [number, number, string]` tuple (`latitude`, `longitude`, `locationName`) and returns the formatted string `Location: Dhaka (23.81, 90.41)`. The `readonly` modifier prevents the tuple from being mutated, and the numbers are not rounded.

### 4. `concatenateArrays`
A generic function using `<T>` and rest parameters (`...arrays: T[][]`). It combines any number of arrays of the same type into one array, preserving the original order.

### 5. `Course` interface and `getPopularCourses`
Defines a `Course` interface (`title`, `students`, `isPublished`). The function returns a new array containing only published courses with at least the minimum number of students, using `filter` so the original array is not mutated.

### 6. `pluckValues`
A generic function with a `keyof` constraint (`<T, K extends keyof T>`). It extracts the values of one property from an array of objects and returns them as `T[K][]`, keeping the property type safe.

### 7. `Employee` and `Manager` classes
Demonstrates inheritance and access modifiers:
- `Employee` has a `protected` name and a `private` base salary, and a `getDetails()` method
- `Manager` extends `Employee`, adds a `private` department, calls `super(name, baseSalary)`, and provides `getRoleInfo()`

### 8. `validateAgeAsync`
An async function returning `Promise<string>`. For ages 18 and above it resolves with `"Access Granted"` after 1 second using `setTimeout`. For ages under 18 it rejects immediately with `new Error("Access Denied: Must be 18 or older")`.


## Project Structure

```
├── solutions.ts
├── type-vs-interface.md
├── union-intersection.md
└── README.md
```

## Blog Posts

1. [Type Aliases vs Interfaces in TypeScript](./type-vs-interface.md): the core differences between `type` and `interface`, and when to choose each
2. [Combining Union and Intersection Types in TypeScript](.//union-and-intersection.md)using `|` and `&` together

## Blog Links
- [Blog 1](./type-vs-interface.md)
- [Blog 2](./union-and-intersection.md)