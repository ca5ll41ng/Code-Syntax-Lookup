---
id: "java-en-function-runtimemxbean-getlibrarypath"
language: "java"
lang: "en"
category: "function"
name: "RuntimeMXBean.getLibraryPath"
signature: "public String getLibraryPath()"
title: "RuntimeMXBean.getLibraryPath"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/RuntimeMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeMXBean.getLibraryPath

```java
public String getLibraryPath()
```

Returns the Java library path.
 This method is equivalent to `getProperty
 System.getProperty`.

 

 Multiple paths in the Java library path are separated by the
 path separator character of the platform of the Java virtual machine
 being monitored.

**返回**

- the Java library path.

**参见**

- java.lang.System#getProperty
