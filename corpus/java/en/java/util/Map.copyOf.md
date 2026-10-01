---
id: "java-en-function-map-copyof"
language: "java"
lang: "en"
category: "function"
name: "Map.copyOf"
signature: "static <K, V> Map<K, V> copyOf(Map<? extends K, ? extends V> map)"
title: "Map.copyOf"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Map.copyOf

```java
static <K, V> Map<K, V> copyOf(Map<? extends K, ? extends V> map)
```

Returns an unmodifiable Map containing the entries
 of the given Map. The given Map must not be null, and it must not contain any
 null keys or values. If the given Map is subsequently modified, the returned
 Map will not reflect such modifications.

 If the given Map is an unmodifiable Map,
 calling copyOf will generally not create a copy.

**参数**

- **the** — `Map`'s key type
- **the** — `Map`'s value type
- **map** — a `Map` from which entries are drawn, must be non-null

**返回**

- a `Map` containing the entries of the given `Map`

**异常**

- **NullPointerException** — if map is null, or if it contains any null keys or values

> *Since 10*
