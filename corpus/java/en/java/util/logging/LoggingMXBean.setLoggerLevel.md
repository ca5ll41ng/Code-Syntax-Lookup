---
id: "java-en-function-loggingmxbean-setloggerlevel"
language: "java"
lang: "en"
category: "function"
name: "LoggingMXBean.setLoggerLevel"
signature: "public void setLoggerLevel(String loggerName, String levelName)"
title: "LoggingMXBean.setLoggerLevel"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LoggingMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoggingMXBean.setLoggerLevel

```java
public void setLoggerLevel(String loggerName, String levelName)
```

Sets the specified logger to the specified new level.
 If the `levelName` is not `null`, the level
 of the specified logger is set to the parsed `Level`
 matching the `levelName`.
 If the `levelName` is `null`, the level
 of the specified logger is set to `null` and
 the effective level of the logger is inherited from
 its nearest ancestor with a specific (non-null) level value.

**参数**

- **loggerName** — The name of the `Logger` to be set. Must be non-null.
- **levelName** — The name of the level to set on the specified logger, or `null` if setting the level to inherit from its nearest ancestor.

**异常**

- **IllegalArgumentException** — if the specified logger does not exist, or `levelName` is not a valid level name.

**参见**

- Logger#setLevel
