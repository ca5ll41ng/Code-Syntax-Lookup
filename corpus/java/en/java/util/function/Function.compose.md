---
id: "java-en-function-function-compose"
language: "java"
lang: "en"
category: "function"
name: "Function.compose"
signature: "default <V> Function<V, R> compose(Function<? super V, ? extends T> before)"
title: "Function.compose"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/Function.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Function.compose

```java
default <V> Function<V, R> compose(Function<? super V, ? extends T> before)
```

Returns a composed function that first applies the `before`
 function to its input, and then applies this function to the result.
 If evaluation of either function throws an exception, it is relayed to
 the caller of the composed function.

**参数**

- **the** — type of input to the `before` function, and to the composed function
- **before** — the function to apply before this function is applied

**返回**

- a composed function that first applies the `before` function and then applies this function

**异常**

- **NullPointerException** — if before is null

**参见**

- #andThen(Function)
