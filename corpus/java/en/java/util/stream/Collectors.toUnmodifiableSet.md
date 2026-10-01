---
id: "java-en-function-collectors-tounmodifiableset"
language: "java"
lang: "en"
category: "function"
name: "Collectors.toUnmodifiableSet"
signature: "public static <T> Collector<T, ?, Set<T>> toUnmodifiableSet()"
title: "Collectors.toUnmodifiableSet"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.toUnmodifiableSet

```java
public static <T> Collector<T, ?, Set<T>> toUnmodifiableSet()
```

Returns a `Collector` that accumulates the input elements into an
 unmodifiable Set. The returned
 Collector disallows null values and will throw `NullPointerException`
 if it is presented with a null value. If the input contains duplicate elements,
 an arbitrary element of the duplicates is preserved.

 

This is an `UNORDERED unordered`
 Collector.

**参数**

- **the** — type of the input elements

**返回**

- a `Collector` that accumulates the input elements into an unmodifiable Set

> *Since 10*
