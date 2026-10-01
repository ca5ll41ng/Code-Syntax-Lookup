---
id: "java-en-function-iterable-spliterator"
language: "java"
lang: "en"
category: "function"
name: "Iterable.spliterator"
signature: "default Spliterator<T> spliterator()"
title: "Iterable.spliterator"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Iterable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Iterable.spliterator

```java
default Spliterator<T> spliterator()
```

Creates a `Spliterator` over the elements described by this
 `Iterable`.

 The default implementation creates an
 early-binding
 spliterator from the iterable's `Iterator`.  The spliterator
 inherits the fail-fast properties of the iterable's iterator.

 The default implementation should usually be overridden.  The
 spliterator returned by the default implementation has poor splitting
 capabilities, is unsized, and does not report any spliterator
 characteristics. Implementing classes can nearly always provide a
 better implementation.

**返回**

- a `Spliterator` over the elements described by this `Iterable`.

> *Since 1.8*
