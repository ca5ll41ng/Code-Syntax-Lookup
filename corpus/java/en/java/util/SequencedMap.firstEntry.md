---
id: "java-en-function-sequencedmap-firstentry"
language: "java"
lang: "en"
category: "function"
name: "SequencedMap.firstEntry"
signature: "default Map.Entry<K,V> firstEntry()"
title: "SequencedMap.firstEntry"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedMap.firstEntry

```java
default Map.Entry<K,V> firstEntry()
```

Returns the first key-value mapping in this map,
 or `null` if the map is empty.

 The implementation in this interface obtains the iterator of this map's entrySet.
 If the iterator has an element, it returns an unmodifiable copy of that element.
 Otherwise, it returns null.

**返回**

- the first key-value mapping, or `null` if this map is empty
