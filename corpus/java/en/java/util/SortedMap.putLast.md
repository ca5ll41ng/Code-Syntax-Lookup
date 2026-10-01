---
id: "java-en-function-sortedmap-putlast"
language: "java"
lang: "en"
category: "function"
name: "SortedMap.putLast"
signature: "default V putLast(K k, V v)"
title: "SortedMap.putLast"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/SortedMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SortedMap.putLast

```java
default V putLast(K k, V v)
```

Throws `UnsupportedOperationException`. The encounter order induced by this
 map's comparison method determines the position of mappings, so explicit positioning
 is not supported.

 The implementation in this interface always throws `UnsupportedOperationException`.

**异常**

- **UnsupportedOperationException** — always

> *Since 21*
