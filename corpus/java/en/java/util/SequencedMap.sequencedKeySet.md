---
id: "java-en-function-sequencedmap-sequencedkeyset"
language: "java"
lang: "en"
category: "function"
name: "SequencedMap.sequencedKeySet"
signature: "default SequencedSet<K> sequencedKeySet()"
title: "SequencedMap.sequencedKeySet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedMap.sequencedKeySet

```java
default SequencedSet<K> sequencedKeySet()
```

Returns a `SequencedSet` view of this map's `keySet keySet`.

 The implementation in this interface returns a `SequencedSet` instance
 that behaves as follows. Its `add add`, `addAll addAll`, `addFirst addFirst`, and `addLast addLast` methods throw `UnsupportedOperationException`.
 Its `getFirst getFirst` and `getLast getLast`
 methods are implemented in terms of the `firstEntry firstEntry` and `lastEntry lastEntry` methods of this interface, respectively. Its `removeFirst removeFirst` and `removeLast removeLast`
 methods are implemented in terms of the `pollFirstEntry pollFirstEntry` and
 `pollLastEntry pollLastEntry` methods of this interface, respectively.
 Its `reversed reversed` method returns the `sequencedKeySet sequencedKeySet` view of the `reversed reversed` view of
 this map. Each of its other methods calls the corresponding method of the `keySet keySet` view of this map.

**返回**

- a `SequencedSet` view of this map's `keySet`
