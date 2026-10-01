---
id: "java-en-function-memorypoolmxbean-getusage"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.getUsage"
signature: "public MemoryUsage getUsage()"
title: "MemoryPoolMXBean.getUsage"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.getUsage

```java
public MemoryUsage getUsage()
```

Returns an estimate of the memory usage of this memory pool.
 This method returns `null`
 if this memory pool is not valid (i.e. no longer exists).

 

 This method requests the Java virtual machine to make
 a best-effort estimate of the current memory usage of this
 memory pool. For some memory pools, this method may be an
 expensive operation that requires some computation to determine
 the estimate.  An implementation should document when
 this is the case.

 

This method is designed for use in monitoring system
 memory usage and detecting low memory condition.

 

 **MBeanServer access**:

 The mapped type of `MemoryUsage` is
 `CompositeData` with attributes as specified in
 `from MemoryUsage`.

**返回**

- a `MemoryUsage` object; or `null` if this pool not valid.
