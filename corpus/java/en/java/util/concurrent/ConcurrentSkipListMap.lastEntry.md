---
id: "java-en-function-concurrentskiplistmap-lastentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.lastEntry"
signature: "public Map.Entry<K,V> lastEntry()"
title: "ConcurrentSkipListMap.lastEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.lastEntry

```java
public Map.Entry<K,V> lastEntry()
```

Returns a key-value mapping associated with the greatest
 key in this map, or `null` if the map is empty.
 The returned entry does not support
 the `Entry.setValue` method.
