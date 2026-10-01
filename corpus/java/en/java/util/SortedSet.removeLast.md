---
id: "java-en-function-sortedset-removelast"
language: "java"
lang: "en"
category: "function"
name: "SortedSet.removeLast"
signature: "default E removeLast()"
title: "SortedSet.removeLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedSet.removeLast

```java
default E removeLast()
```

{@inheritDoc}

 The implementation in this interface calls the `last` method to obtain the last
 element, then it calls `remove(element)` to remove the element, and then it returns
 the element.

**异常**

- **NoSuchElementException** — {@inheritDoc}
- **UnsupportedOperationException** — {@inheritDoc}

> *Since 21*
