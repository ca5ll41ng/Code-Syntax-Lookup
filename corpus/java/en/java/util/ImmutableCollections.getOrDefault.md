---
id: "java-en-function-immutablecollections-getordefault"
language: "java"
lang: "en"
category: "function"
name: "ImmutableCollections.getOrDefault"
signature: "public V getOrDefault(Object key, V defaultValue)"
title: "ImmutableCollections.getOrDefault"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ImmutableCollections.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ImmutableCollections.getOrDefault

```java
public V getOrDefault(Object key, V defaultValue)
```

so we can improve upon the default implementation since a
 `null` return from `get(key)` always means the default
 value should be returned.
