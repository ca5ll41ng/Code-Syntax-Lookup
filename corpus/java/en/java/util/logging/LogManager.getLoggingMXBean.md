---
id: "java-en-function-logmanager-getloggingmxbean"
language: "java"
lang: "en"
category: "function"
name: "LogManager.getLoggingMXBean"
signature: "public static synchronized LoggingMXBean getLoggingMXBean()"
title: "LogManager.getLoggingMXBean"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LogManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LogManager.getLoggingMXBean

```java
public static synchronized LoggingMXBean getLoggingMXBean()
```

Returns `LoggingMXBean` for managing loggers.

**返回**

- a `LoggingMXBean` object.

**参见**

- java.management/java.lang.management.PlatformLoggingMXBean

> *Since 1.5*

> **⚠ Deprecated** — `java.util.logging.LoggingMXBean` is deprecated and replaced with `java.lang.management.PlatformLoggingMXBean`. Use `getPlatformMXBean(Class) ManagementFactory.getPlatformMXBean`(PlatformLoggingMXBean.class) instead.
