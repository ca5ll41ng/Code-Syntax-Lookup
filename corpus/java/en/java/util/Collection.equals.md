---
id: "java-en-function-collection-equals"
language: "java"
lang: "en"
category: "function"
name: "Collection.equals"
signature: "boolean equals(Object o)"
title: "Collection.equals"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collection.equals

```java
boolean equals(Object o)
```

Compares the specified object with this collection for equality. 

 While the `Collection` interface adds no stipulations to the
 general contract for the `Object.equals`, programmers who
 implement the `Collection` interface "directly" (in other words,
 create a class that is a `Collection` but is not a `Set`
 or a `List`) must exercise care if they choose to override the
 `Object.equals`.  It is not necessary to do so, and the simplest
 course of action is to rely on `Object`'s implementation, but
 the implementor may wish to implement a "value comparison" in place of
 the default "reference comparison."  (The `List` and
 `Set` interfaces mandate such value comparisons.)

 The general contract for the `Object.equals` method states that
 equals must be symmetric (in other words, `a.equals(b)` if and
 only if `b.equals(a)`).  The contracts for `List.equals`
 and `Set.equals` state that lists are only equal to other lists,
 and sets to other sets.  Thus, a custom `equals` method for a
 collection class that implements neither the `List` nor
 `Set` interface must return `false` when this collection
 is compared to any list or set.  (By the same logic, it is not possible
 to write a class that correctly implements both the `Set` and
 `List` interfaces.)

**参数**

- **o** — object to be compared for equality with this collection

**返回**

- `true` if the specified object is equal to this collection

**参见**

- Object#equals(Object)
- Set#equals(Object)
- List#equals(Object)
