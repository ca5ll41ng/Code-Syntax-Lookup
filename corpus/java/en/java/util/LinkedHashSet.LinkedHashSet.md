---
id: "java-en-function-linkedhashset-linkedhashset"
language: "java"
lang: "en"
category: "function"
name: "LinkedHashSet.LinkedHashSet"
signature: "public LinkedHashSet(int initialCapacity, float loadFactor)"
title: "LinkedHashSet.LinkedHashSet"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LinkedHashSet.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedHashSet.LinkedHashSet

```java
public LinkedHashSet(int initialCapacity, float loadFactor)
```

Constructs a new, empty linked hash set with the specified initial
 capacity and load factor.

 To create a `LinkedHashSet` with an initial capacity that accommodates
 an expected number of elements, use `newLinkedHashSet(int) newLinkedHashSet`.

**参数**

- **initialCapacity** — the initial capacity of the linked hash set
- **loadFactor** — the load factor of the linked hash set

**异常**

- **IllegalArgumentException** — if the initial capacity is less than zero, or if the load factor is nonpositive
