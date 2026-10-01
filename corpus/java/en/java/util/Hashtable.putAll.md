---
id: "java-en-function-hashtable-putall"
language: "java"
lang: "en"
category: "function"
name: "Hashtable.putAll"
signature: "public synchronized void putAll(Map<? extends K, ? extends V> t)"
title: "Hashtable.putAll"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Hashtable.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Hashtable.putAll

```java
public synchronized void putAll(Map<? extends K, ? extends V> t)
```

Copies all of the mappings from the specified map to this hashtable.
 These mappings will replace any mappings that this hashtable had for any
 of the keys currently in the specified map.

**参数**

- **t** — mappings to be stored in this map

**异常**

- **NullPointerException** — if the specified map is null

> *Since 1.2*
