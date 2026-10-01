---
id: "java-en-function-memorypoolmxbean-getcollectionusage"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.getCollectionUsage"
signature: "public MemoryUsage getCollectionUsage()"
title: "MemoryPoolMXBean.getCollectionUsage"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.getCollectionUsage

```java
public MemoryUsage getCollectionUsage()
```

Returns the memory usage after the Java virtual machine
 most recently expended effort in recycling unused objects
 in this memory pool.
 This method does not request the Java virtual
 machine to perform any garbage collection other than its normal
 automatic memory management.
 This method returns `null` if the Java virtual
 machine does not support this method.

 

 **MBeanServer access**:

 The mapped type of `MemoryUsage` is
 `CompositeData` with attributes as specified in
 `from MemoryUsage`.

**返回**

- a `MemoryUsage` representing the memory usage of this memory pool after the Java virtual machine most recently expended effort in recycling unused objects; `null` if this method is not supported.
