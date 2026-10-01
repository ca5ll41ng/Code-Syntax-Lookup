---
id: "java-en-function-hashset-spliterator"
language: "java"
lang: "en"
category: "function"
name: "HashSet.spliterator"
signature: "public Spliterator<E> spliterator()"
title: "HashSet.spliterator"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HashSet.spliterator

```java
public Spliterator<E> spliterator()
```

Creates a late-binding
 and fail-fast `Spliterator` over the elements in this
 set.

 

The `Spliterator` reports `SIZED` and
 `DISTINCT`.  Overriding implementations should document
 the reporting of additional characteristic values.

**返回**

- a `Spliterator` over the elements in this set

> *Since 1.8*
