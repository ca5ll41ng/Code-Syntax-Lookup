---
id: "java-en-function-concurrentskiplistmap-ceilingentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.ceilingEntry"
signature: "public Map.Entry<K,V> ceilingEntry(K key)"
title: "ConcurrentSkipListMap.ceilingEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.ceilingEntry

```java
public Map.Entry<K,V> ceilingEntry(K key)
```

Returns a key-value mapping associated with the least key
 greater than or equal to the given key, or `null` if
 there is no such entry. The returned entry does not
 support the `Entry.setValue` method.

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if the specified key is null
