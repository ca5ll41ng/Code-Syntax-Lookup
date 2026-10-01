---
id: "java-en-function-intstream-iterate"
language: "java"
lang: "en"
category: "function"
name: "IntStream.iterate"
signature: "public static IntStream iterate(final int seed, final IntUnaryOperator f)"
title: "IntStream.iterate"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/IntStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntStream.iterate

```java
public static IntStream iterate(final int seed, final IntUnaryOperator f)
```

Returns an infinite sequential ordered `IntStream` produced by iterative
 application of a function `f` to an initial element `seed`,
 producing a `Stream` consisting of `seed`, `f(seed)`,
 `f(f(seed))`, etc.

 

The first element (position `0`) in the `IntStream` will be
 the provided `seed`.  For `n > 0`, the element at position
 `n`, will be the result of applying the function `f` to the
 element at position `n - 1`.

 

The action of applying `f` for one element
 happens-before
 the action of applying `f` for subsequent elements.  For any given
 element the action may be performed in whatever thread the library
 chooses.

**参数**

- **seed** — the initial element
- **f** — a function to be applied to the previous element to produce a new element

**返回**

- a new sequential `IntStream`
