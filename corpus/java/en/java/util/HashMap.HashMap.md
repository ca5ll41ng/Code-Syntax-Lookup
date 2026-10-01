---
id: "java-en-function-hashmap-hashmap"
language: "java"
lang: "en"
category: "function"
name: "HashMap.HashMap"
signature: "public HashMap(int initialCapacity, float loadFactor)"
title: "HashMap.HashMap"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HashMap.HashMap

```java
public HashMap(int initialCapacity, float loadFactor)
```

Constructs an empty `HashMap` with the specified initial
 capacity and load factor.

 To create a `HashMap` with an initial capacity that accommodates
 an expected number of mappings, use `newHashMap(int) newHashMap`.

**参数**

- **initialCapacity** — the initial capacity
- **loadFactor** — the load factor

**异常**

- **IllegalArgumentException** — if the initial capacity is negative or the load factor is nonpositive
