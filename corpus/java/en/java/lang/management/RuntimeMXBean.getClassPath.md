---
id: "java-en-function-runtimemxbean-getclasspath"
language: "java"
lang: "en"
category: "function"
name: "RuntimeMXBean.getClassPath"
signature: "public String getClassPath()"
title: "RuntimeMXBean.getClassPath"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/RuntimeMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeMXBean.getClassPath

```java
public String getClassPath()
```

Returns the Java class path that is used by the system class loader
 to search for class files.
 This method is equivalent to `getProperty
 System.getProperty`.

 

 Multiple paths in the Java class path are separated by the
 path separator character of the platform of the Java virtual machine
 being monitored.

**返回**

- the Java class path.

**参见**

- java.lang.System#getProperty
