---
id: "java-en-function-memoryusage-getmax"
language: "java"
lang: "en"
category: "function"
name: "MemoryUsage.getMax"
signature: "public long getMax()"
title: "MemoryUsage.getMax"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryUsage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryUsage.getMax

```java
public long getMax()
```

Returns the maximum amount of memory in bytes that can be
 used for memory management.  This method returns `-1`
 if the maximum memory size is undefined.

 

 This amount of memory is not guaranteed to be available
 for memory management if it is greater than the amount of
 committed memory.  The Java virtual machine may fail to allocate
 memory even if the amount of used memory does not exceed this
 maximum size.

**返回**

- the maximum amount of memory in bytes; `-1` if undefined.
