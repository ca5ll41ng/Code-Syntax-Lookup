---
id: "java-en-function-loggingmxbean-getloggernames"
language: "java"
lang: "en"
category: "function"
name: "LoggingMXBean.getLoggerNames"
signature: "public java.util.List<String> getLoggerNames()"
title: "LoggingMXBean.getLoggerNames"
directive: "method"
module: "java.logging/java.util.logging"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.logging/java/util/logging/LoggingMXBean.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LoggingMXBean.getLoggerNames

```java
public java.util.List<String> getLoggerNames()
```

Returns the list of currently registered logger names. This method
 calls `getLoggerNames` and returns a list
 of the logger names.

**返回**

- A list of `String` each of which is a currently registered `Logger` name.
