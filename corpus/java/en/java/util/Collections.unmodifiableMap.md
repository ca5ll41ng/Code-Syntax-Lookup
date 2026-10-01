---
id: "java-en-function-collections-unmodifiablemap"
language: "java"
lang: "en"
category: "function"
name: "Collections.unmodifiableMap"
signature: "public static <K,V> Map<K,V> unmodifiableMap(Map<? extends K, ? extends V> m)"
title: "Collections.unmodifiableMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.unmodifiableMap

```java
public static <K,V> Map<K,V> unmodifiableMap(Map<? extends K, ? extends V> m)
```

Returns an unmodifiable view of the
 specified map. Query operations on the returned map "read through"
 to the specified map, and attempts to modify the returned
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
