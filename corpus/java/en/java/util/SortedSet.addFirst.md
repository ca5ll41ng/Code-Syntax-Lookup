---
id: "java-en-function-sortedset-addfirst"
language: "java"
lang: "en"
category: "function"
name: "SortedSet.addFirst"
signature: "default void addFirst(E e)"
title: "SortedSet.addFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedSet.addFirst

```java
default void addFirst(E e)
```

Throws `UnsupportedOperationException`. The encounter order induced by this
 set's comparison method determines the position of elements, so explicit positioning
 is not supported.

 The implementation in this interface always throws `UnsupportedOperationException`.

**异常**

- **UnsupportedOperationException** — always

> *Since 21*
