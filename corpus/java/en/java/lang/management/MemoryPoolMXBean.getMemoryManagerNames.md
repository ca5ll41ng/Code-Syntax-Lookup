---
id: "java-en-function-memorypoolmxbean-getmemorymanagernames"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.getMemoryManagerNames"
signature: "public String[] getMemoryManagerNames()"
title: "MemoryPoolMXBean.getMemoryManagerNames"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.getMemoryManagerNames

```java
public String[] getMemoryManagerNames()
```

Returns the name of memory managers that manages this memory pool.
 Each memory pool will be managed by at least one memory manager.

**返回**

- an array of `String` objects, each is the name of a memory manager managing this memory pool.
