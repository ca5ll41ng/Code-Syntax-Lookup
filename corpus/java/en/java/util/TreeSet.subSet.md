---
id: "java-en-function-treeset-subset"
language: "java"
lang: "en"
category: "function"
name: "TreeSet.subSet"
signature: "public NavigableSet<E> subSet(E fromElement, boolean fromInclusive, E toElement, boolean toInclusive)"
title: "TreeSet.subSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeSet.subSet

```java
public NavigableSet<E> subSet(E fromElement, boolean fromInclusive, E toElement, boolean toInclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `fromElement` or `toElement` is null and this set uses natural ordering, or its comparator does not permit null elements
- **IllegalArgumentException** — {@inheritDoc}

> *Since 1.6*
