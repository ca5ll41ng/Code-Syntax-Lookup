---
id: "java-en-function-concurrentskiplistmap-higherentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.higherEntry"
signature: "public Map.Entry<K,V> higherEntry(K key)"
title: "ConcurrentSkipListMap.higherEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.higherEntry

```java
public Map.Entry<K,V> higherEntry(K key)
```

Returns a key-value mapping associated with the least key
 strictly greater than the given key, or `null` if there
 is no such key. The returned entry does not support
 the `Entry.setValue` method.

**参数**

- **key** — the key

**异常**

- **ClassCastException** — {@inheritDoc}
- **NullPointerException** — if the specified key is null
