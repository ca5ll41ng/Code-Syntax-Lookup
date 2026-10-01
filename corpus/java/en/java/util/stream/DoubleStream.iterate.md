---
id: "java-en-function-doublestream-iterate"
language: "java"
lang: "en"
category: "function"
name: "DoubleStream.iterate"
signature: "public static DoubleStream iterate(final double seed, final DoubleUnaryOperator f)"
title: "DoubleStream.iterate"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/DoubleStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DoubleStream.iterate

```java
public static DoubleStream iterate(final double seed, final DoubleUnaryOperator f)
```

Returns an infinite sequential ordered `DoubleStream` produced by iterative
 application of a function `f` to an initial element `seed`,
 producing a `Stream` consisting of `seed`, `f(seed)`,
 `f(f(seed))`, etc.

 

The first element (position `0`) in the `DoubleStream`
 will be the provided `seed`.  For `n > 0`, the element at
 position `n`, will be the result of applying the function `f`
  to the element at position `n - 1`.

 

The action of applying `f` for one element
 happens-before
 the action of applying `f` for subsequent elements.  For any given
 element the action may be performed in whatever thread the library
 chooses.

**参数**

- **seed** — the initial element
- **f** — a function to be applied to the previous element to produce a new element

**返回**

- a new sequential `DoubleStream`
