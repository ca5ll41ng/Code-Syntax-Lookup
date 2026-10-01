---
id: "java-en-function-loggingmxbean-getloggerlevel"
language: "java"
lang: "en"
category: "function"
name: "LoggingMXBean.getLoggerLevel"
signature: "public String getLoggerLevel(String loggerName)"
title: "LoggingMXBean.getLoggerLevel"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LoggingMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoggingMXBean.getLoggerLevel

```java
public String getLoggerLevel(String loggerName)
```

Gets the name of the log level associated with the specified logger.
 If the specified logger does not exist, `null`
 is returned.
 This method first finds the logger of the given name and
 then returns the name of the log level by calling:
 
   `getLevel Logger.getLevel`.`getName getName`;
 

 

 If the `Level` of the specified logger is `null`,
 which means that this logger's effective level is inherited
 from its parent, an empty string will be returned.

**参数**

- **loggerName** — The name of the `Logger` to be retrieved.

**返回**

- The name of the log level of the specified logger; or an empty string if the log level of the specified logger is `null`.  If the specified logger does not exist, `null` is returned.

**参见**

- Logger#getLevel
