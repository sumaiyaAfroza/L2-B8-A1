# TypeScript-এ Union ও Intersection Type একসাথে ব্যবহার

## ভূমিকা

Union (`|`) type মানে "এগুলোর যেকোনো একটি", আর intersection (`&`) type মানে "এগুলোর সব একসাথে"। দুটো একসাথে ব্যবহার করলে বাস্তব জীবনের ডেটা নিখুঁতভাবে মডেল করা যায়। একটি বাস্তব উদাহরণ হলো event সিস্টেম, যেখানে সব event-এর কিছু সাধারণ field থাকে, আবার প্রতিটির নিজস্ব ডেটাও থাকে।


# TypeScript: Union (|) ও Intersection (&) একসাথে ব্যবহার

## ধারণা

- **Union (`|`)** = "যেকোনো একটি"
- **Intersection (`&`)** = "সব একসাথে"

দুটো একসাথে ব্যবহার করলে বাস্তব ডেটা সুন্দরভাবে মডেল করা যায়। যেমন — একটা **event system**, যেখানে সব event-এ কিছু common field থাকে, আবার প্রতিটার নিজস্ব ডেটাও থাকে।

---

## Type বানানো

আগে common field গুলো আলাদা করি, তারপর `&` দিয়ে প্রতিটার নিজস্ব field যোগ করি, শেষে `|` দিয়ে বলি event এই variant গুলোর যেকোনো একটা হতে পারে।

```typescript
// সব event-এ common field
type BaseEvent = {
  id: string;
  timestamp: number;
  source: "web" | "mobile" | "api";
};

// & দিয়ে base + নিজস্ব field
type ClickEvent = BaseEvent & {
  type: "click";
  x: number;
  y: number;
};

type KeyEvent = BaseEvent & {
  type: "key";
  key: string;
  modifiers: string[];
};

type ScrollEvent = BaseEvent & {
  type: "scroll";
  deltaY: number;
};

// | দিয়ে সম্ভাব্য variant
type AppEvent = ClickEvent | KeyEvent | ScrollEvent;
```

## Type তৈরি করা

প্রথমে সাধারণ field-গুলো নির্ধারণ করুন। তারপর intersection (`&`) দিয়ে প্রতিটি event-এর নিজস্ব field যোগ করুন। শেষে union (`|`) দিয়ে বলুন যে একটি event এই variant-গুলোর যেকোনো একটি হতে পারে।

```ts
type BaseEvent = { id: string; timestamp: number };

type ClickEvent = BaseEvent & { type: "click"; x: number; y: number };
type KeyEvent = BaseEvent & { type: "key"; key: string };

type AppEvent = ClickEvent | KeyEvent;
```

এখানে `ClickEvent`-এ আছে `id`, `timestamp`, `type`, `x` ও `y`। আর `AppEvent` হতে পারে `ClickEvent` অথবা `KeyEvent`।

## নিরাপদে ব্যবহার

`type` field-টি discriminant হিসেবে কাজ করে, ফলে condition-এর ভেতরে TypeScript union-টিকে narrow করতে পারে।

```ts
function handle(e: AppEvent) {
  console.log(e.id); // নিরাপদ: সব variant-এ আছে

  if (e.type === "click") {
    console.log(e.x, e.y); // এখন ClickEvent
  } else {
    console.log(e.key); // এখন KeyEvent
  }
}
```

Narrowing ছাড়া `e.x` ব্যবহার করলে compile-time error আসবে, কারণ `KeyEvent`-এ `x` নেই।

## উপসংহার

Intersection সাধারণ field বারবার লেখা থেকে বাঁচায়, আর union সম্ভাব্য variant-গুলো বর্ণনা করে। দুটো মিলিয়ে পুনরায় ব্যবহারযোগ্য ও type-safe মডেল পাওয়া যায়, এবং runtime-এর আগেই compiler ভুল ধরে ফেলে।