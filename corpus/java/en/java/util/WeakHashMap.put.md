---
id: "java-en-function-weakhashmap-put"
language: "java"
lang: "en"
category: "function"
name: "WeakHashMap.put"
signature: "public V put(@jdk.internal.RequiresIdentity K key, V value)"
title: "WeakHashMap.put"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/WeakHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakHashMap.put

```java
public V put(@jdk.internal.RequiresIdentity K key, V value)
```

Associates the specified value with the specified key in this map.
 If the map previously contained a mapping for this key, the old
 value is replaced.

**参数**

- **key** — key with which the specified value is to be associated.
- **value** — value to be associated with the specified key.

**返回**

- the previous value associated with `key`, or `null` if there was no mapping for `key`. (A `null` return can also indicate that the map previously associated `null` with `key`.)

**异常**

- **IdentityException** — if `key` is a `hasIdentity(Object) value object`
