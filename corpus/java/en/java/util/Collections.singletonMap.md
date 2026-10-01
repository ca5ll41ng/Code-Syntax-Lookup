---
id: "java-en-function-collections-singletonmap"
language: "java"
lang: "en"
category: "function"
name: "Collections.singletonMap"
signature: "public static <K,V> Map<K,V> singletonMap(K key, V value)"
title: "Collections.singletonMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collections.singletonMap

```java
public static <K,V> Map<K,V> singletonMap(K key, V value)
```

Returns an immutable map, mapping only the specified key to the
 specified value.  The returned map is serializable.

**参数**

- **the** — class of the map keys
- **the** — class of the map values
- **key** — the sole key to be stored in the returned map.
- **value** — the value to which the returned map maps `key`.

**返回**

- an immutable map containing only the specified key-value mapping.

> *Since 1.3*
