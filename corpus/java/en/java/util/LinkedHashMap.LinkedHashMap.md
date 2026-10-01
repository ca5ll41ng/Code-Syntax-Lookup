---
id: "java-en-function-linkedhashmap-linkedhashmap"
language: "java"
lang: "en"
category: "function"
name: "LinkedHashMap.LinkedHashMap"
signature: "public LinkedHashMap(int initialCapacity, float loadFactor)"
title: "LinkedHashMap.LinkedHashMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedHashMap.LinkedHashMap

```java
public LinkedHashMap(int initialCapacity, float loadFactor)
```

Constructs an empty insertion-ordered `LinkedHashMap` instance
 with the specified initial capacity and load factor.

 To create a `LinkedHashMap` with an initial capacity that accommodates
 an expected number of mappings, use `newLinkedHashMap(int) newLinkedHashMap`.

**参数**

- **initialCapacity** — the initial capacity
- **loadFactor** — the load factor

**异常**

- **IllegalArgumentException** — if the initial capacity is negative or the load factor is nonpositive
