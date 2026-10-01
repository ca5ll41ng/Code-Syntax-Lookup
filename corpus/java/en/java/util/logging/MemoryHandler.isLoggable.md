---
id: "java-en-function-memoryhandler-isloggable"
language: "java"
lang: "en"
category: "function"
name: "MemoryHandler.isLoggable"
signature: "public boolean isLoggable(LogRecord record)"
title: "MemoryHandler.isLoggable"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/MemoryHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# MemoryHandler.isLoggable

```java
public boolean isLoggable(LogRecord record)
```

Check if this `Handler` would actually log a given
 `LogRecord` into its internal buffer.
 

 This method checks if the `LogRecord` has an appropriate level and
 whether it satisfies any `Filter`.  However it does **not**
 check whether the `LogRecord` would result in a "push" of the
 buffer contents. It will return false if the `LogRecord` is null.

**参数**

- **record** — a `LogRecord` (may be null).

**返回**

- true if the `LogRecord` would be logged.
