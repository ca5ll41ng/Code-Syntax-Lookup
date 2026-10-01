---
id: "java-en-function-identityhashmap-remove"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.remove"
signature: "public V remove(Object key)"
title: "IdentityHashMap.remove"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.remove

```java
public V remove(Object key)
```

Removes the mapping for this key from this map if present.
 The mapping is removed if and only if the mapping has a key
 `k` such that (key == k).

**参数**

- **key** — key whose mapping is to be removed from the map

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`. (A `null` return can also indicate that the map previously associated `null` with `key`.)
