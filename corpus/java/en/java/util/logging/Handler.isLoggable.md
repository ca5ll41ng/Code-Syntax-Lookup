---
id: "java-en-function-handler-isloggable"
language: "java"
lang: "en"
category: "function"
name: "Handler.isLoggable"
signature: "public boolean isLoggable(LogRecord record)"
title: "Handler.isLoggable"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/Handler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Handler.isLoggable

```java
public boolean isLoggable(LogRecord record)
```

Check if this `Handler` would actually log a given `LogRecord`.
 

 This method checks if the `LogRecord` has an appropriate
 `Level` and  whether it satisfies any `Filter`.  It also
 may make other `Handler` specific checks that might prevent a
 handler from logging the `LogRecord`. It will return false if
 the `LogRecord` is null.

**参数**

- **record** — a `LogRecord` (may be null).

**返回**

- true if the `LogRecord` would be logged.
