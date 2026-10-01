---
id: "java-en-function-weakpairmap-get"
language: "java"
lang: "en"
category: "function"
name: "WeakPairMap.get"
signature: "public V get(K1 k1, K2 k2)"
title: "WeakPairMap.get"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/WeakPairMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakPairMap.get

```java
public V get(K1 k1, K2 k2)
```

Returns the value to which the specified pair of keys is mapped, or null
 if this WeakPairMap contains no mapping for the key pair.
 

More formally, if this WeakPairMap contains a mapping from a key pair
 `(_k1, _k2)` to a value `v` such that
 `k1 == _k1 && k2 == _k2`, then this method returns `v`;
 otherwise it returns `null`.
 (There can be at most one such mapping.)

**参数**

- **k1** — the 1st of the pair of keys for which the mapped value is to be returned
- **k2** — the 2nd of the pair of keys for which the mapped value is to be returned

**返回**

- the value to which the specified key pair is mapped, or null if this map contains no mapping for the key pair

**异常**

- **NullPointerException** — if any of the specified keys is null
