---
id: "java-en-function-treeset-headset"
language: "java"
lang: "en"
category: "function"
name: "TreeSet.headSet"
signature: "public NavigableSet<E> headSet(E toElement, boolean inclusive)"
title: "TreeSet.headSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeSet.headSet

```java
public NavigableSet<E> headSet(E toElement, boolean inclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `toElement` is null and this set uses natural ordering, or its comparator does not permit null elements
- **IllegalArgumentException** — {@inheritDoc}

> *Since 1.6*
