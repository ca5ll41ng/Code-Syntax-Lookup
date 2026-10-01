---
id: "java-en-function-concurrentskiplistset-subset"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListSet.subSet"
signature: "public NavigableSet<E> subSet(E fromElement, boolean fromInclusive, E toElement, boolean toInclusive)"
title: "ConcurrentSkipListSet.subSet"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListSet.subSet

```java
public NavigableSet<E> subSet(E fromElement, boolean fromInclusive, E toElement, boolean toInclusive)
```

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if `fromElement` or `toElement` is null
- **IllegalArgumentException** — {@inheritDoc}
