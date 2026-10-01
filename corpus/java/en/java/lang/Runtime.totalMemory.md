---
id: "java-en-function-runtime-totalmemory"
language: "java"
lang: "en"
category: "function"
name: "Runtime.totalMemory"
signature: "public native long totalMemory()"
title: "Runtime.totalMemory"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Runtime.totalMemory

```java
public native long totalMemory()
```

Returns the total amount of memory in the Java virtual machine.
 The value returned by this method may vary over time, depending on
 the host environment.
 

 Note that the amount of memory required to hold an object of any
 given type may be implementation-dependent.

**返回**

- the total amount of memory currently available for current and future objects, measured in bytes.
