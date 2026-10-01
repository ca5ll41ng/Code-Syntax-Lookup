---
id: "java-en-function-memorymanagermxbean-isvalid"
language: "java"
lang: "en"
category: "function"
name: "MemoryManagerMXBean.isValid"
signature: "public boolean isValid()"
title: "MemoryManagerMXBean.isValid"
directive: "method"
module: "java.management/java.lang.management"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/java/lang/management/MemoryManagerMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryManagerMXBean.isValid

```java
public boolean isValid()
```

Tests if this memory manager is valid in the Java virtual
 machine.  A memory manager becomes invalid once the Java virtual
 machine removes it from the memory system.

**返回**

- `true` if the memory manager is valid in the Java virtual machine; `false` otherwise.
