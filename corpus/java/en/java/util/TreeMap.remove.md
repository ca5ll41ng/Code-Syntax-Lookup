---
id: "java-en-function-treemap-remove"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.remove"
signature: "public V remove(Object key)"
title: "TreeMap.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.remove

```java
public V remove(Object key)
```

Removes the mapping for this key from this TreeMap if present.

**参数**

- **key** — key for which mapping should be removed

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`. (A `null` return can also indicate that the map previously associated `null` with `key`.)

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null and this map uses natural ordering, or its comparator does not permit null keys
