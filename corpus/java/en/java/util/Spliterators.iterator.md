---
id: "java-en-function-spliterators-iterator"
language: "java"
lang: "en"
category: "function"
name: "Spliterators.iterator"
signature: "public static<T> Iterator<T> iterator(Spliterator<? extends T> spliterator)"
title: "Spliterators.iterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Spliterators.iterator

```java
public static<T> Iterator<T> iterator(Spliterator<? extends T> spliterator)
```

Creates an `Iterator` from a `Spliterator`.

 

Traversal of elements should be accomplished through the iterator.
 The behaviour of traversal is undefined if the spliterator is operated
 after the iterator is returned.

**参数**

- **Type** — of elements
- **spliterator** — The spliterator

**返回**

- An iterator

**异常**

- **NullPointerException** — if the given spliterator is `null`
