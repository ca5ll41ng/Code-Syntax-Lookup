---
id: "java-en-function-treemap-containskey"
language: "java"
lang: "en"
category: "function"
name: "TreeMap.containsKey"
signature: "public boolean containsKey(Object key)"
title: "TreeMap.containsKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TreeMap.containsKey

```java
public boolean containsKey(Object key)
```

Returns `true` if this map contains a mapping for the specified
 key.

**参数**

- **key** — key whose presence in this map is to be tested

**返回**

- `true` if this map contains a mapping for the specified key

**异常**

- **ClassCastException** — if the specified key cannot be compared with the keys currently in the map
- **NullPointerException** — if the specified key is null and this map uses natural ordering, or its comparator does not permit null keys
