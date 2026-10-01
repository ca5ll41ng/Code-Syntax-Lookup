---
id: "java-en-function-collectors-toset"
language: "java"
lang: "en"
category: "function"
name: "Collectors.toSet"
signature: "public static <T> Collector<T, ?, Set<T>> toSet()"
title: "Collectors.toSet"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.toSet

```java
public static <T> Collector<T, ?, Set<T>> toSet()
```

Returns a `Collector` that accumulates the input elements into a
 new `Set`. There are no guarantees on the type, mutability,
 serializability, or thread-safety of the `Set` returned; if more
 control over the returned `Set` is required, use
 `toCollection`.

 

This is an `UNORDERED unordered`
 Collector.

**参数**

- **the** — type of the input elements

**返回**

- a `Collector` which collects all the input elements into a `Set`
