---
id: "java-en-function-arrays-parallelprefix"
language: "java"
lang: "en"
category: "function"
name: "Arrays.parallelPrefix"
signature: "public static <T> void parallelPrefix(T[] array, BinaryOperator<T> op)"
title: "Arrays.parallelPrefix"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.parallelPrefix

```java
public static <T> void parallelPrefix(T[] array, BinaryOperator<T> op)
```

Cumulates, in parallel, each element of the given array in place,
 using the supplied function. For example if the array initially
 holds `[2, 1, 0, 3]` and the operation performs addition,
 then upon return the array holds `[2, 3, 3, 6]`.
 Parallel prefix computation is usually more efficient than
 sequential loops for large arrays.

**参数**

- **the** — class of the objects in the array
- **array** — the array, which is modified in-place by this method
- **op** — a side-effect-free, associative function to perform the cumulation

**异常**

- **NullPointerException** — if the specified array or function is null

> *Since 1.8*
