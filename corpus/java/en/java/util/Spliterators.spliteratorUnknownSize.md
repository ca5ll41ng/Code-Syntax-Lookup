---
id: "java-en-function-spliterators-spliteratorunknownsize"
language: "java"
lang: "en"
category: "function"
name: "Spliterators.spliteratorUnknownSize"
signature: "public static <T> Spliterator<T> spliteratorUnknownSize(Iterator<? extends T> iterator, int characteristics)"
title: "Spliterators.spliteratorUnknownSize"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterators.spliteratorUnknownSize

```java
public static <T> Spliterator<T> spliteratorUnknownSize(Iterator<? extends T> iterator, int characteristics)
```

Creates a `Spliterator` using a given `Iterator`
 as the source of elements, with no initial size estimate.

 

The spliterator is not
 late-binding, inherits
 the fail-fast properties of the iterator, and implements
 `trySplit` to permit limited parallelism.

 

Traversal of elements should be accomplished through the spliterator.
 The behaviour of splitting and traversal is undefined if the iterator is
 operated on after the spliterator is returned.

**参数**

- **Type** — of elements
- **iterator** — The iterator for the source
- **characteristics** — Characteristics of this spliterator's source or elements (`SIZED` and `SUBSIZED`, if supplied, are ignored and are not reported.)

**返回**

- A spliterator from an iterator

**异常**

- **NullPointerException** — if the given iterator is `null`
