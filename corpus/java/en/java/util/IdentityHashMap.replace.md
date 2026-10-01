---
id: "java-en-function-identityhashmap-replace"
language: "java"
lang: "en"
category: "function"
name: "IdentityHashMap.replace"
signature: "public boolean replace(K key, V oldValue, V newValue)"
title: "IdentityHashMap.replace"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IdentityHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IdentityHashMap.replace

```java
public boolean replace(K key, V oldValue, V newValue)
```

{@inheritDoc}

 

More formally, if this map contains a mapping from a key
 `k` to a value `v` such that `(key == k)`
 and `(oldValue == v)`, then this method associates
 `k` with `newValue` and returns `true`;
 otherwise it returns `false`.
