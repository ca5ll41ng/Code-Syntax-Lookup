---
id: "java-en-function-memorymxbean-setverbose"
language: "java"
lang: "en"
category: "function"
name: "MemoryMXBean.setVerbose"
signature: "public void setVerbose(boolean value)"
title: "MemoryMXBean.setVerbose"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryMXBean.setVerbose

```java
public void setVerbose(boolean value)
```

Enables or disables verbose output for the memory
 system.  The verbose output information and the output stream
 to which the verbose information is emitted are implementation
 dependent.  Typically, a Java virtual machine implementation
 prints a message whenever it frees memory at garbage collection.

 

 Each invocation of this method enables or disables verbose
 output globally.

**参数**

- **value** — `true` to enable verbose output; `false` to disable.
