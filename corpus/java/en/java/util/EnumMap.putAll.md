---
id: "java-en-function-enummap-putall"
language: "java"
lang: "en"
category: "function"
name: "EnumMap.putAll"
signature: "public void putAll(Map<? extends K, ? extends V> m)"
title: "EnumMap.putAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/EnumMap.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EnumMap.putAll

```java
public void putAll(Map<? extends K, ? extends V> m)
```

Copies all of the mappings from the specified map to this map.
 These mappings will replace any mappings that this map had for
 any of the keys currently in the specified map.

**参数**

- **m** — the mappings to be stored in this map

**异常**

- **NullPointerException** — the specified map is null, or if one or more keys in the specified map are null
