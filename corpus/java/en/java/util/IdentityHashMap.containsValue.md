---
id: "java-en-function-identityhashmap-containsvalue"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.containsValue"
signature: "public boolean containsValue(Object value)"
title: "IdentityHashMap.containsValue"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.containsValue

```java
public boolean containsValue(Object value)
```

Tests whether the specified object reference is a value in this identity
 hash map. Returns `true` if and only if this map contains a mapping
 with value `v` such that `(value == v)`.

**参数**

- **value** — value whose presence in this map is to be tested

**返回**

- `true` if this map maps one or more keys to the specified object reference

**参见**

- #containsKey(Object)
