---
id: "java-en-function-streamhandler-isloggable"
language: "java"
lang: "en"
category: "function"
name: "StreamHandler.isLoggable"
signature: "public boolean isLoggable(LogRecord record)"
title: "StreamHandler.isLoggable"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/StreamHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamHandler.isLoggable

```java
public boolean isLoggable(LogRecord record)
```

Check if this `Handler` would actually log a given `LogRecord`.
 

 This method checks if the `LogRecord` has an appropriate level and
 whether it satisfies any `Filter`.  It will also return false if
 no output stream has been assigned yet or the LogRecord is null.

**参数**

- **record** — a `LogRecord` (may be null).

**返回**

- true if the `LogRecord` would be logged.
