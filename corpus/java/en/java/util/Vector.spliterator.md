---
id: "java-en-function-vector-spliterator"
language: "java"
lang: "en"
category: "function"
name: "Vector.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "Vector.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Vector.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Vector.spliterator

```java
public Spliterator<E> spliterator()
```

Creates a late-binding
 and fail-fast `Spliterator` over the elements in this
 list.

 

The `Spliterator` reports `SIZED`,
 `SUBSIZED`, and `ORDERED`.
 Overriding implementations should document the reporting of additional
 characteristic values.

**返回**

- a `Spliterator` over the elements in this list

> *Since 1.8*
