---
id: "java-en-function-reduceops-makeref"
language: "java"
lang: "en"
category: "function"
name: "ReduceOps.makeRef"
signature: "public static <T, U> TerminalOp<T, U> makeRef(U seed, BiFunction<U, ? super T, U> reducer, BinaryOperator<U> combiner)"
title: "ReduceOps.makeRef"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/ReduceOps.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ReduceOps.makeRef

```java
public static <T, U> TerminalOp<T, U> makeRef(U seed, BiFunction<U, ? super T, U> reducer, BinaryOperator<U> combiner)
```

Constructs a `TerminalOp` that implements a functional reduce on
 reference values.

**参数**

- **the** — type of the input elements
- **the** — type of the result
- **seed** — the identity element for the reduction
- **reducer** — the accumulating function that incorporates an additional input element into the result
- **combiner** — the combining function that combines two intermediate results

**返回**

- a `TerminalOp` implementing the reduction
