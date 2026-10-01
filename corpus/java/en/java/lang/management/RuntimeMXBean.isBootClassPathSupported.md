---
id: "java-en-function-runtimemxbean-isbootclasspathsupported"
language: "java"
lang: "en"
category: "function"
name: "RuntimeMXBean.isBootClassPathSupported"
signature: "public boolean isBootClassPathSupported()"
title: "RuntimeMXBean.isBootClassPathSupported"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/RuntimeMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RuntimeMXBean.isBootClassPathSupported

```java
public boolean isBootClassPathSupported()
```

Tests if the Java virtual machine supports the boot class path
 mechanism used by the bootstrap class loader to search for class
 files.

**返回**

- `true` if the Java virtual machine supports the class path mechanism; `false` otherwise.
