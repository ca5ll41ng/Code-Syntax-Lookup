---
id: "java-en-function-weakpairmap-containskeypair"
language: "java"
lang: "en"
category: "function"
name: "WeakPairMap.containsKeyPair"
signature: "public boolean containsKeyPair(K1 k1, K2 k2)"
title: "WeakPairMap.containsKeyPair"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/WeakPairMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# WeakPairMap.containsKeyPair

```java
public boolean containsKeyPair(K1 k1, K2 k2)
```

Tests if the specified pair of keys are associated with a value
 in the WeakPairMap.

**参数**

- **k1** — the 1st of the pair of keys
- **k2** — the 2nd of the pair of keys

**返回**

- true if and only if the specified key pair is in this WeakPairMap, as determined by the identity comparison; false otherwise

**异常**

- **NullPointerException** — if any of the specified keys is null
