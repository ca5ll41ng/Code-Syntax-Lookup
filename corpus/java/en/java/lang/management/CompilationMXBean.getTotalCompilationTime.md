---
id: "java-en-function-compilationmxbean-gettotalcompilationtime"
language: "java"
lang: "en"
category: "function"
name: "CompilationMXBean.getTotalCompilationTime"
signature: "public long getTotalCompilationTime()"
title: "CompilationMXBean.getTotalCompilationTime"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/CompilationMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompilationMXBean.getTotalCompilationTime

```java
public long getTotalCompilationTime()
```

Returns the approximate accumulated elapsed time (in milliseconds)
 spent in compilation.
 If multiple threads are used for compilation, this value is
 summation of the approximate time that each thread spent in compilation.

 

This method is optionally supported by the platform.
 A Java virtual machine implementation may not support the compilation
 time monitoring. The `isCompilationTimeMonitoringSupported`
 method can be used to determine if the Java virtual machine
 supports this operation.

 

 This value does not indicate the level of performance of
 the Java virtual machine and is not intended for performance comparisons
 of different virtual machine implementations.
 The implementations may have different definitions and different
 measurements of the compilation time.

**返回**

- Compilation time in milliseconds

**异常**

- **java.lang.UnsupportedOperationException** — if the Java virtual machine does not support this operation.
