---
id: "java-en-function-runtimemxbean-getbootclasspath"
language: "java"
lang: "en"
category: "function"
name: "RuntimeMXBean.getBootClassPath"
signature: "public String getBootClassPath()"
title: "RuntimeMXBean.getBootClassPath"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/RuntimeMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeMXBean.getBootClassPath

```java
public String getBootClassPath()
```

Returns the boot class path that is used by the bootstrap class loader
 to search for class files.

 

 Multiple paths in the boot class path are separated by the
 path separator character of the platform on which the Java
 virtual machine is running.

 

A Java virtual machine implementation may not support
 the boot class path mechanism for the bootstrap class loader
 to search for class files.
 The `isBootClassPathSupported` method can be used
 to determine if the Java virtual machine supports this method.

**返回**

- the boot class path.

**异常**

- **java.lang.UnsupportedOperationException** — if the Java virtual machine does not support this operation.
