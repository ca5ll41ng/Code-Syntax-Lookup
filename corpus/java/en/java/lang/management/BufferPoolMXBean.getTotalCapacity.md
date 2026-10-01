---
id: "java-en-function-bufferpoolmxbean-gettotalcapacity"
language: "java"
lang: "en"
category: "function"
name: "BufferPoolMXBean.getTotalCapacity"
signature: "long getTotalCapacity()"
title: "BufferPoolMXBean.getTotalCapacity"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/BufferPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferPoolMXBean.getTotalCapacity

```java
long getTotalCapacity()
```

Returns an estimate of the total capacity of the buffers in this pool.
 A buffer's capacity is the number of elements it contains and the value
 returned by this method is an estimate of the total capacity of buffers
 in the pool in bytes.

**返回**

- An estimate of the total capacity of the buffers in this pool in bytes
