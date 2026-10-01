---
id: "java-en-function-treemap-put"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.put"
signature: "public V put(K key, V value)"
title: "TreeMap.put"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.put

```java
public V put(K key, V value)
```

Associates the specified value with the specified key in this map.
 If the map previously contained a mapping for the key, the old
 value is replaced.

**参数**

- **key** — key with which the specified value is to be associated
- **value** — value to be associated with the specified key

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`. (A `null` return can also indicate that the map previously associated `null` with `key`.)

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null and this map uses natural ordering, or its comparator does not permit null keys
