---
id: "java-en-function-treeset-tailset"
language: "java"
lang: "en"
category: "function"
name: "TreeSet.tailSet"
signature: "public NavigableSet<E> tailSet(E fromElement, boolean inclusive)"
title: "TreeSet.tailSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeSet.tailSet

```java
public NavigableSet<E> tailSet(E fromElement, boolean inclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `fromElement` is null and this set uses natural ordering, or its comparator does not permit null elements
- **IllegalArgumentException** — {@inheritDoc}

> *Since 1.6*
