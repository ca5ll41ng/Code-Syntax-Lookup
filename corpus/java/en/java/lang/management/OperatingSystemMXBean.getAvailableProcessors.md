---
id: "java-en-function-operatingsystemmxbean-getavailableprocessors"
language: "java"
lang: "en"
category: "function"
name: "OperatingSystemMXBean.getAvailableProcessors"
signature: "public int getAvailableProcessors()"
title: "OperatingSystemMXBean.getAvailableProcessors"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/OperatingSystemMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# OperatingSystemMXBean.getAvailableProcessors

```java
public int getAvailableProcessors()
```

Returns the number of processors available to the Java virtual machine.
 This method is equivalent to the `availableProcessors`
 method.
 

 This value may change during a particular invocation of
 the virtual machine.

**返回**

- the number of processors available to the virtual machine; never smaller than one.
