---
id: "java-en-function-memorypoolmxbean-getpeakusage"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.getPeakUsage"
signature: "public MemoryUsage getPeakUsage()"
title: "MemoryPoolMXBean.getPeakUsage"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.getPeakUsage

```java
public MemoryUsage getPeakUsage()
```

Returns the peak memory usage of this memory pool since the
 Java virtual machine was started or since the peak was reset.
 This method returns `null`
 if this memory pool is not valid (i.e. no longer exists).

 

 **MBeanServer access**:

 The mapped type of `MemoryUsage` is
 `CompositeData` with attributes as specified in
 `from MemoryUsage`.

**返回**

- a `MemoryUsage` object representing the peak memory usage; or `null` if this pool is not valid.
