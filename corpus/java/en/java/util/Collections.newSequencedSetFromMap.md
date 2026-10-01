---
id: "java-en-function-collections-newsequencedsetfrommap"
language: "java"
lang: "en"
category: "function"
name: "Collections.newSequencedSetFromMap"
signature: "public static <E> SequencedSet<E> newSequencedSetFromMap(SequencedMap<E, Boolean> map)"
title: "Collections.newSequencedSetFromMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.newSequencedSetFromMap

```java
public static <E> SequencedSet<E> newSequencedSetFromMap(SequencedMap<E, Boolean> map)
```

Returns a sequenced set backed by the specified map.  The resulting set displays
 the same ordering, concurrency, and performance characteristics as the
 backing map. In essence, this factory method provides a `SequencedSet`
 implementation corresponding to any `SequencedMap` implementation.

 

Each method invocation on the set returned by this method results in
 exactly one method invocation on the backing map or its `keySet`
 view, with one exception.  The `addAll` method is implemented
 as a sequence of `put` invocations on the backing map.

 

The specified map must be empty at the time this method is invoked,
 and should not be accessed directly after this method returns.  These
 conditions are ensured if the map is created empty, passed directly
 to this method, and no reference to the map is retained.

 The following example code creates a `SequencedSet` from a
 `LinkedHashMap`. This differs from a `LinkedHashSet`
 in that the map's `removeEldestEntry` is overridden to provide
 an eviction policy, which is not possible with a `LinkedHashSet`.

 {@snippet :
     SequencedSet set = Collections.newSequencedSetFromMap(
         new LinkedHashMap() {
             protected boolean removeEldestEntry(Map.Entry e) {
                 return this.size() > 5;
             }
        });
 }

**参数**

- **the** — class of the map keys and of the objects in the returned set
- **map** — the backing map

**返回**

- the set backed by the map

**异常**

- **IllegalArgumentException** — if `map` is not empty

> *Since 21*
