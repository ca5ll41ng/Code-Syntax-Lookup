---
id: "java-en-function-sortedset-reversed"
language: "java"
lang: "en"
category: "function"
name: "SortedSet.reversed"
signature: "default SortedSet<E> reversed()"
title: "SortedSet.reversed"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedSet.reversed

```java
default SortedSet<E> reversed()
```

{@inheritDoc}

 The implementation in this interface returns a reverse-ordered SortedSet
 view. The `reversed()` method of the view returns a reference
 to this SortedSet. Other operations on the view are implemented via calls to
 public methods on this SortedSet. The exact relationship between calls on the
 view and calls on this SortedSet is unspecified. However, order-sensitive
 operations generally behave as if they delegate to the appropriate method
 with the opposite orientation. For example, calling `getFirst` on the
 view might result in a call to `getLast` on this SortedSet.

**返回**

- a reverse-ordered view of this collection, as a `SortedSet`

> *Since 21*
