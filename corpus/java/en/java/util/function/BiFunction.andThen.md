---
id: "java-en-function-bifunction-andthen"
language: "java"
lang: "en"
category: "function"
name: "BiFunction.andThen"
signature: "default <V> BiFunction<T, U, V> andThen(Function<? super R, ? extends V> after)"
title: "BiFunction.andThen"
directive: "method"
module: "java.base/java.util.function"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/BiFunction.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BiFunction.andThen

```java
default <V> BiFunction<T, U, V> andThen(Function<? super R, ? extends V> after)
```

Returns a composed function that first applies this function to
 its input, and then applies the `after` function to the result.
 If evaluation of either function throws an exception, it is relayed to
 the caller of the composed function.

**参数**

- **the** — type of output of the `after` function, and of the composed function
- **after** — the function to apply after this function is applied

**返回**

- a composed function that first applies this function and then applies the `after` function

**异常**

- **NullPointerException** — if after is null
