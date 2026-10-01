---
id: "java-en-function-logger-isloggable"
language: "java"
lang: "en"
category: "function"
name: "Logger.isLoggable"
signature: "public boolean isLoggable(Level level)"
title: "Logger.isLoggable"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/System.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Logger.isLoggable

```java
public boolean isLoggable(Level level)
```

Checks if a message of the given level would be logged by
 this logger.

**参数**

- **level** — the log message level.

**返回**

- `true` if the given log message level is currently being logged.

**异常**

- **NullPointerException** — if `level` is `null`.
