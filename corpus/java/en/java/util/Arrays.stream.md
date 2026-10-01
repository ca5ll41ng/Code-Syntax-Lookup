---
id: "java-en-function-arrays-stream"
language: "java"
lang: "en"
category: "function"
name: "Arrays.stream"
signature: "public static <T> Stream<T> stream(T[] array)"
title: "Arrays.stream"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Arrays.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Arrays.stream

```java
public static <T> Stream<T> stream(T[] array)
```

Returns a sequential `Stream` with the specified array as its
 source.

**参数**

- **The** — type of the array elements
- **array** — The array, assumed to be unmodified during use

**返回**

- a `Stream` for the array

> *Since 1.8*
