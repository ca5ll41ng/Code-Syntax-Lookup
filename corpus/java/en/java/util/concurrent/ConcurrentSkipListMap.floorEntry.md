---
id: "java-en-function-concurrentskiplistmap-floorentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.floorEntry"
signature: "public Map.Entry<K,V> floorEntry(K key)"
title: "ConcurrentSkipListMap.floorEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.floorEntry

```java
public Map.Entry<K,V> floorEntry(K key)
```

Returns a key-value mapping associated with the greatest key
 less than or equal to the given key, or `null` if there
 is no such key. The returned entry does not support
 the `Entry.setValue` method.

**参数**

- **key** — the key

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if the specified key is null
