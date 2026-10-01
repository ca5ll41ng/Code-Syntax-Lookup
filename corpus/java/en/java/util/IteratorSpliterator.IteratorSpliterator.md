---
id: "java-en-function-iteratorspliterator-iteratorspliterator"
language: "java"
lang: "en"
category: "function"
name: "IteratorSpliterator.IteratorSpliterator"
signature: "public IteratorSpliterator(Collection<? extends T> collection, int characteristics)"
title: "IteratorSpliterator.IteratorSpliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Spliterators.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IteratorSpliterator.IteratorSpliterator

```java
public IteratorSpliterator(Collection<? extends T> collection, int characteristics)
```

Creates a spliterator using the given
 collection's `iterator() iterator` for traversal,
 and reporting its `size() size` as its initial
 size.

**参数**

- **collection** — the collection
- **characteristics** — properties of this spliterator's source or elements.
