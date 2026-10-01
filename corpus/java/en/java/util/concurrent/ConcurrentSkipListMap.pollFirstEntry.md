---
id: "java-en-function-concurrentskiplistmap-pollfirstentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.pollFirstEntry"
signature: "public Map.Entry<K,V> pollFirstEntry()"
title: "ConcurrentSkipListMap.pollFirstEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.pollFirstEntry

```java
public Map.Entry<K,V> pollFirstEntry()
```

Removes and returns a key-value mapping associated with
 the least key in this map, or `null` if the map is empty.
 The returned entry does not support
 the `Entry.setValue` method.
