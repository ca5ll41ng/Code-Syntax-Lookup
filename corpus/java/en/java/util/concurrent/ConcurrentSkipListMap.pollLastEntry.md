---
id: "java-en-function-concurrentskiplistmap-polllastentry"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentSkipListMap.pollLastEntry"
signature: "public Map.Entry<K,V> pollLastEntry()"
title: "ConcurrentSkipListMap.pollLastEntry"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentSkipListMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentSkipListMap.pollLastEntry

```java
public Map.Entry<K,V> pollLastEntry()
```

Removes and returns a key-value mapping associated with
 the greatest key in this map, or `null` if the map is empty.
 The returned entry does not support
 the `Entry.setValue` method.
