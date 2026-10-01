---
id: "java-en-function-identityhashmap-put"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.put"
signature: "public V put(K key, V value)"
title: "IdentityHashMap.put"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.put

```java
public V put(K key, V value)
```

Associates the specified value with the specified key in this identity
 hash map. If this map already `containsKey(Object) contains`
 a mapping for the key, the old value is replaced, otherwise, a new mapping
 is inserted into this map.

**参数**

- **key** — the key with which the specified value is to be associated
- **value** — the value to be associated with the specified key

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`. (A `null` return can also indicate that the map previously associated `null` with `key`.)

**参见**

- Object#equals(Object)
- #get(Object)
- #containsKey(Object)
