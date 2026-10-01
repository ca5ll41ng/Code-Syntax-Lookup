---
id: "java-en-function-memoryhandler-flush"
language: "java"
lang: "en"
category: "function"
name: "MemoryHandler.flush"
signature: "public void flush()"
title: "MemoryHandler.flush"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/MemoryHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryHandler.flush

```java
public void flush()
```

Causes a flush on the target `Handler`.
 

 Note that the current contents of the `MemoryHandler`
 buffer are **not** written out.  That requires a "push".
