---
id: "java-en-function-collectors-tounmodifiablelist"
language: "java"
lang: "en"
category: "function"
name: "Collectors.toUnmodifiableList"
signature: "public static <T> Collector<T, ?, List<T>> toUnmodifiableList()"
title: "Collectors.toUnmodifiableList"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.toUnmodifiableList

```java
public static <T> Collector<T, ?, List<T>> toUnmodifiableList()
```

Returns a `Collector` that accumulates the input elements into an
 unmodifiable List in encounter
 order. The returned Collector disallows null values and will throw
 `NullPointerException` if it is presented with a null value.

**参数**

- **the** — type of the input elements

**返回**

- a `Collector` that accumulates the input elements into an unmodifiable List in encounter order

> *Since 10*
