---
id: "java-en-function-bufferpoolmxbean-getmemoryused"
language: "java"
lang: "en"
category: "function"
name: "BufferPoolMXBean.getMemoryUsed"
signature: "long getMemoryUsed()"
title: "BufferPoolMXBean.getMemoryUsed"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/BufferPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferPoolMXBean.getMemoryUsed

```java
long getMemoryUsed()
```

Returns an estimate of the memory that the Java virtual machine is using
 for this buffer pool. The value returned by this method may differ
 from the estimate of the total `getTotalCapacity capacity` of
 the buffers in this pool. This difference is explained by alignment,
 memory allocator, and other implementation specific reasons.

**返回**

- An estimate of the memory that the Java virtual machine is using for this buffer pool in bytes, or `-1L` if an estimate of the memory usage is not available
