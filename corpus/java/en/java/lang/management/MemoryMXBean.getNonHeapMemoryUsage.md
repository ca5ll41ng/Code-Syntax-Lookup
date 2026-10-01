---
id: "java-en-function-memorymxbean-getnonheapmemoryusage"
language: "java"
lang: "en"
category: "function"
name: "MemoryMXBean.getNonHeapMemoryUsage"
signature: "public MemoryUsage getNonHeapMemoryUsage()"
title: "MemoryMXBean.getNonHeapMemoryUsage"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryMXBean.getNonHeapMemoryUsage

```java
public MemoryUsage getNonHeapMemoryUsage()
```

Returns the current memory usage of non-heap memory that
 is used by the Java virtual machine.
 The non-heap memory consists of one or more memory pools.
 The `used` and `committed` size of the
 returned memory usage is the sum of those values of
 all non-heap memory pools whereas the `init`
 and `max` size of the returned memory usage
 represents the setting of the non-heap
 memory which may not be the sum of those of all non-heap
 memory pools.

 

 **MBeanServer access**:

 The mapped type of `MemoryUsage` is
 `CompositeData` with attributes as specified in
 `from MemoryUsage`.

**返回**

- a `MemoryUsage` object representing the non-heap memory usage.
