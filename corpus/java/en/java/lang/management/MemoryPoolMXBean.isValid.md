---
id: "java-en-function-memorypoolmxbean-isvalid"
language: "java"
lang: "en"
category: "function"
name: "MemoryPoolMXBean.isValid"
signature: "public boolean isValid()"
title: "MemoryPoolMXBean.isValid"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryPoolMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryPoolMXBean.isValid

```java
public boolean isValid()
```

Tests if this memory pool is valid in the Java virtual
 machine.  A memory pool becomes invalid once the Java virtual
 machine removes it from the memory system.

**返回**

- `true` if the memory pool is valid in the running Java virtual machine; `false` otherwise.
