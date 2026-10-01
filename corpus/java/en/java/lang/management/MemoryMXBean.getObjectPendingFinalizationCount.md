---
id: "java-en-function-memorymxbean-getobjectpendingfinalizationcount"
language: "java"
lang: "en"
category: "function"
name: "MemoryMXBean.getObjectPendingFinalizationCount"
signature: "public int getObjectPendingFinalizationCount()"
title: "MemoryMXBean.getObjectPendingFinalizationCount"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryMXBean.getObjectPendingFinalizationCount

```java
public int getObjectPendingFinalizationCount()
```

Returns the approximate number of objects for which
 finalization is pending.

**返回**

- the approximate number objects for which finalization is pending. If this MemoryMXBean contains information about a JVM in which finalization has been disabled or removed, this method always returns zero.

> **⚠ Deprecated** — Finalization has been deprecated for removal.  See `finalize` for details.
