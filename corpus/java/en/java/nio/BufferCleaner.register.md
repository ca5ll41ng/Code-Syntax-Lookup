---
id: "java-en-function-buffercleaner-register"
language: "java"
lang: "en"
category: "function"
name: "BufferCleaner.register"
signature: "public static Cleaner register(Object obj, Runnable action)"
title: "BufferCleaner.register"
directive: "method"
module: "java.base/java.nio"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/BufferCleaner.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BufferCleaner.register

```java
public static Cleaner register(Object obj, Runnable action)
```

Construct a new Cleaner for obj, with the associated action.

**参数**

- **obj** — object to track.
- **action** — cleanup action for obj.

**返回**

- associated cleaner.
