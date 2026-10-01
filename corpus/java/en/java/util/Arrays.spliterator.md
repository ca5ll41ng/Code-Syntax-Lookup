---
id: "java-en-function-arrays-spliterator"
language: "java"
lang: "en"
category: "function"
name: "Arrays.spliterator"
signature: "public static <T> Spliterator<T> spliterator(T[] array)"
title: "Arrays.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.spliterator

```java
public static <T> Spliterator<T> spliterator(T[] array)
```

Returns a `Spliterator` covering all of the specified array.

 

The spliterator reports `SIZED`,
 `SUBSIZED`, `ORDERED`, and
 `IMMUTABLE`.

**参数**

- **type** — of elements
- **array** — the array, assumed to be unmodified during use

**返回**

- a spliterator for the array elements

> *Since 1.8*
