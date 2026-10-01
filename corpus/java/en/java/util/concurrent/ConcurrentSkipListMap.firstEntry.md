---
id: "java-en-function-concurrentskiplistmap-firstentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.firstEntry"
signature: "public Map.Entry<K,V> firstEntry()"
title: "ConcurrentSkipListMap.firstEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.firstEntry

```java
public Map.Entry<K,V> firstEntry()
```

Returns a key-value mapping associated with the least
 key in this map, or `null` if the map is empty.
 The returned entry does not support
 the `Entry.setValue` method.
