---
id: "java-en-function-loggingmxbean-getparentloggername"
language: "java"
lang: "en"
category: "function"
name: "LoggingMXBean.getParentLoggerName"
signature: "public String getParentLoggerName(String loggerName)"
title: "LoggingMXBean.getParentLoggerName"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LoggingMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoggingMXBean.getParentLoggerName

```java
public String getParentLoggerName(String loggerName)
```

Returns the name of the parent for the specified logger.
 If the specified logger does not exist, `null` is returned.
 If the specified logger is the root `Logger` in the namespace,
 the result will be an empty string.

**参数**

- **loggerName** — The name of a `Logger`.

**返回**

- the name of the nearest existing parent logger; an empty string if the specified logger is the root logger. If the specified logger does not exist, `null` is returned.
