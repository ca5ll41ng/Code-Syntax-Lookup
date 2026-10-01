---
id: "java-en-function-buffercleaner-trycleaning"
language: "java"
lang: "en"
category: "function"
name: "BufferCleaner.tryCleaning"
signature: "public static boolean tryCleaning()"
title: "BufferCleaner.tryCleaning"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/BufferCleaner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferCleaner.tryCleaning

```java
public static boolean tryCleaning()
```

Try to do some cleaning. Takes a cleaner from the queue and executes it.

**返回**

- true if a cleaner was found and executed, false if there weren't any cleaners in the queue.
