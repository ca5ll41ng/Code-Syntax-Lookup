---
id: "java-en-function-hashmap-putall"
language: "java"
lang: "en"
category: "function"
name: "HashMap.putAll"
signature: "public void putAll(Map<? extends K, ? extends V> m)"
title: "HashMap.putAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HashMap.putAll

```java
public void putAll(Map<? extends K, ? extends V> m)
```

Copies all of the mappings from the specified map to this map.
 These mappings will replace any mappings that this map had for
 any of the keys currently in the specified map.

**参数**

- **m** — mappings to be stored in this map

**异常**

- **NullPointerException** — if the specified map is null
