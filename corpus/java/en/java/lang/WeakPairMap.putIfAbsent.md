---
id: "java-en-function-weakpairmap-putifabsent"
language: "java"
lang: "en"
category: "function"
name: "WeakPairMap.putIfAbsent"
signature: "public V putIfAbsent(K1 k1, K2 k2, V v)"
title: "WeakPairMap.putIfAbsent"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/WeakPairMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakPairMap.putIfAbsent

```java
public V putIfAbsent(K1 k1, K2 k2, V v)
```

If the specified key pair is not already associated with a value,
 associates it with the given value and returns `null`, else does
 nothing and returns the currently associated value.

**参数**

- **k1** — the 1st of the pair of keys with which the specified value is to be associated
- **k2** — the 2nd of the pair of keys with which the specified value is to be associated
- **v** — value to be associated with the specified key pair

**返回**

- the previous value associated with key pair, or `null` if there was no mapping for key pair

**异常**

- **NullPointerException** — if any of the specified keys or value is null
