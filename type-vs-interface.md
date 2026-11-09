# TypeScript-এ `type` বনাম `interface`: কোনটি কখন ব্যবহার করবেন?

## ভূমিকা

TypeScript-এ ডেটার গঠন (shape) বর্ণনা করার জন্য প্রধানত দুটি উপায় আছে: `type` alias এবং `interface`। সাধারণ object-এর ক্ষেত্রে দুটোকে প্রায় একই মনে হয়, কিন্তু কিছু গুরুত্বপূর্ণ জায়গায় এদের আচরণ আলাদা। এই পার্থক্যগুলো জানলে কোড আরও পরিষ্কার ও রক্ষণাবেক্ষণযোগ্য হয়।

## মূল পার্থক্য

**১. Extending:** `interface` ব্যবহার করে `extends`, আর `type` একাধিক shape জোড়া লাগায় intersection (`&`) দিয়ে।

```ts
interface Animal { name: string }
interface Dog extends Animal { breed: string }

type AnimalT = { name: string };
type DogT = AnimalT & { breed: string };
```

**২. Declaration merging:** একই নামে দুইবার `interface` লিখলে TypeScript সেগুলো নিজে থেকেই মার্জ করে দেয়। কিন্তু `type` একই নামে দুইবার ঘোষণা করলে error দেয়।

```ts
interface User { id: number }
interface User { email: string }
// এখন User-এ id ও email দুটোই আছে
```

**৩. নমনীয়তা:** `type` দিয়ে union, primitive ও tuple বানানো যায়। `interface` শুধু object-এর shape বর্ণনা করতে পারে।

```ts
type ID = string | number;
type Point = [number, number];
```

## কখন কোনটি বেছে নেবেন

Object shape, class contract (`implements`) এবং public library API-এর জন্য `interface` ভালো, কারণ declaration merging দিয়ে ব্যবহারকারীরা টাইপ বাড়াতে পারে। Union, tuple, mapped type কিংবা সাধারণ object-এর চেয়ে জটিল কিছুর জন্য `type` ব্যবহার করুন।

## উপসংহার

দুটি টুলের কাজ অনেকটা মিলে যায়, তাই টিমের মধ্যে একটি নিয়ম মেনে চলাই সবচেয়ে গুরুত্বপূর্ণ। সহজ নিয়ম হলো: object-এর জন্য ডিফল্টভাবে `interface` নিন, আর বাড়তি ক্ষমতা লাগলে `type` ব্যবহার করুন।