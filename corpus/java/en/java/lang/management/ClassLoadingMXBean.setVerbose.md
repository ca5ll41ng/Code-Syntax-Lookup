---
id: "java-en-function-classloadingmxbean-setverbose"
language: "java"
lang: "en"
category: "function"
name: "ClassLoadingMXBean.setVerbose"
signature: "public void setVerbose(boolean value)"
title: "ClassLoadingMXBean.setVerbose"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/ClassLoadingMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassLoadingMXBean.setVerbose

```java
public void setVerbose(boolean value)
```

Enables or disables the verbose output for the class loading
 system.  The verbose output information and the output stream
 to which the verbose information is emitted are implementation
 dependent.  Typically, a Java virtual machine implementation
 prints a message each time a class file is loaded.

 

This method can be called by multiple threads concurrently.
 Each invocation of this method enables or disables the verbose
 output globally.

**参数**

- **value** — `true` to enable the verbose output; `false` to disable.
