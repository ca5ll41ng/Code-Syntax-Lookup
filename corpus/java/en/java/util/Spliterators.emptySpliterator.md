---
id: "java-en-function-spliterators-emptyspliterator"
language: "java"
lang: "en"
category: "function"
name: "Spliterators.emptySpliterator"
signature: "public static <T> Spliterator<T> emptySpliterator()"
title: "Spliterators.emptySpliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterators.emptySpliterator

```java
public static <T> Spliterator<T> emptySpliterator()
```

Creates an empty `Spliterator`

 

The empty spliterator reports `SIZED` and
 `SUBSIZED`.  Calls to
 `trySplit` always return `null`.

**参数**

- **Type** — of elements

**返回**

- An empty spliterator
