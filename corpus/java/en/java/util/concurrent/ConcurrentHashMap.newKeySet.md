---
id: "java-en-function-concurrenthashmap-newkeyset"
language: "java"
lang: "en"
category: "function"
name: "ConcurrentHashMap.newKeySet"
signature: "public static <K> KeySetView<K,Boolean> newKeySet()"
title: "ConcurrentHashMap.newKeySet"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ConcurrentHashMap.newKeySet

```java
public static <K> KeySetView<K,Boolean> newKeySet()
```

Creates a new `Set` backed by a ConcurrentHashMap
 from the given type to `Boolean.TRUE`.

**参数**

- **the** — element type of the returned set

**返回**

- the new set

> *Since 1.8*
