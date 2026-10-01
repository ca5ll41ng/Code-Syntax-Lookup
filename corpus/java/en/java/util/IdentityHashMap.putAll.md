---
id: "java-en-function-identityhashmap-putall"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.putAll"
signature: "public void putAll(Map<? extends K, ? extends V> m)"
title: "IdentityHashMap.putAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.putAll

```java
public void putAll(Map<? extends K, ? extends V> m)
```

Copies all of the mappings from the specified map to this map.
 For each mapping in the specified map, if this map already
 `containsKey(Object) contains` a mapping for the key,
 its value is replaced with the value from the specified map;
 otherwise, a new mapping is inserted into this map.

**参数**

- **m** — mappings to be stored in this map

**异常**

- **NullPointerException** — if the specified map is null
