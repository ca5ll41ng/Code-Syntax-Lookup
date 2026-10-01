---
id: "java-en-function-enummap-put"
language: "java"
lang: "en"
category: "function"
name: "EnumMap.put"
signature: "public V put(K key, V value)"
title: "EnumMap.put"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumMap.put

```java
public V put(K key, V value)
```

Associates the specified value with the specified key in this map.
 If the map previously contained a mapping for this key, the old
 value is replaced.

**参数**

- **key** — the key with which the specified value is to be associated
- **value** — the value to be associated with the specified key

**返回**

- the previous value associated with specified key, or `null` if there was no mapping for key.  (A `null` return can also indicate that the map previously associated `null` with the specified key.)

**异常**

- **NullPointerException** — if the specified key is null
