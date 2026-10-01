---
id: "java-en-function-memoryusage-getinit"
language: "java"
lang: "en"
category: "function"
name: "MemoryUsage.getInit"
signature: "public long getInit()"
title: "MemoryUsage.getInit"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryUsage.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryUsage.getInit

```java
public long getInit()
```

Returns the amount of memory in bytes that the Java virtual machine
 initially requests from the operating system for memory management.
 This method returns `-1` if the initial memory size is undefined.

**返回**

- the initial size of memory in bytes; `-1` if undefined.
