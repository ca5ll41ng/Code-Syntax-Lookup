---
id: "java-en-function-sequencedmap-polllastentry"
language: "java"
lang: "en"
category: "function"
name: "SequencedMap.pollLastEntry"
signature: "default Map.Entry<K,V> pollLastEntry()"
title: "SequencedMap.pollLastEntry"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedMap.pollLastEntry

```java
default Map.Entry<K,V> pollLastEntry()
```

Removes and returns the last key-value mapping in this map,
 or `null` if the map is empty (optional operation).

 The implementation in this interface obtains the iterator of the entrySet of this map's
 reversed view. If the iterator has an element, it calls `remove` on the iterator
 and then returns an unmodifiable copy of that element. Otherwise, it returns null.

**返回**

- the removed last entry of this map, or `null` if this map is empty

**异常**

- **UnsupportedOperationException** — if this collection implementation does not support this operation
