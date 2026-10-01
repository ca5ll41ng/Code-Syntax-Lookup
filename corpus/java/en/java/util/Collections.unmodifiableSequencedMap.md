---
id: "java-en-function-collections-unmodifiablesequencedmap"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableSequencedMap"
signature: "public static <K,V> SequencedMap<K,V> unmodifiableSequencedMap(SequencedMap<? extends K, ? extends V> m)"
title: "Collections.unmodifiableSequencedMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableSequencedMap

```java
public static <K,V> SequencedMap<K,V> unmodifiableSequencedMap(SequencedMap<? extends K, ? extends V> m)
```

Returns an unmodifiable view of the
 specified `SequencedMap`. Query operations on the returned map
 "read through" to the specified map, and attempts to modify the returned
 map, whether direct or via its collection views, result in an
 `UnsupportedOperationException`.

 The returned map will be serializable if the specified map
 is serializable.

**参数**

- **the** — class of the map keys
- **the** — class of the map values
- **m** — the map for which an unmodifiable view is to be returned.

**返回**

- an unmodifiable view of the specified map.

> *Since 21*
