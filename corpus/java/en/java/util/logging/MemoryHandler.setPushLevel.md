---
id: "java-en-function-memoryhandler-setpushlevel"
language: "java"
lang: "en"
category: "function"
name: "MemoryHandler.setPushLevel"
signature: "public synchronized void setPushLevel(Level newLevel)"
title: "MemoryHandler.setPushLevel"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/MemoryHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryHandler.setPushLevel

```java
public synchronized void setPushLevel(Level newLevel)
```

Set the `pushLevel`.  After a `LogRecord` is copied
 into our internal buffer, if its level is greater than or equal to
 the `pushLevel`, then `push` will be called.

**参数**

- **newLevel** — the new value of the `pushLevel`
