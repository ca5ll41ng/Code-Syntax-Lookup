---
id: "java-en-function-loggingprovideraccess-demandloggerfor"
language: "java"
lang: "en"
category: "function"
name: "LoggingProviderAccess.demandLoggerFor"
signature: "public Logger demandLoggerFor(LogManager manager, String name, Module module)"
title: "LoggingProviderAccess.demandLoggerFor"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoggingProviderAccess.demandLoggerFor

```java
public Logger demandLoggerFor(LogManager manager, String name, Module module)
```

Demands a logger on behalf of the given `module`.
 

 If a named logger suitable for the given module is found
 returns it.
 Otherwise, creates a new logger suitable for the given module.

**参数**

- **name** — The logger name.
- **module** — The module on which behalf the logger is created/retrieved.

**返回**

- A logger for the given `module`.

**异常**

- **NullPointerException** — if `name` is `null` or `module` is `null`.
- **IllegalArgumentException** — if `manager` is not the default LogManager.
