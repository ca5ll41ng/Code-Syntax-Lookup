---
id: "java-en-function-sequencedmap-lastentry"
language: "java"
lang: "en"
category: "function"
name: "SequencedMap.lastEntry"
signature: "default Map.Entry<K,V> lastEntry()"
title: "SequencedMap.lastEntry"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedMap.lastEntry

```java
default Map.Entry<K,V> lastEntry()
```

Returns the last key-value mapping in this map,
 or `null` if the map is empty.

 The implementation in this interface obtains the iterator of the entrySet of this map's
 reversed view. If the iterator has an element, it returns an unmodifiable copy of
 that element. Otherwise, it returns null.

**返回**

- the last key-value mapping, or `null` if this map is empty
