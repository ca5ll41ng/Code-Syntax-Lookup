---
id: "java-en-function-set-spliterator"
language: "java"
lang: "en"
category: "function"
name: "Set.spliterator"
signature: "default Spliterator<E> spliterator()"
title: "Set.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Set.spliterator

```java
default Spliterator<E> spliterator()
```

Creates a `Spliterator` over the elements in this set.

 

The `Spliterator` reports `DISTINCT`.
 Implementations should document the reporting of additional
 characteristic values.

 The default implementation creates a
 late-binding spliterator
 from the set's `Iterator`.  The spliterator inherits the
 fail-fast properties of the set's iterator.
 

 The created `Spliterator` additionally reports
 `SIZED`.

 The created `Spliterator` additionally reports
 `SUBSIZED`.

**返回**

- a `Spliterator` over the elements in this set

> *Since 1.8*
