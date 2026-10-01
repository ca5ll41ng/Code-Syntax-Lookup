---
id: "java-en-function-sequencedmap-sequencedvalues"
language: "java"
lang: "en"
category: "function"
name: "SequencedMap.sequencedValues"
signature: "default SequencedCollection<V> sequencedValues()"
title: "SequencedMap.sequencedValues"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SequencedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SequencedMap.sequencedValues

```java
default SequencedCollection<V> sequencedValues()
```

Returns a `SequencedCollection` view of this map's `values values` collection.

 The implementation in this interface returns a `SequencedCollection` instance
 that behaves as follows. Its `add add`, `addAll addAll`, `addFirst addFirst`, and `addLast addLast` methods throw `UnsupportedOperationException`.
 Its `getFirst getFirst` and `getLast getLast`
 methods are implemented in terms of the `firstEntry firstEntry` and `lastEntry lastEntry` methods of this interface, respectively. Its `removeFirst removeFirst` and `removeLast removeLast`
 methods are implemented in terms of the `pollFirstEntry pollFirstEntry` and
 `pollLastEntry pollLastEntry` methods of this interface, respectively.
 Its `reversed reversed` method returns the `sequencedValues sequencedValues` view of the `reversed reversed` view of
 this map. Its `equals equals` and `hashCode hashCode` methods
 are inherited from `Object`. Each of its other methods calls the corresponding
 method of the `values values` view of this map.

**返回**

- a `SequencedCollection` view of this map's `values` collection
