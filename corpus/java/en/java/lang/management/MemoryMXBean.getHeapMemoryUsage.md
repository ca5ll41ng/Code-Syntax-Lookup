---
id: "java-en-function-memorymxbean-getheapmemoryusage"
language: "java"
lang: "en"
category: "function"
name: "MemoryMXBean.getHeapMemoryUsage"
signature: "public MemoryUsage getHeapMemoryUsage()"
title: "MemoryMXBean.getHeapMemoryUsage"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryMXBean.getHeapMemoryUsage

```java
public MemoryUsage getHeapMemoryUsage()
```

Returns the current memory usage of the heap that
 is used for object allocation.  The heap consists
 of one or more memory pools.  The `used`
 and `committed` size of the returned memory
 usage is the sum of those values of all heap memory pools
 whereas the `init` and `max` size of the
 returned memory usage represents the setting of the heap
 memory which may not be the sum of those of all heap
 memory pools.
 

 The amount of used memory in the returned memory usage
 is the amount of memory occupied by both live objects
 and garbage objects that have not been collected, if any.

 

 **MBeanServer access**:

 The mapped type of `MemoryUsage` is
 `CompositeData` with attributes as specified in
 `from MemoryUsage`.

**返回**

- a `MemoryUsage` object representing the heap memory usage.
