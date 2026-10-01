---
id: "java-en-function-sortedset-removefirst"
language: "java"
lang: "en"
category: "function"
name: "SortedSet.removeFirst"
signature: "default E removeFirst()"
title: "SortedSet.removeFirst"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedSet.removeFirst

```java
default E removeFirst()
```

{@inheritDoc}

 The implementation in this interface calls the `first` method to obtain the first
 element, then it calls `remove(element)` to remove the element, and then it returns
 the element.

**异常**

- **NoSuchElementException** — {@inheritDoc}
- **UnsupportedOperationException** — {@inheritDoc}

> *Since 21*
