---
id: "java-en-function-concurrentskiplistmap-lowerentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.lowerEntry"
signature: "public Map.Entry<K,V> lowerEntry(K key)"
title: "ConcurrentSkipListMap.lowerEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.lowerEntry

```java
public Map.Entry<K,V> lowerEntry(K key)
```

Returns a key-value mapping associated with the greatest key
 strictly less than the given key, or `null` if there is
 no such key. The returned entry does not support the
 `Entry.setValue` method.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if the specified key is null
