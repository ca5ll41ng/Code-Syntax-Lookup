---
id: "java-en-function-collectors-tolist"
language: "java"
lang: "en"
category: "function"
name: "Collectors.toList"
signature: "public static <T> Collector<T, ?, List<T>> toList()"
title: "Collectors.toList"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.toList

```java
public static <T> Collector<T, ?, List<T>> toList()
```

Returns a `Collector` that accumulates the input elements into a
 new `List`. There are no guarantees on the type, mutability,
 serializability, or thread-safety of the `List` returned; if more
 control over the returned `List` is required, use `toCollection`.

**参数**

- **the** — type of the input elements

**返回**

- a `Collector` which collects all the input elements into a `List`, in encounter order
